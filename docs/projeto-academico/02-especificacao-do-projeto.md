# Especificacoes do Projeto

Esta especificacao descreve a FullDev School a partir da perspectiva dos usuarios. Foram consideradas personas, historias de usuario, processos principais, indicadores de impacto, requisitos funcionais, requisitos nao funcionais, restricoes e matriz de rastreabilidade.

O modelo de produto possui duas vertentes principais:

- Instrutores: membros selecionados da comunidade criam propostas de trilhas, cursos e atividades. As propostas passam por orientacao, validacao academica pelo ICEI/PUC Minas, gravacao e publicacao.
- Alunos: participantes acessam gratuitamente cursos, trilhas e atividades praticas, registram progresso, constroem evidencias e participam da comunidade.

Do ponto de vista de produto, a solucao sera composta por tres frentes:

- Plataforma de cursos: area de aprendizagem, trilhas, cursos, aulas, desafios, progresso e evidencias.
- Hub comunitario: area de comunidade com forum, vagas, eventos, comunicados e oportunidades.
- Site institucional: area publica para explicar o projeto, apresentar equipe, parceiros, proposta de valor e chamadas para participacao.

Hackathons com premiacoes, certificados formais, programas de aceleracao, patrocinadores e banco de talentos sao possibilidades de expansao. Na v1, devem ser tratados como backlog ou piloto manual ate que regras, parceiros e responsabilidades estejam definidos.

## Personas

### Persona 1: Estudante do ensino medio

Pessoa estudante de escola publica, com interesse em tecnologia, mas sem clareza sobre por onde comecar. Consome videos gratuitos, porem sente falta de uma trilha organizada, atividades praticas e contato com pessoas que ja atuam na area.

Necessidades principais:

- Encontrar uma trilha inicial clara e gratuita.
- Participar de atividades praticas de baixa barreira de entrada.
- Receber orientacao sobre estudos, carreira e portfolio.

### Persona 2: Pessoa em transicao de carreira

Pessoa que trabalha fora da area de tecnologia e busca migrar para desenvolvimento de software. Precisa conciliar estudo com trabalho, quer construir portfolio e procura experiencias praticas que demonstrem capacidade para futuras oportunidades.

Necessidades principais:

- Selecionar atividades por nivel, tema e disponibilidade.
- Participar de desafios e projetos colaborativos.
- Registrar entregas praticas e evidencias de participacao.

### Persona 3: Extensionista universitaria

Pessoa que cursa tecnologia e participa de atividades de extensao. Deseja criar oficinas e desafios para a comunidade, mas precisa de orientacao, criterios de qualidade e validacao academica antes da publicacao.

Necessidades principais:

- Submeter conteudos e atividades para curadoria.
- Receber feedback de professores ou validadores.
- Acompanhar inscritos, engajamento e resultados das atividades.

### Persona 4: Professor orientador

O professor orientador acompanha a qualidade academica dos conteudos e atividades. Ele precisa revisar propostas, orientar autores, aprovar publicacoes e acompanhar indicadores de impacto social e pedagogico.

Necessidades principais:

- Avaliar conteudos enviados por autores.
- Aprovar, solicitar ajustes ou reprovar publicacoes.
- Consultar indicadores de participacao, permanencia, satisfacao e entregas.

## Historias de Usuarios

|EU COMO...|QUERO/PRECISO ...|PARA ...|
|---|---|---|
|Participante iniciante|Acessar trilhas e atividades gratuitas|Aprender tecnologia sem barreiras financeiras|
|Participante iniciante|Filtrar atividades por tema, nivel e formato|Encontrar oportunidades adequadas ao meu momento|
|Participante iniciante|Inscrever-me em oficinas, desafios ou projetos|Participar de experiencias praticas organizadas|
|Participante iniciante|Registrar entregas e evidencias de participacao|Construir portfolio e demonstrar evolucao|
|Participante iniciante|Acessar forum, vagas e eventos|Participar da comunidade e encontrar oportunidades|
|Autor de conteudo|Submeter uma proposta de oficina, trilha ou desafio|Contribuir com a comunidade de forma estruturada|
|Autor de conteudo|Receber feedback durante a curadoria|Melhorar a qualidade da atividade antes da publicacao|
|Professor validador|Analisar conteudos pendentes|Garantir qualidade academica antes da publicacao|
|Coordenador da plataforma|Acompanhar indicadores de impacto|Avaliar alcance, permanencia, engajamento e satisfacao|
|Parceiro de mercado|Acompanhar oportunidades de colaboracao futuras|Apoiar desafios, mentorias, premiacoes ou programas de aceleracao|
|Visitante externo|Conhecer o projeto pelo site institucional|Entender objetivo, impacto e formas de participacao|

