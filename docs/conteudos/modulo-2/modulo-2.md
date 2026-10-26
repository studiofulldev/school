<!-- pagina: 00-boas-vindas -->
# Módulo 2 — Lógica e Pensamento Computacional

**Descobrindo o Mundo Tech · FullDev School**

## Boas-vindas

No módulo anterior, você conheceu a computação como uma forma de tratar informações e resolver problemas. Agora vai desenhar soluções antes de escolher uma linguagem de programação. Papel e lápis bastam.

Usaremos uma oficina com três vagas como exemplo. Inscrições válidas são atendidas na ordem de chegada; quando as vagas acabam, novas pessoas entram na lista de espera. Todos os nomes são fictícios.

## Índice do módulo

1. [Aula 1 — Pensar o problema]($WIKI_REFERENCE$/pages/01-pensar-o-problema)
2. [Aula 2 — Descrever algoritmos]($WIKI_REFERENCE$/pages/02-descrever-algoritmos)
3. [Aula 3 — Decidir com condições]($WIKI_REFERENCE$/pages/03-decidir-com-condicoes)
4. [Aula 4 — Variáveis e repetição]($WIKI_REFERENCE$/pages/04-variaveis-e-repeticao)
5. [Aula 5 — Testar e corrigir]($WIKI_REFERENCE$/pages/05-testar-e-corrigir)
6. [Aula 6 — Matemática que ajuda]($WIKI_REFERENCE$/pages/06-matematica-que-ajuda)
7. [Atividade integradora]($WIKI_REFERENCE$/pages/07-atividade-integradora)
8. [Verificação da aprendizagem]($WIKI_REFERENCE$/pages/08-verificacao-da-aprendizagem)
9. [Aprofundamentos opcionais]($WIKI_REFERENCE$/pages/09-aprofundamentos-opcionais)
10. [Glossário e referências]($WIKI_REFERENCE$/pages/10-glossario-e-referencias)

## Seu percurso

Reserve cerca de 35 minutos por aula, 30 minutos para a atividade e 15 minutos para a verificação: aproximadamente **4 horas e 15 minutos**. É uma proposta de estudo, não uma carga horária institucional. Os aprofundamentos são opcionais. Todo o conteúdo necessário está nestas páginas.

## Antes de começar

Anote sua hipótese: se há uma vaga e chegam duas inscrições válidas, que informações e regras você precisa para decidir quem será confirmado? Retome a resposta ao terminar o módulo.

<!-- pagina: 01-pensar-o-problema -->
# Aula 1 — Pensar o problema

## Da necessidade à tarefa

“Organizar uma oficina” é uma necessidade ampla. Para criar uma solução verificável, precisamos definir quantas vagas existem, o que torna uma inscrição válida, qual é a ordem de atendimento e o que acontece quando as vagas acabam. Neste exercício, uma inscrição válida tem identificador preenchido. As inscrições chegam uma de cada vez e a ordem decide a vaga.

O **pensamento computacional** ajuda a organizar a análise. Ele também serve para tarefas que não serão executadas por um computador.

| Prática | Pergunta útil | Exemplo na oficina |
| --- | --- | --- |
| Decomposição | Que partes menores compõem o problema? | Receber, validar, verificar vaga e informar resultado |
| Reconhecimento de padrões | Que situações se repetem? | Cada inscrição passa pela mesma validação |
| Abstração | Que detalhes importam para esta regra? | Identificador, ordem e vagas; cor da camiseta não importa |
| Algoritmo | Que passos resolvem a tarefa? | Seguir validação e decisão em ordem |

As práticas se apoiam. Uma abstração ruim pode excluir dado necessário. Se a regra dependesse da idade, descartá-la mudaria o resultado. Confirme a regra com quem conhece o problema.

## Entradas, saídas e limites

As **entradas** são a capacidade inicial e as inscrições. O **estado** inclui vagas restantes e listas de confirmação e espera. A **saída** para cada pessoa é confirmação, espera ou pedido de correção. Capacidade negativa é inválida; capacidade zero é válida e leva inscrições à espera.

