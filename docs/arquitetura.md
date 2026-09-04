# Arquitetura da documentação

Este documento descreve como o repositório de documentação do FullDev School está organizado.

O objetivo da arquitetura é manter atas, documentação acadêmica, templates, links e decisões em locais previsíveis, facilitando a consulta e a manutenção do projeto.

## Estrutura atual

```text
.
├── README.md
├── docs/
│   ├── arquitetura.md
│   ├── onde-encontrar.md
│   ├── atas/
│   │   ├── README.md
│   │   └── AAAA/
│   │       └── MM/
│   │           └── AAAA-MM-DD-nome-da-reuniao.md
│   └── projeto-academico/
│       ├── README.md
│       ├── 01-documentacao-de-contexto.md
│       └── img/
└── templates/
    └── ata.md
```

## Responsabilidades

| Área | Finalidade |
| --- | --- |
| `README.md` | Porta de entrada do repositório, com links rápidos para a documentação mais importante. |
| `docs/onde-encontrar.md` | Central de links, canais, ferramentas e recursos oficiais do projeto. |
| `docs/arquitetura.md` | Explica a organização dos arquivos e os critérios para criação de novos documentos. |
| `docs/atas/` | Registros de reuniões, decisões, participantes e encaminhamentos. |
| `docs/projeto-academico/` | Documentação acadêmica migrada do repositório da disciplina, incluindo contexto, especificação, metodologia, interface, arquitetura, testes, apresentação e referências. |
| `templates/` | Modelos reutilizáveis para criação de novos documentos. |

## Convenções de organização

- Atas devem ficar em `docs/atas/AAAA/MM/`.
- Documentos acadêmicos da disciplina devem ficar em `docs/projeto-academico/`.
- Templates devem ficar em `templates/`.
- Documentos de navegação e referência geral devem ficar diretamente em `docs/`.
- Links para documentos importantes devem ser adicionados ao `README.md` e ao índice da pasta correspondente.

## Convenções de nomenclatura

- Use nomes de arquivos em letras minúsculas.
- Separe palavras com hífen.
- Evite espaços, acentos e caracteres especiais em nomes de arquivos.
- Para atas, use o formato `AAAA-MM-DD-nome-da-reuniao.md`.

## Fluxo para novos documentos

1. Identifique o tipo de documento.
2. Use o template correspondente, quando existir.
3. Salve o documento na pasta correta.
4. Atualize o README da pasta.
5. Atualize o README principal quando o documento for relevante para consulta geral.
6. Atualize `docs/onde-encontrar.md` quando o documento representar um recurso oficial do projeto.

## Navegação relacionada

- [Voltar para a página inicial](../README.md)
- [Onde encontrar cada coisa](./onde-encontrar.md)
- [Atas das reuniões](./atas/README.md)
- [Projeto acadêmico FullDev School](./projeto-academico/README.md)