## Modelagem do Processo de Negocio

### Analise da Situacao Atual

Atualmente, iniciantes costumam buscar conteudo em plataformas, redes sociais, comunidades, cursos livres e materiais avulsos. Esse processo depende muito da autonomia individual e nem sempre oferece sequencia pedagogica, acompanhamento, pratica real, colaboracao ou validacao. Iniciativas comunitarias e universitarias tambem podem existir de forma dispersa, com pouca padronizacao de inscricoes, publicacao, curadoria e acompanhamento de impacto.

### Descricao Geral da Proposta

A plataforma centraliza oportunidades gratuitas de aprendizagem pratica em tecnologia. O participante encontra trilhas, cursos, oficinas, workshops, desafios e projetos colaborativos. O hub comunitario organiza forum, vagas, eventos e comunicados. O site institucional apresenta o projeto, seu impacto, equipe, parceiros e formas de entrada. Autores submetem conteudos ou atividades, recebem orientacao e passam por curadoria academica antes da publicacao. Coordenadores e professores acompanham indicadores para avaliar alcance e qualidade das iniciativas.

O primeiro ciclo de produto deve favorecer cursos gravados com liberacao por cadencia, atividades praticas vinculadas aos modulos e espacos de discussao por curso ou assunto. Hackathons, squads com fluxo proprio e premiacoes podem ocorrer como acoes apoiadas pela comunidade, mas sua automacao completa nao e requisito obrigatorio da v1.

### Processo 1: Publicacao de Atividade

1. Autor cadastra proposta de conteudo ou atividade.
2. Plataforma registra status como "em curadoria".
3. Professor ou validador academico avalia a proposta.
4. Validador aprova, solicita ajustes ou reprova.
5. Atividade aprovada e publicada no catalogo gratuito.

### Processo 2: Participacao em Experiencia Pratica

1. Participante acessa o catalogo.
2. Participante filtra atividades por tema, nivel ou formato.
3. Participante realiza inscricao gratuita.
4. Participante acompanha orientacoes e prazos.
5. Participante entrega evidencias ou participa da atividade.
6. Plataforma registra presenca, entrega, engajamento e satisfacao.

## Indicadores de Desempenho

|ID|Indicador|Objetivo|Forma de medicao|
|---|---|---|---|
|IND-001|Participantes inscritos|Medir alcance da plataforma|Quantidade de inscricoes por periodo|
|IND-002|Taxa de permanencia|Avaliar continuidade dos participantes|Percentual de inscritos que concluem atividades|
|IND-003|Entregas praticas registradas|Medir producao de portfolio|Quantidade de entregas vinculadas a atividades|
|IND-004|Satisfacao dos participantes|Avaliar qualidade percebida|Media de avaliacoes ao final das atividades|
|IND-005|Engajamento em atividades|Medir participacao ativa|Presencas, comentarios, entregas e interacoes|
|IND-006|Conteudos aprovados na curadoria|Acompanhar fluxo editorial|Quantidade de propostas aprovadas por periodo|

## Requisitos

Para a v1, foi adotada uma priorizacao simples por valor de aprendizagem pratica e viabilidade de entrega. Requisitos diretamente ligados a acesso gratuito, catalogo, inscricao, autoria, curadoria e indicadores basicos foram classificados como alta prioridade.

### Requisitos Funcionais

|ID|Descricao do Requisito|Prioridade|
|---|---|---|
|RF-001|Permitir acesso gratuito ao catalogo de trilhas, oficinas, cursos e atividades praticas|ALTA|
|RF-002|Permitir cadastro e autenticacao de participantes, autores e validadores|ALTA|
|RF-003|Permitir filtragem de atividades por tema, nivel, formato e disponibilidade|ALTA|
|RF-004|Permitir inscricao gratuita em atividades publicadas|ALTA|
|RF-005|Permitir submissao de conteudos e atividades por autores autorizados|ALTA|
|RF-006|Permitir curadoria academica com aprovar, solicitar ajustes ou reprovar|ALTA|
|RF-007|Permitir registro de entregas praticas e evidencias de participacao|MEDIA|
|RF-008|Exibir indicadores de impacto para coordenadores e validadores|MEDIA|
|RF-009|Coletar avaliacao de satisfacao ao final das atividades|MEDIA|
|RF-010|Permitir liberacao gradual de aulas ou modulos por cadencia configuravel|MEDIA|
|RF-011|Disponibilizar forum de discussao por curso ou assunto|MEDIA|
|RF-012|Disponibilizar area de vagas e oportunidades no hub comunitario|MEDIA|
|RF-013|Disponibilizar agenda de eventos da comunidade|MEDIA|
|RF-014|Disponibilizar paginas institucionais sobre projeto, equipe, impacto e parceiros|ALTA|
|RF-015|Emitir certificados ou declaracoes de participacao|BAIXA|
|RF-016|Gerar relatorios consolidados de impacto|BAIXA|