Com três vagas e Ana, Beto, Cris e Davi nessa ordem, os três primeiros são confirmados e Davi espera. Se a ordem mudar, o resultado por pessoa poderá mudar.

## Prática de pausa

Descreva as quatro práticas para o empréstimo de um livro. Qual informação não pode ser ignorada para evitar emprestar o mesmo exemplar duas vezes?

<!-- pagina: 02-descrever-algoritmos -->
# Aula 2 — Descrever algoritmos

## Uma sequência precisa

Um **algoritmo** organiza instruções para realizar uma tarefa. “Verificar se está tudo certo” é vago. Uma instrução melhor é “se o identificador estiver vazio, solicitar correção e não reduzir vagas”.

**Pseudocódigo** comunica a lógica sem obedecer à sintaxe de uma linguagem específica:

```
Receber identificador
Se identificador estiver vazio
    Informar que é preciso corrigir
Senão, se vagas restantes forem maiores que zero
    Confirmar a inscrição
    Diminuir vagas restantes em uma unidade
Senão
    Adicionar à lista de espera
Informar o resultado
```

A indentação mostra quais instruções pertencem a cada caminho. Uma implementação precisará detalhar como guardar e apresentar os dados.

## Fluxograma

O fluxograma desenha caminhos de uma solução. Aqui está a mesma lógica em texto, acessível também sem imagem:

| Pergunta | Se verdadeiro | Se falso |
| --- | --- | --- |
| Identificador está vazio? | Pedir correção; encerrar tentativa | Verificar vagas |
| Vagas restantes > 0? | Confirmar; reduzir vagas em 1 | Registrar espera |

No desenho convencional, início e fim são ovais, ações são retângulos, perguntas são losangos e setas mostram a direção. O símbolo só ajuda quando os caminhos são claros.

## Seguir a execução

Comece com uma vaga. Ana chega com identificador preenchido: é confirmada e deixa zero vagas. Beto chega depois: entra na espera. Um identificador vazio não ocupa vaga nem entra na espera até ser corrigido.

## Prática de pausa

Escreva os passos para calcular o total de uma compra com quantidade e preço unitário. O que fazer se a quantidade for negativa? Represente a pergunta e os dois caminhos.

<!-- pagina: 03-decidir-com-condicoes -->
# Aula 3 — Decidir com condições

## Comparações

Uma **condição** é uma pergunta avaliada como verdadeira ou falsa. Com duas vagas, “vagas > 0” é verdadeira. Com zero, é falsa. Neste pseudocódigo, “vagas = 0” pergunta se o valor é zero; uma seta será usada para atualizar valores.

| Expressão | Vagas = 2 | Vagas = 0 |
| --- | --- | --- |
| vagas > 0 | Verdadeiro | Falso |
| vagas = 0 | Falso | Verdadeiro |
| vagas < 0 | Falso | Falso |

## E, OU e NÃO

“A E B” é verdadeiro somente quando ambas são verdadeiras. “A OU B” é verdadeiro quando pelo menos uma é verdadeira. “NÃO A” inverte A.

| A | B | A E B | A OU B |
| --- | --- | --- | --- |
| Falso | Falso | Falso | Falso |
| Falso | Verdadeiro | Falso | Verdadeiro |
| Verdadeiro | Falso | Falso | Verdadeiro |
| Verdadeiro | Verdadeiro | Verdadeiro | Verdadeiro |

“Identificador preenchido E vagas > 0” permite confirmação apenas quando as duas condições valem. Primeiro valide a entrada. Depois verifique vagas. Uma cadeia “Se / Senão se / Senão” evita confirmar e colocar em espera na mesma tentativa.

```
Se identificador estiver vazio
    Pedir correção
Senão, se vagas > 0
    Confirmar
Senão
    Registrar espera
```

Se a oficina passasse a usar prioridade para algum grupo, a ordem de chegada sozinha não bastaria. Não acrescente regras que ninguém definiu.

