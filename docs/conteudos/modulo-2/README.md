# Módulo 2 — Lógica e Pensamento Computacional

Material da trilha **Descobrindo o Mundo Tech**, do FullDev School, desenvolvido no contexto de projeto acadêmico da PUC Minas.

## Arquivos

- [Conteúdo editável](./modulo-2.md): seis aulas, atividade, verificação, aprofundamentos e glossário.
- [Leitura em HTML](./modulo-2.html): versão contínua para navegador.
- [Pacote Canvas](./modulo-2-canvas.imscc): Common Cartridge 1.1, com 11 páginas em um módulo.
- [Publicação no Canvas](./publicacao-canvas.md): importação e revisão.
- [Guia do educador](./guia-do-educador.md): respostas e critérios; **não enviar aos estudantes**.
- [Autoria e fontes](./autoria-e-fontes.md): procedência e limites de uso.

O percurso principal propõe cerca de **4 horas e 15 minutos**. Os aprofundamentos são opcionais. A página inicial contém o índice. O pacote traz as questões e a atividade como páginas de conteúdo; a equipe pode configurá-las depois como questionário e tarefa, segundo as regras do curso.

## Manutenção

A partir da raiz do repositório, execute:

~~~powershell
node docs/conteudos/modulo-2/scripts/gerar-material.mjs
node docs/conteudos/modulo-2/scripts/gerar-pacote.mjs
node docs/conteudos/modulo-2/scripts/validar-pacote.mjs
~~~

Os scripts usam apenas recursos nativos do Node.js. A validação é local; a importação e a apresentação na instância institucional do Canvas ainda precisam ser conferidas no curso de destino.

A [ementa](../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md) determina o escopo deste módulo.
