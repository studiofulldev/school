$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$moduleRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$figures = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'diagramas.json') -Encoding UTF8 -Raw | ConvertFrom-Json
$textBrush = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml('#162a3a'))
$borderPen = [Drawing.Pen]::new([Drawing.ColorTranslator]::FromHtml('#b6ccda'), 2)
$arrowPen = [Drawing.Pen]::new([Drawing.ColorTranslator]::FromHtml('#266080'), 4)
$arrowPen.CustomEndCap = [Drawing.Drawing2D.AdjustableArrowCap]::new(5, 6)
$titleFont = [Drawing.Font]::new('Segoe UI', 44, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
$subtitleFont = [Drawing.Font]::new('Segoe UI', 26, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
$boxTitleFont = [Drawing.Font]::new('Segoe UI', 25, [Drawing.FontStyle]::Bold, [Drawing.GraphicsUnit]::Pixel)
$bodyFont = [Drawing.Font]::new('Segoe UI', 28, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
$noteFont = [Drawing.Font]::new('Segoe UI', 25, [Drawing.FontStyle]::Regular, [Drawing.GraphicsUnit]::Pixel)
foreach ($figure in $figures) {
    $bitmap = [Drawing.Bitmap]::new([int]$figure.width, [int]$figure.height)
    $graphics = [Drawing.Graphics]::FromImage($bitmap)
    try {
        $graphics.SmoothingMode = [Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $graphics.TextRenderingHint = [Drawing.Text.TextRenderingHint]::AntiAliasGridFit
        $graphics.Clear([Drawing.Color]::White)
        $graphics.DrawString($figure.title, $titleFont, $textBrush, [single]60, [single]20)
        $graphics.DrawString($figure.subtitle, $subtitleFont, $textBrush, [single]60, [single]88)
        foreach ($arrow in $figure.arrows) {
            $graphics.DrawLine($arrowPen, [single]$arrow.x1, [single]$arrow.y1, [single]$arrow.x2, [single]$arrow.y2)
        }
        foreach ($box in $figure.boxes) {
            $fill = [Drawing.SolidBrush]::new([Drawing.ColorTranslator]::FromHtml($box.color))
            try {
                $graphics.FillRectangle($fill, [single]$box.x, [single]$box.y, [single]$box.w, [single]$box.h)
                $graphics.DrawRectangle($borderPen, [single]$box.x, [single]$box.y, [single]$box.w, [single]$box.h)
            } finally { $fill.Dispose() }
            if ($graphics.MeasureString($box.title, $boxTitleFont).Width -gt ($box.w - 36)) { throw "Título excede caixa: $($box.title)" }
            $graphics.DrawString($box.title, $boxTitleFont, $textBrush, [single]($box.x + 20), [single]($box.y + 16))
            $lineNumber = 0
            foreach ($line in $box.lines) {
                if ($graphics.MeasureString($line, $bodyFont).Width -gt ($box.w - 36)) { throw "Texto excede caixa: $line" }
                if ((88 + $lineNumber * 42) -gt ($box.h - 10)) { throw "Texto excede altura da caixa: $line" }
                $graphics.DrawString($line, $bodyFont, $textBrush, [single]($box.x + 20), [single]($box.y + 56 + $lineNumber * 42))
                $lineNumber++
            }
        }
        $noteNumber = 0
        foreach ($note in $figure.notes) {
            if ($graphics.MeasureString($note, $noteFont).Width -gt ($figure.width - 120)) { throw "Nota excede imagem: $note" }
            $graphics.DrawString($note, $noteFont, $textBrush, [single]60, [single]($figure.height - 110 + $noteNumber * 38))
            $noteNumber++
        }
        $imagePath = Join-Path $moduleRoot "imagens/$($figure.name).png"
        $bitmap.Save($imagePath, [Drawing.Imaging.ImageFormat]::Png)
    } finally { $graphics.Dispose(); $bitmap.Dispose() }
}
foreach ($object in @($textBrush, $borderPen, $arrowPen, $titleFont, $subtitleFont, $boxTitleFont, $bodyFont, $noteFont)) { $object.Dispose() }
$packageDirectory = Join-Path $moduleRoot 'canvas'
$assetDirectory = Join-Path $packageDirectory 'web_resources/imagens'
[IO.Directory]::CreateDirectory($assetDirectory) | Out-Null
foreach ($figure in $figures) {
    Copy-Item -LiteralPath (Join-Path $moduleRoot "imagens/$($figure.name).png") -Destination $assetDirectory -Force
}
$packagePath = Join-Path $moduleRoot 'modulo-1-canvas.imscc'
# Apenas sobrescreve o artefato gerado com nome fixo dentro da pasta deste módulo.
$archiveStream = [IO.File]::Open($packagePath, [IO.FileMode]::Create)
$archive = [IO.Compression.ZipArchive]::new($archiveStream, [IO.Compression.ZipArchiveMode]::Create)
try {
    foreach ($file in Get-ChildItem -LiteralPath $packageDirectory -File -Recurse) {
        $entryName = $file.FullName.Substring($packageDirectory.Length + 1).Replace('\', '/')
        [IO.Compression.ZipFileExtensions]::CreateEntryFromFile($archive, $file.FullName, $entryName, [IO.Compression.CompressionLevel]::Optimal) | Out-Null
    }
} finally { $archive.Dispose(); $archiveStream.Dispose() }
Write-Output "Geradas 5 imagens PNG e pacote $packagePath"