## Prática de pausa

Uma inscrição preenchida chega com zero vagas. Qual caminho é seguido? Depois considere identificador vazio e duas vagas: por que a contagem continua em dois?

<!-- pagina: 04-variaveis-e-repeticao -->
# Aula 4 — Variáveis e repetição

## Valores que mudam

Uma **variável** associa um nome a um valor durante a execução. “vagas_restantes” começa com a capacidade e muda após cada confirmação. “vagas_restantes ← vagas_restantes - 1” calcula e guarda um novo valor. A seta indica atribuição, não igualdade matemática.

| Momento | Inscrição | Antes | Resultado | Depois |
| --- | --- | --- | --- | --- |
| Início | Nenhuma | 3 | Preparar atendimento | 3 |
| 1 | Ana | 3 | Confirmada | 2 |
| 2 | Beto | 2 | Confirmado | 1 |
| 3 | Cris | 1 | Confirmada | 0 |
| 4 | Davi | 0 | Espera | 0 |

As listas “confirmados” e “espera” começam vazias e recebem identificadores. Quantidade e lista representam coisas diferentes.

## Repetir a regra

Para várias inscrições, repetimos a regra **para cada** item. A repetição termina quando não houver mais inscrições. Uma repetição “enquanto” exige uma condição que possa deixar de valer; caso contrário, pode não terminar.

```
vagas_restantes ← 3
confirmados ← lista vazia
espera ← lista vazia
Para cada identificador na ordem de chegada
    Se identificador estiver vazio
        Informar correção
    Senão, se vagas_restantes > 0
        Adicionar identificador a confirmados
        vagas_restantes ← vagas_restantes - 1
    Senão
        Adicionar identificador a espera
Informar confirmados, espera e vagas_restantes
```

O modelo supõe identificadores distintos e inscrições sequenciais. Um serviço real precisa definir o tratamento de duplicatas e pedidos simultâneos.

## Prática de pausa

Refaça a tabela com duas vagas e quatro pessoas. Depois insira uma entrada vazia na segunda posição. A terceira pessoa válida recebe a segunda vaga?

<!-- pagina: 05-testar-e-corrigir -->
# Aula 5 — Testar e corrigir

## Teste de mesa

No **teste de mesa**, executamos cada passo manualmente e anotamos mudanças. Um erro lógico pode produzir saída plausível, porém contrária à regra.

Considere a versão incorreta:

```
Se vagas_restantes >= 0
    Confirmar
    vagas_restantes ← vagas_restantes - 1
```

Com zero vagas, “0 >= 0” é verdadeiro. Uma pessoa seria confirmada e o valor viraria -1. A condição correta é “vagas_restantes > 0”.

## Casos de teste

Um caso de teste apresenta entrada e resultado esperado. Inclua situações comuns e limites.

| Caso | Capacidade | Inscrições | Resultado esperado |
| --- | --- | --- | --- |
| Sem inscrições | 2 | Nenhuma | Duas vagas; listas vazias |
| Última vaga | 1 | Ana, Beto | Ana confirmada; Beto em espera; zero vagas |
| Sem vaga inicial | 0 | Ana | Ana em espera; zero vagas |
| Entrada vazia | 1 | Vazio, Ana | Correção solicitada; Ana confirmada |
| Capacidade inválida | -1 | Ana | Recusar configuração antes de processar |

Passar nesses casos não prova que toda entrada possível funciona. Crie novos casos quando novas regras surgirem.

## Depuração

Para investigar um resultado errado: reproduza a entrada, registre valores antes e depois de cada passo, encontre a primeira diferença em relação ao esperado, corrija uma regra e execute os casos novamente. Em código, esse processo é chamado de **depuração** ou *debugging*.

## Prática de pausa

Um colega reduziu as vagas antes de validar o identificador. Qual caso da tabela revela o erro? Mostre o estado correto e o incorreto.

<!-- pagina: 06-matematica-que-ajuda -->
# Aula 6 — Matemática que ajuda

