# Aula 1 — Computação em nuvem

**Módulo:** [Módulo 5 — Tecnologia e Sistemas Modernos](./README.md)  
**Duração estimada:** 40 min  
**Status:** rascunho para revisão

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- Explicar o que é um servidor e o que é um data center;
- Diferenciar processamento e armazenamento local de processamento e armazenamento remoto;
- Explicar, com suas palavras, o que é computação em nuvem;
- Diferenciar SaaS, PaaS e IaaS com exemplos do dia a dia.

## 1. Servidores

Quando você abre um site, assiste a um vídeo ou manda uma mensagem, o seu aparelho pede algo a outro computador. Esse outro computador é um **servidor**.

Um servidor é um computador que fica ligado o tempo todo para atender pedidos de outros computadores, chamados de **clientes**. Por dentro, ele tem as mesmas peças que você viu no Módulo 3: processador, memória e armazenamento. A diferença está no uso: ele não tem alguém sentado na frente dele, e sim milhares de pessoas acessando ao mesmo tempo pela Internet.

## 2. Data centers

Um serviço usado por milhões de pessoas precisa de muitos servidores. Eles ficam em **data centers**: prédios com milhares de servidores organizados em armários chamados *racks*.

![Servidores em racks em um data center da Wikimedia Foundation](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wikimedia_Foundation_Servers-8055_01.jpg/960px-Wikimedia_Foundation_Servers-8055_01.jpg)

*Servidores da Wikimedia Foundation. Foto: Victor Grigas, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_Servers-8055_01.jpg).*

Um data center precisa de:

- **Energia** sem interrupção, com geradores e baterias de reserva;
- **Refrigeração**, porque os servidores esquentam muito;
- **Conexão** rápida com a Internet;
- **Segurança física**, com controle de quem entra no prédio.

Grandes empresas mantêm data centers em vários países. Se um deles falhar, outro continua atendendo.

## 3. Processamento e armazenamento remotos

Pense em uma foto tirada no celular:

- Se ela fica só na memória do aparelho, o armazenamento é **local**. Se o celular quebrar, a foto se perde.
- Se ela é enviada para o Google Fotos ou o iCloud, ela também fica guardada em servidores de outra empresa. Esse armazenamento é **remoto**. Você consegue ver a foto em outro aparelho.

O mesmo vale para o processamento. Quando você edita um documento no Google Docs, boa parte do trabalho acontece nos servidores do Google, e o seu aparelho mostra o resultado. Esse é o **processamento remoto**.

## 4. O que é computação em nuvem

**Computação em nuvem** é usar processamento, armazenamento e programas de outra empresa pela Internet, sem precisar comprar e manter as máquinas.

O nome "nuvem" vem dos diagramas de rede, que usavam o desenho de uma nuvem para representar a Internet. A nuvem não é algo no céu: são servidores reais, dentro de data centers.

Segundo o NIST, instituto de padrões dos Estados Unidos, a nuvem tem cinco características:

| Característica | O que significa |
| --- | --- |
| Autoatendimento sob demanda | Você mesmo contrata o recurso, na hora, sem falar com ninguém. |
| Acesso pela rede | Você acessa de qualquer lugar, pelo celular ou pelo computador. |
| Recursos compartilhados | As mesmas máquinas atendem muitos clientes ao mesmo tempo. |
| Elasticidade | O recurso cresce quando a demanda aumenta e diminui quando ela cai. |
| Serviço medido | Você paga pelo que usa, como na conta de luz. |

**Exemplo:** uma loja virtual vende pouco durante o ano e muito na Black Friday. Com servidores próprios, ela teria que comprar máquinas para o pico, que ficariam paradas no resto do ano. Na nuvem, ela aumenta os recursos só durante a Black Friday e paga apenas por esses dias.

## 5. SaaS, PaaS e IaaS

Os serviços em nuvem costumam ser divididos em três modelos. A diferença está em quanto a empresa fornecedora cuida e quanto fica com você.

| Modelo | O que você recebe | Exemplos |
| --- | --- | --- |
| **SaaS** — Software como Serviço | Um programa pronto para usar. | Gmail, Netflix, Google Docs |
| **PaaS** — Plataforma como Serviço | Um lugar pronto para publicar o seu próprio programa. | Vercel, Heroku |
| **IaaS** — Infraestrutura como Serviço | Uma máquina alugada, que você configura do zero. | AWS EC2, Google Compute Engine |

Uma comparação com moradia ajuda:

- **IaaS** é alugar um terreno: você constrói e mobília a casa.
- **PaaS** é alugar uma casa vazia: você só traz os móveis.
- **SaaS** é ficar em um hotel: tudo já está pronto, você só usa.

Como usuário, você usa SaaS todos os dias. PaaS e IaaS são mais usados por quem desenvolve e mantém sistemas.

## Vídeo complementar

- [O que é CLOUD? Explicação COMPLETA para INICIANTES](https://www.youtube.com/watch?v=uhXr9L57hOM) — Diolinux. Revisa os conceitos da aula e apresenta nuvem pública, privada e híbrida.

## Exercícios

1. Liste cinco serviços que você usa no dia a dia. Para cada um, marque onde ficam os seus dados: no aparelho, na nuvem ou nos dois.
2. Explique a diferença entre armazenamento local e armazenamento remoto usando um exemplo seu.
3. Com suas palavras, explique o que é um data center e por que ele precisa de energia de reserva e refrigeração.
4. Classifique cada serviço como SaaS, PaaS ou IaaS: Spotify, AWS EC2, Vercel, Google Drive, Microsoft Teams.

## Questionário

1. O que é um servidor?
   - a) Um programa que protege o computador contra vírus.
   - b) **Um computador que fica ligado para atender pedidos de outros computadores.**
   - c) Um cabo que liga o computador à Internet.
   - d) Um tipo de celular usado por empresas.
2. Onde ficam os dados guardados "na nuvem"?
   - a) No céu, transmitidos por satélite.
   - b) Apenas no aparelho do usuário.
   - c) **Em servidores de empresas, dentro de data centers.**
   - d) No roteador da casa do usuário.
3. Uma loja aumenta seus servidores na Black Friday e reduz depois. Qual característica da nuvem é essa?
   - a) Acesso pela rede.
   - b) **Elasticidade.**
   - c) Autoatendimento.
   - d) Recursos compartilhados.
4. O Gmail é um exemplo de:
   - a) **SaaS**
   - b) PaaS
   - c) IaaS
   - d) Data center
5. Uma pessoa aluga uma máquina na AWS e instala nela tudo de que precisa. Ela está usando:
   - a) SaaS
   - b) PaaS
   - c) **IaaS**
   - d) Armazenamento local

## Referências

- MELL, Peter; GRANCE, Timothy. [*The NIST Definition of Cloud Computing* (SP 800-145)](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf). NIST, 2011. Domínio público.
- [Computação em nuvem](https://pt.wikipedia.org/wiki/Computa%C3%A7%C3%A3o_em_nuvem). Wikipédia. CC BY-SA 4.0.

## Navegação relacionada

- [Voltar para o Módulo 5](./README.md)
- [Próxima aula: Segurança digital](./aula-2-seguranca-digital.md)
- [Ementa da trilha](../../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