### Requisitos nao Funcionais

|ID|Descricao do Requisito|Prioridade|
|---|---|---|
|RNF-001|A interface deve ser responsiva para uso em desktop e dispositivos moveis|ALTA|
|RNF-002|A plataforma deve ser simples de navegar para usuarios iniciantes|ALTA|
|RNF-003|O sistema deve proteger dados pessoais e respeitar principios de privacidade|ALTA|
|RNF-004|As principais paginas devem carregar em ate 3 segundos em conexao comum|MEDIA|
|RNF-005|O conteudo publicado deve manter padrao minimo de clareza, acessibilidade e qualidade academica|ALTA|
|RNF-006|A solucao deve permitir crescimento gradual de conteudos, participantes e atividades|MEDIA|
|RNF-007|Os registros de indicadores devem ser exportaveis ou consultaveis para prestacao de contas|MEDIA|

## Restricoes

|ID|Restricao|
|---|---|
|R-001|A plataforma deve manter acesso gratuito aos participantes.|
|R-002|Conteudos educacionais devem passar por validacao academica antes da publicacao.|
|R-003|A v1 deve priorizar funcionalidades essenciais de catalogo, inscricao, autoria, curadoria e indicadores basicos.|
|R-004|Certificados, relatorios avancados e automacoes podem ser tratados como evolucao caso ultrapassem o escopo da v1.|
|R-005|Hackathons com premiacao, banco de talentos e programas de aceleracao dependem de parceiros e regras especificas.|
|R-006|A implementacao deve respeitar o prazo e as tecnologias definidas pela disciplina.|

## Estrutura do Projeto

A execucao do projeto sera apoiada por recursos digitais, academicos e comunitarios ja disponiveis ou de baixo custo. A v1 deve utilizar prioritariamente infraestrutura web, ferramentas colaborativas gratuitas e espacos institucionais ou comunitarios para atividades presenciais, quando houver.

Recursos materiais e digitais previstos:

- Repositorio GitHub para codigo, documentacao, issues, pull requests e registro de evidencias.
- Plataforma web da FullDev School, composta por catalogo de cursos, trilhas, atividades, hub comunitario e paginas institucionais.
- Ferramentas de comunicacao, como Discord, WhatsApp, Teams ou Slack, para alinhamento entre equipe, comunidade e orientadores.
- Ferramentas de prototipacao e diagramacao, como Figma, Excalidraw ou diagrams.net.
- Ferramentas para videoconferencia e gravacao de aulas, oficinas e mentorias remotas.
- Ambientes de hospedagem gratuitos ou de baixo custo, como GitHub Pages, Vercel, Netlify ou equivalente.
- Materiais didaticos digitais, exemplos de codigo, repositorios auxiliares, desafios praticos e formularios de avaliacao.

Recursos humanos e institucionais previstos:

- Coordenacao e orientacao academica vinculadas a PUC Minas.
- Professores orientadores ou validadores para curadoria de conteudos.
- Extensionistas, instrutores, mentores, monitores e colaboradores tecnicos.
- Comunidade FullDev como base de mobilizacao, divulgacao, participacao e apoio pratico.
- Parceiros de mercado ou profissionais voluntarios para mentorias, palestras, desafios e aproximacao com demandas reais.

Locais e formatos de execucao:

- Atividades remotas pela plataforma e por ferramentas de videoconferencia.
- Atividades hibridas quando houver oficinas, mentorias, encontros ou hackathons com apoio institucional.
- Espacos da PUC Minas ou de parceiros, quando disponiveis e autorizados, para encontros presenciais, capacitacoes e eventos.

## Diagrama de Casos de Uso

Atores principais:

- Participante
- Autor de conteudo
- Professor validador
- Coordenador da plataforma
- Parceiro de mercado

