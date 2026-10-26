# Guia do educador — Módulo 2

**Uso da equipe. Não faz parte do pacote para estudantes.**

## Propósito

O módulo desenvolve análise de problemas, algoritmos, condições, repetição, variáveis, teste e fundamentos matemáticos. Não exige programação. Os tempos e pontos abaixo são propostas ajustáveis pela equipe. Use a resposta inicial da página de boas-vindas como diagnóstico sem nota.

## Respostas das práticas

- **Aula 1:** no empréstimo, decompor cadastro, consulta de disponibilidade, registro e devolução; reconhecer a validação recorrente; abstrair detalhes alheios à disponibilidade; ordenar os passos. Identificação do exemplar e situação de empréstimo importam. Se houver vários exemplares, a regra deve considerar cada unidade.
- **Aula 2:** para compra, receber quantidade e preço, validar entradas, multiplicar e apresentar total. Uma quantidade negativa deve ser rejeitada antes do cálculo. A equipe pode aceitar regras adicionais explícitas.
- **Aula 3:** identificador preenchido e zero vagas leva à espera. Identificador vazio e duas vagas pede correção e preserva duas vagas.
- **Aula 4:** com duas vagas e quatro entradas válidas, as duas primeiras são confirmadas. Uma entrada vazia na segunda posição não consome vaga; a próxima inscrição válida ocupa a segunda vaga.
- **Aula 5:** o caso “entrada vazia” revela redução precoce. Com uma vaga, vazio deve deixar uma vaga; depois Ana deve ser confirmada e deixar zero. A versão incorreta pode deixar zero após o vazio e colocar Ana na espera.
- **Aula 6:** 8 de 10 = 80%. “110” binário vale 4 + 2 + 0 = 6. Com zero vagas, a condição “vagas > 0” é falsa.

## Gabarito da verificação

| Questão | Resposta | Justificativa |
| --- | --- | --- |
| 1 | B | Decompor é separar em partes menores. |
| 2 | C | A ordem decide quem ocupa a vaga. |
| 3 | D | Uma entrada válida sem vaga entra na espera. |
| 4 | A | E exige ambas as condições verdadeiras. |
| 5 | C | A seta guarda o novo valor. |
| 6 | A | A mesma regra é aplicada para cada item. |
| 7 | B | Só valores positivos indicam vaga disponível. |
| 8 | D | Entradas e resultado esperado tornam a verificação possível. |
| 9 | C | 5 ÷ 20 × 100 = 25%. |
| 10 | B | 1×4 + 0×2 + 1×1 = 5. |

**11.** Erro de sintaxe viola as regras de escrita de uma linguagem; erro lógico permite seguir passos, mas produz resultado contrário à regra. Exemplo: confirmar quando vagas são zero por usar “>= 0”. Como não se exige código, aceite explicações conceituais corretas.

**12.** Ana é confirmada, deixando zero vagas. Entrada vazia pede correção e mantém zero. Beto entra na espera e mantém zero. Validar antes de reduzir e usar “vagas > 0” para confirmar preserva a contagem.

## Atividade integradora

Resultado esperado: Ana e Beto confirmados, Cris em espera, entrada vazia pede correção, vagas finais zero. Aceite fluxograma desenhado ou textual se os caminhos estiverem inequívocos. A solução deve validar capacidade não negativa antes de processar e não reduzir vaga com entrada vazia.

Rubrica proposta, total de 10 pontos:

| Critério | Pontos |
| --- | --- |
| Problema, entradas, saídas e regras claros | 2 |
| Decomposição e fluxograma coerentes | 2 |
| Pseudocódigo com decisão, variável e repetição corretas | 3 |
| Teste de mesa e dois casos adicionais | 2 |
| Limitação identificada | 1 |

Conceda pontuação parcial por compreensão demonstrada. Um pseudocódigo com nomes e sintaxe diferentes é válido se segue as regras. Dê feedback sobre uma decisão correta e o primeiro caso em que a lógica falha.

## Mapeamento da ementa

| Tópico | Local |
| --- | --- |
| Decomposição, padrões, abstração, algoritmo | Aula 1 |
| Entradas, processamento, saídas, sequência, fluxograma, pseudocódigo | Aulas 1 e 2 |
| Condições, operadores lógicos e decisões | Aula 3 |
| Variáveis e repetição | Aula 4 |
| Erros lógicos, teste de mesa, casos de teste, debugging | Aula 5 |
| Operações, porcentagem, função, binário, bits e bytes | Aula 6 |
| Conjuntos, estatística, probabilidade, combinatória, álgebra booleana, IA e criptografia | Aprofundamentos opcionais |
| Problema cotidiano, fluxograma, pseudocódigo e teste | Atividade integradora |

## Aplicação no Canvas

O pacote importa a atividade e a verificação como páginas. Para receber envios, crie uma tarefa com o enunciado da atividade e, se desejado, a rubrica. Para correção automática, crie um questionário com dez itens de alternativa única e dois discursivos. Uma pontuação possível é 1 ponto por objetiva e 2 por discursiva, totalizando 14. O pacote não define notas, datas nem regras de conclusão.

Antes de publicar, confira as páginas na visualização do aluno, revise o conteúdo no fluxo acadêmico do projeto e confirme que este guia e o gabarito não foram enviados.
