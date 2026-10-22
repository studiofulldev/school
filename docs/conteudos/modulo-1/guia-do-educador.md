# Guia do educador do módulo 1

**Uso da equipe. Este arquivo não faz parte do pacote de importação destinado aos estudantes.**

## Propósito e mediação

O módulo desenvolve uma visão geral da computação. Não exige programação, contratação de serviços ou domínio de componentes eletrônicos. A ementa de origem define os temas. Os tempos, atividades e pontuações deste material são propostas para a equipe ajustar.

Observe se a pessoa consegue explicar relações com suas palavras. Uma resposta que usa um termo técnico sem compreender seu significado precisa de mediação. Aceite exemplos diferentes quando a lógica estiver correta.

Os oito vídeos já aparecem junto dos assuntos correspondentes e têm áudio em português. São complementares. Use as perguntas de observação para conectar o vídeo à atividade, sem exigir que o estudante siga um curso externo. A explicação da AWS apresenta nuvem como conceito, sem exigir contratação de serviços. Não há gravação pela equipe.

Para o diagnóstico, não atribua nota. Compare as respostas iniciais e finais para perceber mudanças. Quem já conhece um tema pode demonstrar domínio pelas atividades. A decisão de dispensar uma etapa deve seguir as regras do curso.

## Respostas das práticas

### Aula 1

No aplicativo de passos, a entrada pode ser a contagem obtida a partir de sensores e a meta configurada. O processamento compara o total com a meta. A saída informa se ela foi atingida. O histórico permite observar mudanças ao longo dos dias.

Para empréstimo de livros, uma resposta possível inclui identificação do livro e da pessoa como entradas. O processamento verifica disponibilidade e registra prazo. A saída confirma o empréstimo. O registro guarda livro, pessoa e datas. O computador ou leitor é hardware. A aplicação de biblioteca é software.

Lembre que sensores podem produzir estimativas. Não exija que o estudante conheça o algoritmo de contagem de passos. Avalie a identificação das funções.

### Aula 2

Uma solução possível para a fila:

1. Receber um identificador fictício da pessoa.
2. Validar se está preenchido.
3. Acrescentar a pessoa ao final da fila.
4. Ao iniciar um atendimento, verificar se a fila está vazia.
5. Se estiver vazia, informar que não há pessoas aguardando.
6. Caso contrário, retirar a primeira pessoa da fila e chamá-la.
7. Registrar o atendimento e atualizar a fila.

Com Ana, Beto e Cris, nessa ordem, o primeiro atendimento chama Ana. Restam Beto e Cris. Criar a aplicação é trabalho de desenvolvimento. Administrar acessos e manter o equipamento disponível são exemplos de TI.

Aceite outras sequências que preservem a ordem de chegada e tratem a fila vazia. Não exija sintaxe de pseudocódigo.

### Aula 3

Exemplos de relações corretas:

- Máquinas programáveis permitiram orientar tarefas diferentes por instruções.
- Programa armazenado tornou a troca de procedimentos menos dependente de ajustes físicos.
- Integração e miniaturização contribuíram para equipamentos menores e portáteis.
- Computadores pessoais ampliaram o acesso a escrita, organização de dados e programação fora de grandes centros de processamento.

Não pontue memorização de datas como objetivo central. Evite atribuir todo avanço a uma única pessoa ou afirmar que uma tecnologia eliminou todas as anteriores.

### Aula 4

Um aplicativo de documentos pode permitir edição local e sincronização remota. Um navegador acessa páginas da Web usando a Internet. Um aplicativo próprio pode acessar a Internet sem expor uma página ao usuário.

Aceite a indicação de incerteza sobre IA. Uma resposta responsável não precisa inventar como funciona um produto proprietário.

## Gabarito da verificação