Casos de uso principais:

- Consultar catalogo de atividades
- Filtrar atividades
- Realizar inscricao
- Registrar entrega pratica
- Avaliar atividade
- Submeter conteudo ou atividade
- Revisar conteudo
- Publicar atividade aprovada
- Consultar indicadores de impacto
- Acompanhar progresso em cursos
- Participar de forum por curso ou assunto
- Consultar vagas e oportunidades
- Consultar eventos da comunidade
- Acessar site institucional

# Matriz de Rastreabilidade

|Objetivo|Historia relacionada|Requisitos relacionados|
|---|---|---|
|Acesso gratuito a formacao pratica|Participante acessa trilhas e atividades gratuitas|RF-001, RF-003, RF-004, RNF-002|
|Pratica real e portfolio|Participante registra entregas e evidencias|RF-007, RF-009|
|Fluxo de autoria e curadoria|Autor submete proposta e professor valida|RF-005, RF-006, RNF-005|
|Indicadores de impacto|Coordenador acompanha resultados|RF-008, RF-016, RNF-007|
|Escalabilidade da comunidade|Parceiro acompanha projetos e oportunidades|RF-008, RNF-006|
|Jornada orientada de aprendizagem|Aluno acompanha curso com liberacao gradual|RF-010, RF-011, RNF-002|
|Hub comunitario|Aluno acessa forum, vagas e eventos|RF-011, RF-012, RF-013|
|Comunicacao institucional|Visitante conhece projeto e formas de participacao|RF-014, RNF-002|

# Gerenciamento de Projeto

## Gerenciamento de Tempo

O projeto sera conduzido em ciclos curtos, priorizando primeiro documentacao, prototipo, implementacao do catalogo, fluxo de inscricao, fluxo de autoria/curadoria e painel basico de indicadores.

### Cronograma de Execucao

|Periodo|Meta|Atividade principal|Resultado esperado|
|---|---|---|---|
|Marco|Mobilizacao de alunos|Divulgacao do projeto no ambito da PUC Minas e da comunidade FullDev|Interessados mapeados e canais de comunicacao ativados|
|Marco e abril|Montagem da equipe|Selecao de extensionistas, instrutores, mentores e colaboradores tecnicos|Equipe inicial definida e papeis distribuidos|
|Abril|Formacao dos extensionistas|Capacitacao dos alunos para atuarem no projeto de extensao|Participantes preparados para planejar e executar atividades|
|Abril e maio|Capacitacao metodologica|Definicao da abordagem com os jovens e alinhamento pedagogico|Padrao inicial de oficinas, trilhas e acompanhamento definido|
|Maio e junho|Desenvolvimento dos objetos educacionais|Definicao e elaboracao de material didatico|Materiais, roteiros e exemplos praticos preparados|
|Junho e julho|Definicao das trilhas de aprendizagem|Preparacao das trilhas por tema, nivel e formato|Trilhas iniciais prontas para validacao e publicacao|
|Julho e agosto|Mobilizacao dos beneficiarios|Divulgacao, inscricao e orientacao dos participantes|Turmas ou grupos de participantes organizados|
|Agosto a outubro|Execucao das acoes|Realizacao de oficinas, cursos, desafios, hackathons ou projetos colaborativos|Atividades praticas realizadas e evidencias registradas|
|Setembro e outubro|Integracao pesquisa e extensao|Participacao em seminarios, coleta de dados e sistematizacao dos aprendizados|Resultados parciais organizados para avaliacao academica|
|Novembro e dezembro|Avaliacao e monitoramento|Entrega de relatorios parciais e finais, publicacao dos resultados e revisao do ciclo|Indicadores consolidados e melhorias propostas para o proximo ciclo|

## Gerenciamento de Equipe

Os papeis serao definidos pelo grupo. A divisao inicial sugerida e:

- Product Owner: responsavel por priorizacao e alinhamento com a proposta.
- Scrum Master: responsavel por organizacao do processo e remocao de impedimentos.
- Desenvolvimento: responsavel pela implementacao da aplicacao.
- Design e UX: responsavel por fluxos, telas e testes de usabilidade.
- Conteudo e curadoria: responsavel por regras editoriais, qualidade academica e indicadores.

## Gestao de Orcamento

A proposta parte de um ecossistema gratuito para participantes. O custo da v1 deve ser reduzido por meio de tecnologias web, ferramentas gratuitas de gestao, hospedagem de baixo custo ou gratuita e colaboracao entre comunidade e universidade.
