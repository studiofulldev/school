$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.IO.Compression.FileSystem
Add-Type -AssemblyName System.Drawing
$moduleRoot = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$archive = [IO.Compression.ZipFile]::OpenRead((Join-Path $moduleRoot 'modulo-1-canvas.imscc'))
function Read-Entry([string]$entryName) {
    $entry = $archive.GetEntry($entryName)
    if ($null -eq $entry) { throw "Entrada ausente: $entryName" }
    $reader = [IO.StreamReader]::new($entry.Open(), [Text.Encoding]::UTF8)
    try { return $reader.ReadToEnd() } finally { $reader.Dispose() }
}
try {
    [xml]$manifest = Read-Entry 'imsmanifest.xml'
    [xml]$modules = Read-Entry 'course_settings/module_meta.xml'
    $resources = @($manifest.SelectNodes("//*[local-name()='resource']"))
    $ids = @($resources | ForEach-Object { $_.identifier })
    if (($ids | Select-Object -Unique).Count -ne $ids.Count) { throw 'Identificadores repetidos' }
    foreach ($reference in $manifest.SelectNodes("//*[local-name()='file']")) {
        if ($null -eq $archive.GetEntry($reference.href)) { throw "Arquivo não encontrado: $($reference.href)" }
    }
    foreach ($reference in $manifest.SelectNodes("//*[@identifierref]")) {
        if ($reference.identifierref -notin $ids) { throw "Recurso não encontrado: $($reference.identifierref)" }
    }
    $pageEntries = @($archive.Entries | Where-Object { $_.FullName -like 'wiki_content/*.html' })
    $imageEntries = @($archive.Entries | Where-Object { $_.FullName -like 'web_resources/imagens/*.png' })
    if ($pageEntries.Count -ne 9 -or $imageEntries.Count -ne 5) { throw 'Quantidade incorreta de páginas ou imagens' }
    foreach ($entry in $archive.Entries) {
        if ($entry.FullName -match 'educador|gabarito|roteiros|\.md$|\.mp4$') { throw "Material indevido no pacote: $($entry.FullName)" }
        if ($entry.FullName -match '\.\.|^/') { throw 'Caminho indevido no pacote' }
    }
    foreach ($entry in $pageEntries) {
        $html = Read-Entry $entry.FullName
        $isFrontPage = $entry.FullName -eq 'wiki_content/00-boas-vindas.html'
        $expectedState = if ($isFrontPage) { 'active' } else { 'unpublished' }
        $expectedFrontPage = if ($isFrontPage) { 'true' } else { 'false' }
        if ($html -notmatch 'lang="pt-BR"' -or $html -notmatch "name=`"workflow_state`" content=`"$expectedState`"" -or $html -notmatch "name=`"front_page`" content=`"$expectedFrontPage`"") { throw "Metadados ausentes: $($entry.FullName)" }
        if ($html -match '<script|<iframe|data:|@@TOKEN|<!-- pagina:') { throw "Conteúdo inesperado: $($entry.FullName)" }
        foreach ($match in [regex]::Matches($html, '<img src="([^"]+)" alt="([^"]+)"')) {
            $imageName = $match.Groups[1].Value.Replace('$IMS-CC-FILEBASE$/', '')
            if ($null -eq $archive.GetEntry($imageName)) { throw "Imagem ausente: $imageName" }
            if ($match.Groups[2].Value.Length -lt 15) { throw 'Descrição de imagem insuficiente' }
        }
    }
    foreach ($entry in $imageEntries) {
        $stream = $entry.Open()
        $image = [Drawing.Image]::FromStream($stream)
        try { if ($image.Width -ne 1600 -or $image.Height -lt 600) { throw 'Dimensões incorretas' } }
        finally { $image.Dispose(); $stream.Dispose() }
    }
    $moduleItems = @($modules.SelectNodes("//*[local-name()='items']/*[local-name()='item']"))
    if ($moduleItems.Count -ne 9) { throw 'Módulo sem nove itens' }
    foreach ($item in $moduleItems) {
        if ($item.identifierref -notin $ids -or $item.content_type -ne 'WikiPage') { throw 'Item de módulo inválido' }
    }
    $welcome = Read-Entry 'wiki_content/00-boas-vindas.html'
    if ($welcome -notmatch 'Índice do módulo' -or ([regex]::Matches($welcome, '\$WIKI_REFERENCE\$/pages/')).Count -ne 8) { throw 'Índice da página inicial incompleto' }
    $standalone = Get-Content -LiteralPath (Join-Path $moduleRoot 'modulo-1.html') -Raw -Encoding UTF8
    $videos = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'videos-verificados.json') -Raw -Encoding UTF8 | ConvertFrom-Json
    $videoPages = @{
        'Y7zvYG4NAxg' = '01-computacao-e-informacao'
        '8mei6uVttho' = '02-problemas-algoritmos-e-areas'
        'xajcV4lwY3Q' = '03-evolucao-das-maquinas'
        'uQPiyxoCk9E' = '03-evolucao-das-maquinas'
        'nlO5hySqJFA' = '04-computacao-conectada'
        'OFIVUTmc2cs' = '04-computacao-conectada'
        'qDmojpkd8rE' = '04-computacao-conectada'
        '22nd99SLgNA' = '07-aprofundamentos-opcionais'
    }
    if ($videos.Count -ne 8 -or @($videos.id | Select-Object -Unique).Count -ne 8) { throw 'Esperados oito videos distintos' }
    foreach ($video in $videos) {
        if ($video.playability -ne 'OK' -or -not $videoPages.ContainsKey($video.id)) { throw "Video sem verificacao ou sem pagina: $($video.id)" }
        if ($video.audio_language -notmatch '^pt(?:-|$)' -or -not $video.audio_language_evidence) { throw "Video sem audio em portugues verificado: $($video.id)" }
        $pageHtml = Read-Entry "wiki_content/$($videoPages[$video.id]).html"
        if (-not $pageHtml.Contains($video.url) -or -not $standalone.Contains($video.url)) { throw "Link ausente: $($video.id)" }
        $duration = '{0}min{1:00}s' -f [math]::Floor($video.duration_seconds / 60), ($video.duration_seconds % 60)
        if (-not $pageHtml.Contains($duration)) { throw "Duracao incorreta: $($video.id)" }
    }
    $videoLinkCount = 0
    foreach ($entry in $pageEntries) {
        $videoLinkCount += [regex]::Matches((Read-Entry $entry.FullName), 'href="https://www.youtube.com/watch\?v=').Count
    }
    if ($videoLinkCount -ne 8) { throw 'Quantidade incorreta de links de video nas paginas' }
    foreach ($removedId in @('mCq8-xTH7jA', 'xnyFYiK2rSY', 'Dxcc6ycZ73M', '20QUNgFIrK0', 'OeU5m6vRyCk')) {
        if ($standalone.Contains($removedId)) { throw "Video em ingles ainda presente: $removedId" }
    }
    foreach ($match in [regex]::Matches($standalone, '<img src="([^"]+)"')) {
        if (-not (Test-Path -LiteralPath (Join-Path $moduleRoot $match.Groups[1].Value))) { throw 'Imagem local ausente' }
    }
    $report = "Validacao local concluida: pagina inicial e indice, 9 paginas, 5 PNG, 8 videos em portugues nas paginas corretas, videos em ingles removidos, referencias internas resolvidas, XML legivel, gabarito excluido. Importacao real no Canvas nao executada."
    Write-Output $report
} finally { $archive.Dispose() }
