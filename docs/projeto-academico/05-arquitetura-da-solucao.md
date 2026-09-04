# Arquitetura da Solucao

A solucao sera uma aplicacao web responsiva, organizada em tres frentes de produto: site institucional, plataforma de cursos e hub comunitario. A v1 deve permitir apresentacao publica do projeto, navegacao pelo catalogo, consumo de cursos com cadencia, inscricao em atividades, progresso do aluno, forum, vagas, eventos, submissao de propostas, curadoria academica e consulta de indicadores basicos.

## Visao Geral

Componentes previstos:

- Site institucional: paginas publicas sobre problema, solucao, publico, impacto, equipe, parceiros e formas de participacao.
- Plataforma de cursos: telas de catalogo, detalhes, area do participante, aulas, progresso e evidencias.
- Hub comunitario: forum, vagas, eventos, comunicados e oportunidades.
- Camada de aplicacao: regras para inscricao, cadencia de aulas, progresso, hub, submissao, mudanca de status, registro de entregas e calculo de indicadores.
- Camada de dados: armazenamento de usuarios, atividades, modulos, inscricoes, progresso, discussoes, vagas, eventos, entregas, avaliacoes e pareceres.
- Servicos de apoio: autenticacao, exportacao de dados e hospedagem.

## Diagrama de Classes

Classes conceituais:

|Classe|Responsabilidade|Relacionamentos principais|
|---|---|---|
|Usuario|Representa participante, autor, validador ou coordenador|Possui perfil e pode realizar inscricoes, submissoes ou validacoes|
|Perfil|Define permissoes de acesso|Associado a Usuario|
|Atividade|Representa trilha, oficina, curso, desafio, hackathon, squad ou projeto|Possui autor, status, inscricoes e entregas|
|Modulo|Representa aulas ou etapas de uma atividade|Pertence a Atividade e pode ter cadencia de liberacao|
|Inscricao|Registra participacao de um usuario em uma atividade|Relaciona Usuario e Atividade|
|Progresso|Registra avanco do aluno por modulo|Relaciona Inscricao e Modulo|
|TopicoForum|Registra discussoes por curso ou assunto|Relacionado a Atividade e Usuario|
|Vaga|Registra oportunidade divulgada no hub|Pode ser publicada por coordenador ou parceiro|
|Evento|Registra agenda da comunidade|Pode estar vinculado a atividade, parceiro ou comunidade|
|Entrega|Registra evidencia pratica produzida pelo participante|Relacionada a Inscricao|
|Avaliacao|Registra satisfacao e feedback do participante|Relacionada a Inscricao ou Atividade|
|ParecerCuradoria|Registra analise academica de uma atividade|Relacionada a Atividade e Usuario validador|
|IndicadorImpacto|Representa metricas consolidadas de alcance, permanencia, entregas e engajamento|Calculado a partir de inscricoes, entregas e avaliacoes|

## Modelo ER

Entidades principais:

- usuarios
- perfis
- atividades
- modulos
- inscricoes
- progresso
- topicos_forum
- vagas
- eventos
- entregas
- avaliacoes
- pareceres_curadoria

Relacionamentos principais:

- Um usuario possui um perfil.
- Um usuario autor pode criar muitas atividades.
- Uma atividade pode ter muitas inscricoes.
- Uma atividade pode ter muitos modulos.
- Uma inscricao pertence a um usuario participante e a uma atividade.
- Uma inscricao pode ter muitos registros de progresso.
- Uma atividade pode ter muitos topicos de forum.
- O hub pode listar muitas vagas e muitos eventos.
- Uma inscricao pode ter zero ou muitas entregas.
- Uma inscricao pode ter uma avaliacao de satisfacao.
- Uma atividade pode ter muitos pareceres de curadoria.

## Esquema Relacional

Esquema inicial previsto:

- `perfis(id, nome, descricao)`
- `usuarios(id, nome, email, senha_hash, perfil_id, criado_em)`
- `atividades(id, titulo, descricao, tipo, tema, nivel, formato, vagas, status, autor_id, criado_em, publicado_em)`
- `modulos(id, atividade_id, titulo, ordem, liberado_em, descricao)`
- `inscricoes(id, usuario_id, atividade_id, status, inscrito_em, concluido_em)`
- `progresso(id, inscricao_id, modulo_id, status, atualizado_em)`
- `topicos_forum(id, atividade_id, usuario_id, titulo, mensagem, criado_em)`
- `vagas(id, titulo, empresa, descricao, nivel, localidade, url, status, publicado_em)`
- `eventos(id, titulo, descricao, tipo, data_inicio, local, url, status)`
- `entregas(id, inscricao_id, titulo, descricao, url_evidencia, enviado_em)`
- `avaliacoes(id, inscricao_id, nota, comentario, criado_em)`
- `pareceres_curadoria(id, atividade_id, validador_id, decisao, comentario, criado_em)`

## Modelo Fisico

O modelo fisico sera definido quando a tecnologia de backend e banco de dados for confirmada. Para a v1, o projeto deve manter o modelo preparado para persistir os registros necessarios aos indicadores de impacto.

## Tecnologias Utilizadas

Tecnologias candidatas para a v1:

- HTML, CSS e JavaScript para uma primeira aplicacao web simples.
- GitHub Pages, Vercel ou Netlify para hospedagem.
- JSON local, LocalStorage ou API simples para prototipacao.
- Backend e banco de dados relacional em etapa posterior, caso o escopo da disciplina permita.

A escolha final deve considerar prazo, requisitos da disciplina, facilidade de manutencao e capacidade de demonstrar os fluxos essenciais.

## Hospedagem

A hospedagem inicial pode ser feita em plataforma gratuita para sites estaticos, como GitHub Pages, Vercel ou Netlify. Caso a aplicacao evolua para backend, sera necessario adicionar servico de API e banco de dados.

## Qualidade de Software

Caracteristicas de qualidade priorizadas:

|Caracteristica|Aplicacao no projeto|Metrica prevista|
|---|---|---|
|Usabilidade|Interface clara para iniciantes|Taxa de conclusao de tarefas em testes de usabilidade|
|Acessibilidade|Conteudo legivel e responsivo|Verificacao de contraste, navegacao e leitura em mobile|
|Seguranca|Protecao de dados pessoais|Controle de acesso por perfil e armazenamento adequado|
|Confiabilidade|Fluxos consistentes de inscricao e curadoria|Testes dos principais casos de uso|
|Manutenibilidade|Codigo organizado por componentes e responsabilidades|Padrao de commits, revisoes e estrutura de arquivos|
|Escalabilidade|Crescimento gradual de atividades e participantes|Separacao entre dados, regras e interface|
