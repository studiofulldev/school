# Módulo 1 Introdução ao Mundo da Computação

Material da trilha **Descobrindo o Mundo Tech**, do FullDev School, projeto desenvolvido no contexto da PUC Minas.

## Arquivos para usar

- [Documento completo](./modulo-1.md). Texto editável de todas as aulas, atividades, aprofundamentos e referências.
- [Documento em HTML](./modulo-1.html). Versão para leitura no navegador, com imagens e navegação.
- [Pacote para o Canvas LMS](./modulo-1-canvas.imscc). Aulas e imagens organizadas em um módulo, em formato Common Cartridge 1.1.
- [Orientações de publicação](./publicacao-canvas.md). Importação, configuração das atividades e revisão antes de publicar.
- [Guia do educador](./guia-do-educador.md). Respostas, comentários, critérios de avaliação e orientação de mediação. **Não importar para a área dos estudantes.**
- [Curadoria de vídeos](./curadoria-de-videos.md). Oito vídeos com áudio em português selecionados e já colocados junto dos conteúdos, com links originais, duração e idioma.
- [Registro de autoria e fontes](./autoria-e-fontes.md). Procedência dos textos, das figuras e das referências.
- [Imagens](./imagens/). Diagramas originais em PNG para publicação e SVG para edição.

## Organização pedagógica

O percurso principal tem quatro aulas de cerca de 40 minutos, uma atividade integradora de 20 minutos e uma verificação de 15 minutos. A estimativa total é de **3 horas e 15 minutos**. O tempo é uma proposta de estudo, não uma carga horária oficial aprovada. A leitura complementar é opcional e não condiciona a conclusão.

As páginas contêm o conteúdo necessário para estudar sem assistir a vídeos. Os oito vídeos com áudio em português selecionados já aparecem junto dos assuntos correspondentes, inclusive nas páginas do pacote. Assistir a todos acrescenta cerca de 1 hora e 44 minutos de estudo opcional. Não há gravação pela equipe.

## Procedência do material

Os textos, exemplos, questões e diagramas foram produzidos especificamente para este módulo. Os vídeos são indicados pelos links dos canais originais, com crédito aos responsáveis. Não foram copiados arquivos audiovisuais, fotografias, miniaturas, apostilas ou transcrições de terceiros. Não há material didático de faculdade concorrente ou indicação que exija assinatura.

Os responsáveis pelos vídeos conservam seus direitos. A entrega faz curadoria de links públicos e não declara que os vídeos sejam de domínio público. As condições de uso e a procedência estão registradas no arquivo de curadoria.

## Manutenção

Edite os arquivos Markdown. Para regenerar HTML, imagens e pacote, execute a partir da raiz do repositório:

```powershell
node docs/conteudos/modulo-1/scripts/gerar-material.mjs
powershell -NoProfile -ExecutionPolicy Bypass -File docs/conteudos/modulo-1/scripts/gerar-imagens-e-pacote.ps1
powershell -NoProfile -ExecutionPolicy Bypass -File docs/conteudos/modulo-1/scripts/validar-pacote.ps1
```

O gerador usa apenas bibliotecas nativas do Node.js e do Windows. A validação verifica estrutura, referências internas e imagens. A importação real depende da instância do Canvas e deve ser conferida pela equipe no curso de destino.

- [Ementa de origem](../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
- [Página inicial do repositório](../../../README.md)