| Questão | Resposta | Comentário para o feedback |
| --- | --- | --- |
| 1 | C | Computação inclui processar informações para resolver uma tarefa. Não se limita a escrever código. |
| 2 | B | O número ganha significado quando associado às inscrições da oficina. |
| 3 | A | Somar transforma as entradas em um resultado. Digitar é entrada e mostrar é saída. |
| 4 | D | O algoritmo pode ser descrito antes de ser implementado em uma linguagem. |
| 5 | C | Aplicar uma regra fixa pode automatizar uma tarefa sem IA. |
| 6 | B | Operação, acesso e continuidade de serviços são focos frequentes de TI. As áreas se sobrepõem. |
| 7 | D | Integração e microprocessadores contribuíram para miniaturização e portabilidade. |
| 8 | A | A Web usa a Internet, que também transporta dados de outros serviços. |
| 9 | C | Nuvem envolve oferta de recursos pela rede. Os servidores continuam físicos. |
| 10 | B | Uma resposta convincente de IA pode conter erros e precisa de conferência. |

### Questão 11

Resposta esperada: o computador passa a guardar instruções na memória e executá-las. Trocar a tarefa pode envolver carregar outro programa, em vez de reconfigurar conexões físicas. Isso amplia a flexibilidade de uso. Aceite outras formulações que expliquem a relação.

### Questão 12

As entradas são as inscrições válidas e a disponibilidade atual. Na primeira, há duas vagas. A confirmação deixa uma vaga. Na segunda, há uma vaga. A confirmação deixa zero. Na terceira, não há vaga. A pessoa entra na lista de espera, e a disponibilidade continua em zero.

Não aceite confirmar as três pessoas sem atualizar a disponibilidade. A hipótese de inscrições sequenciais está no enunciado. Concorrência entre pedidos simultâneos não é exigida.

## Aplicação no Canvas

O pacote importa as questões como **página de conteúdo**, sem cadastrar um quiz automaticamente. Se a equipe quiser usar a ferramenta de questionários, cadastre as dez questões de alternativa única e as duas respostas discursivas. Escolha o tipo de questionário disponível na instância.

Uma pontuação possível é de 1 ponto por questão objetiva e 2 pontos por resposta discursiva, totalizando 14. Para a questão 11, considere 1 ponto pela presença de instruções na memória e 1 pela explicação da flexibilidade. Para a questão 12, considere 1 ponto pelas duas confirmações e 1 pela atualização das vagas e lista de espera.

A atividade integradora tem rubrica proposta de 10 pontos. Ao configurar a entrega, escolha texto online ou envio de arquivo conforme os recursos do curso. O pacote não cria datas, notas, certificados ou regras de aprovação.

## Feedback para a atividade integradora

Comente um acerto concreto e um ponto que precisa de revisão. Exemplos:

- “Você separou a entrada e o resultado. Explique agora qual operação transforma uma coisa na outra.”
- “A ordem da fila está clara. Acrescente o comportamento quando não houver ninguém aguardando.”
- “Você relacionou o sistema a servidores. Revise por que isso não prova a presença de IA.”

Para os cinco critérios da rubrica, atribua zero quando a resposta estiver ausente ou incompatível com o conceito. Atribua parte da pontuação quando houver compreensão com lacunas. Use a pontuação máxima quando a explicação e o exemplo forem coerentes. Não exija a mesma solução deste guia.

## Mapeamento da ementa

| Tópico da ementa | Local no material |
| --- | --- |
| Computação além da programação | Aula 1 |
| Informação e processamento | Aula 1 |
| Problemas computacionais | Aula 2 |
| Algoritmos e automatização | Aula 2 |
| Ciência da Computação Desenvolvimento de Software e TI | Aula 2 |
| Primeiras formas de cálculo | Aula 3 |
| Surgimento das máquinas programáveis | Aula 3 |
| Evolução dos computadores | Aula 3 |
| Transistores e microprocessadores | Aula 3 |
| Computadores pessoais | Aula 3 |
| Internet | Aula 4 |
| Smartphones | Aula 4 |
| Computação em nuvem | Aula 4 |
| Inteligência Artificial | Aula 4 |
| Pascal Babbage Ada Turing ENIAC von Neumann UNIX e linguagens | Aprofundamentos opcionais |

## Antes da publicação

Confira o conteúdo com a orientação acadêmica, de acordo com o fluxo do projeto. A identificação do contexto PUC Minas não representa validação institucional deste material. Garanta que o guia do educador não esteja visível aos estudantes e teste as páginas na visualização do aluno.
