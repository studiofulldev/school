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

## Modelo de Aprendizagem

Proposta: a plataforma de cursos utilizara o Canvas LMS em instancia propria (Docker), sob supervisao da PUC Minas.

O diferencial da plataforma nao e apenas disponibilizar material educacional, e sim comprovar a pratica. O modelo combina referencias de plataformas conhecidas com recursos nativos do Canvas:

- Estrutura em trilhas (inspirada no TryHackMe): Trilha > Modulo > Tarefa > Questao. Uma tarefa so e concluida quando suas questoes sao respondidas corretamente, trocando "assisti a aula" por "demonstrei o conhecimento". No Canvas, isso e feito com modulos, requisitos de conclusao e pre-requisitos entre modulos.
- Dominio por habilidade (inspirado na Khan Academy): cada habilidade possui niveis (tentou, familiarizado, proficiente, dominado). No Canvas, habilidades sao cadastradas como Outcomes (resultados de aprendizagem) e acompanhadas pelo Learning Mastery Gradebook. Esse acompanhamento pode ser utilizado durante as sessoes de instrucao, onde o instrutor pode ter conhecimento dos pontos fortes e fracos dos seus alunos. [Saiba mais na Instructure.](https://community.instructure.com/en/discussion/666380/enhanced-learning-mastery-gradebook-for-canvas-q3-2026-feature-overview)
- Gamificacao: XP concedido por respostas corretas e entregas praticas, nunca por apenas abrir paginas; sequencia de dias de estudo; conquistas; ligas opcionais por turma, evitando um ranking global que desmotive iniciantes. No MVP, usa recursos nativos do Canvas, design instrucional e um relatorio semanal gerado a partir da exportacao de notas. A evolucao prevista e uma ferramenta externa integrada ao Canvas (ver Evolucao: integracao com o Canvas).
- Certificacao: os questionarios exigidos pelos requisitos de conclusao fornecem a avaliacao necessaria ao certificado de conclusao, sem exigir um sistema de provas separado. O certificado de participacao continua possivel para quem apenas acompanhar as aulas.
- Mentorias: grupos de 3 alunos por mentor, com uma mentoria pratica por modulo. No Canvas, cada grupo de mentoria e um Grupo do curso.

### Mapeamento para o Canvas

|Conceito do projeto|Recurso do Canvas|Observacao|
|---|---|---|
|Trilha|Curso|Uma trilha por curso simplifica matricula, progresso e certificado|
|Modulo|Modulo|Pre-requisitos entre modulos liberam a trilha em sequencia|
|Tarefa|Item de modulo (pagina, video, tarefa ou questionario)|Cada item possui requisito de conclusao|
|Questao|Questionario|Requisito "pontuar ao menos X" conclui a tarefa somente com acerto|
|Entrega pratica|Tarefa com envio de URL|Link de repositorio ou deploy como evidencia|
|Habilidade e dominio|Outcomes e Learning Mastery Gradebook|Escala de dominio configuravel|
|Turma|Secao|Permite ligas e datas por turma|
|Grupo de mentoria|Grupo|3 alunos por mentor|
|Forum|Discussoes|Por curso ou por modulo|
|Mentoria ao vivo|Microsoft Teams|Sessoes por grupo de mentoria|
|Agenda|Calendario|Aulas, mentorias e prazos|

### Estrategias de gamificacao

#### MVP

O MVP nao depende de desenvolvimento integrado ao Canvas, de Developer Keys ou de servidor proprio.

Recursos nativos do Canvas:

- Pontos como XP: cada questionario e entrega vale pontos proporcionais a dificuldade, e o total do curso funciona como XP da trilha. Como esses pontos tambem sao notas, a escala deve ser planejada para os dois usos.
- Desbloqueio progressivo: pre-requisitos e requisitos de conclusao dao a sensacao de avancar de nivel a cada modulo.
- Feedback imediato: questionarios exibem a correcao ao final, com explicacao em cada questao.
- Desafios bonus: questionarios opcionais, fora dos requisitos obrigatorios, que valem pontos extras.

Design instrucional:

- Narrativa de jornada: modulos apresentados como fases e tarefas como missoes, com objetivo claro no inicio de cada modulo.
- Reconhecimento: avisos semanais do curso destacando conquistas da turma e dos grupos de mentoria.
- Meta coletiva: pontuacao somada de cada grupo de mentoria, estimulando cooperacao em vez de competicao individual.

Relatorio semanal:

- Os instrutores exportam semanalmente as notas do curso (CSV) pelo proprio Canvas.
- Um script calcula XP, nivel, conquistas por pontuacao (modulo concluido, trilha concluida), semanas ativas consecutivas e ranking por secao.
- O resultado e publicado como pagina ou aviso dentro do proprio curso, sem hospedagem externa.
- O ranking usa apelidos e inclui apenas quem optar por participar.
- O relatorio tambem lista quem concluiu a trilha, e o certificado de conclusao e emitido manualmente a partir dessa lista.
- Limites: atualizacao semanal e passo manual de exportacao. Sequencia diaria nao e possivel, pois a exportacao nao traz datas de entrega.

#### Evolucao apos o MVP

Recursos previstos para a ferramenta externa integrada ao Canvas:

- Painel do participante: XP acumulado entre trilhas, nivel atual e progresso para o proximo nivel, atualizados automaticamente.
- Sequencia de dias: contada por questionario concluido ou entrega enviada, nunca por acesso a paginas.
- Conquistas automaticas: por exemplo, primeiro modulo concluido, trilha concluida, 7 dias de sequencia e habilidade dominada.
- Ligas por turma: ranking por secao, com participacao opcional e exibicao de nome autorizada pelo participante.
- Certificado de conclusao: emitido automaticamente a partir dos requisitos concluidos no Canvas.

Regras gerais:

- XP somente por evidencia de aprendizagem (acerto, entrega), nunca por tempo de tela ou acesso.
- Metas pequenas e frequentes, compativeis com sessoes de aprendizado de 15 a 30 minutos.

## Evolucao: integracao com o Canvas

Fora do escopo do MVP. Esta e a direcao prevista para as proximas versoes: a ferramenta de gamificacao sera integrada ao Canvas, sem substitui-lo, e ocupara o lugar do relatorio semanal manual:

- LTI 1.3: a ferramenta aparece na navegacao do curso, com login unico pelo Canvas.
- API REST do Canvas: leitura periodica de notas, envios, conclusao de modulos e resultados de Outcomes para calcular XP, sequencias e conquistas.
- Developer Keys (LTI e API): criadas pela administracao da instancia, mantida pelo projeto de extensao sob supervisao da PUC Minas.
- Dados pessoais: a ferramenta armazena apenas o identificador do Canvas e os dados de gamificacao, sem copiar e-mail ou outros dados pessoais.

### O que e o LTI 1.3

LTI (Learning Tools Interoperability) e um padrao aberto da 1EdTech para conectar ferramentas externas a plataformas de ensino. Com ele, a ferramenta de gamificacao pode:

- Abrir dentro do Canvas com login unico, recebendo quem e o usuario, o curso e o papel (aluno, instrutor).
- Enviar notas de volta ao livro de notas do Canvas.
- Consultar a lista de participantes do curso, util para ligas por turma.
- Inserir conteudo da ferramenta diretamente nos modulos.

## Diagrama de Classes

Classes conceituais:

|Classe|Responsabilidade|Relacionamentos principais|
|---|---|---|
|Usuario|Representa participante, autor, validador ou coordenador|Possui perfil e pode realizar inscricoes, submissoes ou validacoes|
|Perfil|Define permissoes de acesso|Associado a Usuario|
|Atividade|Representa trilha, oficina, curso, desafio, hackathon, squad ou projeto|Possui autor, status, inscricoes e entregas|
|Modulo|Representa aulas ou etapas de uma atividade|Pertence a Atividade e pode ter cadencia de liberacao|
|EventoXP|Registra cada concessao de pontos de experiencia na ferramenta de gamificacao|Relacionado a Usuario e a origem no Canvas (questionario, entrega, conquista)|
|Conquista|Representa uma insignia obtida pelo participante|Relacionada a Usuario e a regra de concessao|
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
- xp_eventos
- conquistas
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
- Um usuario acumula muitos eventos de XP e muitas conquistas.

Tarefas, questoes, tentativas e dominio por habilidade sao mantidos pelo Canvas e consultados pela API; nao sao replicados no modelo do projeto.

As entidades `xp_eventos` e `conquistas` pertencem a ferramenta externa prevista apos o MVP. No MVP, esses dados sao calculados pelo script do relatorio semanal a partir da exportacao de notas.

## Esquema Relacional

Esquema inicial previsto:

- `perfis(id, nome, descricao)`
- `usuarios(id, nome, email, senha_hash, perfil_id, criado_em)`
- `atividades(id, titulo, descricao, tipo, tema, nivel, formato, vagas, status, autor_id, criado_em, publicado_em)`
- `modulos(id, atividade_id, titulo, ordem, liberado_em, descricao)`
- `xp_eventos(id, usuario_id, origem_tipo, origem_canvas_id, pontos, criado_em)`
- `conquistas(id, usuario_id, codigo, obtida_em)`
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

### Proposta de stack

|Camada|Tecnologia proposta|Justificativa|
|---|---|---|
|Plataforma de cursos|Canvas LMS (instancia propria em Docker)|Instancia mantida pelo projeto de extensao sob supervisao da PUC Minas, com acesso para participantes externos|
|Conteudo|Markdown em repositorio GitHub, publicado em paginas do Canvas|A curadoria academica passa a ser a revisao de pull request, fluxo ja utilizado pela equipe|
|Videos|YouTube (nao listado), incorporado no Canvas|Hospedagem gratuita, sem consumir armazenamento da instancia|
|Gamificacao no MVP|Script sobre a exportacao de notas do Canvas (CSV)|Sem Developer Keys nem servidor; resultado publicado em pagina do curso|
|Integracao (apos o MVP)|LTI 1.3 e API REST do Canvas|Login unico e leitura de notas e progresso|
|Frontend da ferramenta de gamificacao (apos o MVP)|Angular|Alinhado ao foco da disciplina (Aplicacao Web Front-End) e as tecnologias citadas pelo projeto|
|Backend da ferramenta de gamificacao (apos o MVP)|A definir|Necessario: o login LTI 1.3 e o uso da API exigem servidor, nao funcionam em site estatico|

### Ordem de construcao

MVP:

1. Estruturar a primeira trilha no Canvas: modulos, requisitos de conclusao, questionarios e Outcomes.
2. Aplicar a gamificacao nativa e o design instrucional: pontuacao, desbloqueio progressivo, desafios bonus, narrativa e metas por grupo.
3. Criar o script do relatorio semanal e publicar o primeiro relatorio no curso.
4. Avaliar com a primeira turma quais mecanicas geram engajamento.

Evolucao apos o MVP:

5. Criar na instancia as Developer Keys (LTI e API) e um curso de testes.
6. Ferramenta de gamificacao: painel de XP, niveis e sequencia de dias.
7. Conquistas automaticas, ligas por turma e certificado de conclusao.

## Hospedagem

A hospedagem inicial pode ser feita em plataforma gratuita para sites estaticos, como GitHub Pages, Vercel ou Netlify. Caso a aplicacao evolua para backend, sera necessario adicionar servico de API e banco de dados.

Proposta: esta prevista a execucao do Canvas em Docker em uma VPS separada da infraestrutura da PUC Minas, disponibilizada para o projeto e administrada pelo projeto de extensao sob supervisao da universidade. No MVP, apenas o Canvas precisa de hospedagem: o script do relatorio semanal roda localmente e publica o resultado no proprio curso. Apos o MVP, a ferramenta de gamificacao precisara de backend (exigido pelo LTI 1.3), HTTPS e banco de dados para `xp_eventos` e `conquistas`.

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