## Operações e porcentagem

Somar, subtrair, multiplicar e dividir ajudam a calcular resultados. Escreva a unidade e a regra: três vagas são uma quantidade de pessoas; R$ 30,00 é dinheiro. Percentual compara parte e total: “parte ÷ total × 100”, quando o total é maior que zero.

Se há 20 vagas e 15 foram ocupadas, a ocupação é “15 ÷ 20 × 100 = 75%”. Se o total for zero, não divida por zero; registre “não aplicável” ou defina outra convenção explícita.

## Variável e função

Na matemática, uma letra pode representar um valor desconhecido ou variável. No algoritmo, uma variável guarda o valor naquele momento. Uma **função**, de modo introdutório, associa entradas a um resultado por uma regra. “total(quantidade, preco) = quantidade × preco”. Com três unidades a R$ 12,00, o total é R$ 36,00.

A fórmula não define sozinha como tratar preço negativo, quantidade fracionária ou arredondamento monetário. Essas são regras adicionais.

## Binário, bits e bytes

O sistema decimal usa dez símbolos (0 a 9) e posições de potências de 10. O binário usa 0 e 1 e posições de potências de 2. “101” em binário vale “1×4 + 0×2 + 1×1 = 5” em decimal.

Um **bit** assume um de dois valores. Um **byte** reúne oito bits e permite 256 combinações (“2^8”). Isso não significa que todo caractere de texto ocupe um byte: depende da codificação. O módulo seguinte aprofunda representação digital.

## Prática de pausa

Calcule a ocupação de oito vagas preenchidas em dez. Converta “110” binário para decimal usando posições 4, 2 e 1. Por que zero vagas disponíveis impede uma nova confirmação?

<!-- pagina: 07-atividade-integradora -->
# Atividade integradora — Planejar uma solução

## Situação

Uma oficina abre **duas vagas**. Chegam, nessa ordem: Ana, um identificador vazio, Beto e Cris. Inscrições vazias exigem correção e não entram em listas. Inscrições válidas ocupam vagas por ordem de chegada. Depois, novas inscrições válidas entram na espera. Considere entradas sequenciais e identificadores distintos.

## Entrega

1. Escreva problema, entradas, saídas e regras em até um parágrafo cada.
2. Decomponha a solução em ao menos quatro etapas e identifique o padrão repetido.
3. Descreva o fluxograma em texto com perguntas e caminhos verdadeiro/falso, ou desenhe-o com início, ações, decisões e fim.
4. Escreva pseudocódigo com uma variável de vagas, uma repetição e as decisões.
5. Faça teste de mesa das quatro entradas, com vagas antes e depois e o resultado de cada uma.
6. Crie dois casos adicionais: sem vagas iniciais e sem inscrições. Indique resultados esperados.
7. Explique uma limitação do modelo, como duplicatas ou inscrições simultâneas.

Você pode entregar texto e um desenho. Não é preciso programar. Use nomes fictícios.

## Antes de enviar

Confira se a entrada vazia não consome vaga, se o número de vagas nunca fica negativo, se há exatamente duas confirmações e se pseudocódigo e teste de mesa concordam.

<!-- pagina: 08-verificacao-da-aprendizagem -->
# Verificação da aprendizagem

Responda antes de consultar as aulas. Cada questão objetiva tem uma alternativa correta. Justifique as duas últimas. A correção comentada fica no guia do educador.

