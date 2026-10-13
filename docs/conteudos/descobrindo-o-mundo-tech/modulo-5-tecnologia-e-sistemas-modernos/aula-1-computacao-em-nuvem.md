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

Quando você abre um site, assiste a um vídeo ou manda uma mensagem, o seu aparelho não tem aquele conteúdo guardado. Ele envia um pedido pela Internet a outro computador, que responde com o que foi pedido. Esse outro computador é um **servidor**, e o seu aparelho, que fez o pedido, é o **cliente**. É a mesma relação de cliente e servidor que você viu no Módulo 4.

Por dentro, um servidor tem as mesmas peças de um computador comum: processador, memória e armazenamento. O que muda é o uso. Um computador pessoal atende uma pessoa por vez e pode ser desligado à noite. Um servidor fica ligado o tempo todo, sem tela nem teclado, atendendo milhares de pedidos ao mesmo tempo. Por isso ele costuma ter peças mais potentes e resistentes, feitas para funcionar sem parar durante anos.

## 2. Data centers

Um único servidor não dá conta de um serviço usado por milhões de pessoas, como o WhatsApp ou o YouTube. Esses serviços usam milhares de servidores, e eles ficam reunidos em **data centers**: prédios construídos só para abrigar servidores, organizados em armários de metal chamados *racks*.

![Servidores em racks em um data center da Wikimedia Foundation](https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Wikimedia_Foundation_Servers-8055_01.jpg/960px-Wikimedia_Foundation_Servers-8055_01.jpg)

*Servidores da Wikimedia Foundation. Foto: Victor Grigas, [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikimedia_Foundation_Servers-8055_01.jpg).*

Juntar tudo em um só lugar facilita cuidar das máquinas, mas cria exigências que um escritório comum não atende:

- **Energia sem interrupção.** Se a luz cair, o serviço sai do ar para todo mundo. Por isso há baterias e geradores que assumem em segundos.
- **Refrigeração.** Milhares de máquinas ligadas produzem muito calor, e calor demais danifica as peças. Boa parte da energia de um data center vai para o ar-condicionado.
- **Conexão rápida.** Todos os pedidos dos clientes chegam pela rede, então o prédio precisa de ligações de alta velocidade com a Internet.
- **Segurança física.** Quem entra no prédio pode mexer nos dados de milhões de pessoas, por isso o acesso é controlado.

Grandes empresas mantêm data centers em vários países. Assim, se um prédio tiver um problema, outro assume o atendimento, e quem usa o serviço nem percebe.

## 3. Processamento e armazenamento remotos

Para entender a nuvem, é preciso separar duas tarefas de um computador: **guardar** informações (armazenamento) e **trabalhar** com elas (processamento). As duas podem acontecer no seu aparelho, que é o modo **local**, ou em um servidor de outra empresa, que é o modo **remoto**.

Pense em uma foto tirada no celular. Se ela fica só na memória do aparelho, o armazenamento é local: você vê a foto mesmo sem Internet, mas, se o celular quebrar ou for roubado, ela se perde. Se a foto é enviada para o Google Fotos ou o iCloud, uma cópia fica guardada em servidores dessas empresas. Esse armazenamento é remoto: a foto continua existindo mesmo que você perca o celular, e você consegue vê-la em outro aparelho, mas depende de Internet e da empresa para acessá-la.

O processamento segue a mesma lógica. Quando você pede uma rota no Google Maps, o seu celular não calcula o caminho sozinho: ele envia o pedido, os servidores do Google fazem o cálculo com dados de trânsito de milhões de pessoas, e o aparelho só mostra o resultado. Isso é **processamento remoto**. Ele permite que um celular simples faça tarefas que exigiriam um computador muito mais potente.

## 4. O que é computação em nuvem

Antes da nuvem, uma empresa que quisesse ter um site ou um sistema precisava comprar os próprios servidores, montar uma sala para eles e contratar pessoas para mantê-los. Era caro, demorado e arriscado: se a empresa crescesse, faltavam máquinas; se as vendas caíssem, as máquinas ficavam paradas.

A **computação em nuvem** muda isso. Em vez de comprar, a empresa usa servidores, armazenamento e programas de outra empresa, como a Amazon, o Google ou a Microsoft, pela Internet, e paga pelo que usar. É parecido com a energia elétrica: ninguém constrói uma usina em casa, todos se ligam à rede e pagam a conta do mês.

O nome "nuvem" vem dos diagramas de redes, que usavam o desenho de uma nuvem para representar a Internet, ou seja, "algo lá fora que funciona sem você precisar ver como". Mas a nuvem não está no céu: são servidores reais, dentro de data centers como os da seção anterior.

O NIST, instituto de padrões dos Estados Unidos, define a nuvem por cinco características:

| Característica | O que significa |
| --- | --- |
| Autoatendimento sob demanda | Você mesmo contrata o recurso, na hora, sem falar com ninguém. |
| Acesso pela rede | Você acessa de qualquer lugar, pelo celular ou pelo computador. |
| Recursos compartilhados | As mesmas máquinas atendem muitos clientes ao mesmo tempo. |
| Elasticidade | O recurso cresce quando a demanda aumenta e diminui quando ela cai. |
| Serviço medido | O uso é medido, e você paga pelo que usou, como na conta de luz. |

A elasticidade mostra bem a vantagem da nuvem. Uma loja virtual vende pouco durante o ano e muito na Black Friday. Com servidores próprios, ela teria que comprar máquinas suficientes para o dia de pico, e elas ficariam paradas no resto do ano. Na nuvem, ela aumenta os recursos só durante a Black Friday, reduz depois e paga apenas pelo que usou.

## 5. SaaS, PaaS e IaaS

Nem todo serviço em nuvem entrega a mesma coisa. Às vezes você recebe um programa pronto, às vezes recebe só a máquina e precisa instalar tudo sozinho. Os serviços costumam ser divididos em três modelos, conforme **quanto a empresa fornecedora cuida e quanto fica com você**:

| Modelo | O que você recebe | Exemplos |
| --- | --- | --- |
| **SaaS** — Software como Serviço | Um programa pronto para usar. | Gmail, Netflix, Google Docs |
| **PaaS** — Plataforma como Serviço | Um ambiente pronto para publicar o seu próprio programa. | Vercel, Heroku |
| **IaaS** — Infraestrutura como Serviço | Uma máquina alugada, que você configura do zero. | AWS EC2, Google Compute Engine |

Uma comparação com moradia ajuda a fixar a diferença. **IaaS** é alugar um terreno com água e luz: você constrói a casa do jeito que quiser, mas toda a obra é sua. **PaaS** é alugar uma casa vazia: a estrutura está pronta, e você só traz os móveis, que aqui são o seu programa. **SaaS** é ficar em um hotel: tudo já está pronto, e você só usa.

Quanto mais pronto o serviço, menos trabalho e menos liberdade você tem. Por isso, como usuário, você usa SaaS todos os dias. PaaS e IaaS são usados por quem desenvolve e mantém sistemas: uma pessoa desenvolvedora pode publicar um site na Vercel (PaaS) em minutos, enquanto uma equipe que precisa controlar cada detalhe aluga máquinas na AWS (IaaS).

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