1. Decomposição é: A) escolher linguagem; B) dividir o problema; C) apagar entradas; D) repetir indefinidamente.
2. Qual informação importa para a regra da oficina? A) roupa; B) celular; C) ordem de chegada; D) profissão.
3. Entrada válida com zero vagas: A) confirmar; B) reduzir para -1; C) ignorar sem resposta; D) colocar em espera.
4. “A E B” é verdadeiro quando: A) ambas verdadeiras; B) só A; C) só B; D) ambas falsas.
5. Em “vagas ← vagas - 1”, a seta indica: A) comparação; B) fim; C) atribuição; D) percentual.
6. Para atender quatro inscrições com a mesma regra, usamos: A) repetição; B) quatro sistemas; C) divisão por zero; D) novo computador.
7. Qual condição impede confirmação sem vagas? A) vagas >= 0; B) vagas > 0; C) vagas < 0; D) vagas = 0.
8. Um caso de teste contém: A) só resposta; B) só imagem; C) só nome de variável; D) entradas e resultado esperado.
9. Cinco vagas ocupadas de 20 ofertadas correspondem a: A) 5%; B) 20%; C) 25%; D) 50%.
10. “101” em binário corresponde a: A) 3; B) 5; C) 6; D) 101 em decimal.

11. Explique a diferença entre erro de sintaxe e erro lógico. Dê um exemplo de erro lógico no controle de vagas. Você pode responder sem escrever código.
12. Com uma vaga e entradas Ana, vazio e Beto, nessa ordem, mostre resultado e vagas restantes após cada entrada. Qual regra mantém a contagem correta?

<!-- pagina: 09-aprofundamentos-opcionais -->
# Aprofundamentos opcionais

Estes assuntos ampliam a base. Não são exigidos para concluir o módulo.

## Conjuntos

Um conjunto agrupa elementos por um critério. Pessoas confirmadas e em espera podem ser vistas como dois conjuntos. Pela regra do exercício, uma pessoa não deve estar nos dois ao mesmo tempo. Como detectar duplicatas antes da inserção?

## Estatística, probabilidade e combinatória

Estatística resume dados observados, como inscrições por dia. Probabilidade trata da incerteza sob hipóteses definidas. Combinatória ajuda a contar possibilidades. Uma taxa observada não determina sozinha a probabilidade de um evento futuro; pergunte de onde vieram os dados.

## Álgebra booleana

Monte a tabela-verdade de “identificador preenchido E vagas > 0”. Se trocar E por OU, uma inscrição vazia ou sem vaga poderia ser confirmada. Uma pequena troca altera a regra.

## Matemática em IA e criptografia

Aplicações de inteligência artificial podem usar álgebra, estatística e otimização. Sistemas criptográficos usam estruturas matemáticas para proteger dados e verificar propriedades. Fazer contas, por si só, não comprova que uma aplicação use IA ou criptografia.

## Desafio

Defina uma política para inscrições duplicadas. Explique como ela muda pseudocódigo e casos de teste. A atividade principal não estabelece essa política.

<!-- pagina: 10-glossario-e-referencias -->
# Glossário e referências

## Glossário

| Termo | Significado neste módulo |
| --- | --- |
| Abstração | Seleção de detalhes relevantes para a regra |
| Algoritmo | Sequência organizada de instruções |
| Bit | Unidade com dois valores possíveis, geralmente 0 e 1 |
| Byte | Conjunto de oito bits |
| Caso de teste | Entradas e resultado esperado para verificar um comportamento |
| Condição | Pergunta avaliada como verdadeira ou falsa |
| Decomposição | Divisão do problema em partes menores |
| Depuração | Investigação e correção de falhas |
| Fluxograma | Representação gráfica de passos e decisões |
| Função | Regra que associa entradas a resultado |
| Pseudocódigo | Passos estruturados sem sintaxe de linguagem específica |
| Repetição | Execução de passos para vários itens ou enquanto uma condição vale |
| Teste de mesa | Execução manual com registro das mudanças de estado |
| Variável | Nome associado a valor consultado ou atualizado durante a execução |

## Relação com a trilha

O conteúdo segue a ementa “Descobrindo o Mundo Tech”, seção “Módulo 2 — Lógica e Pensamento Computacional”, em docs/ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md. O módulo 1 apresenta computação, informação e algoritmo. Textos, exemplos e questões deste módulo foram elaborados para o projeto; a procedência está em autoria-e-fontes.md.

No módulo seguinte, você verá como computadores representam informações e executam programas. Leve consigo a pergunta: quais dados, decisões e testes são necessários para que uma solução produza o resultado esperado?
