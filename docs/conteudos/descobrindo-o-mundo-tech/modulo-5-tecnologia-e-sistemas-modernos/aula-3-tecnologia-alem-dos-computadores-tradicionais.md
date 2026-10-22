# Aula 3 — Tecnologia além dos computadores tradicionais

**Módulo:** [Módulo 5 — Tecnologia e Sistemas Modernos](./README.md)  
**Duração estimada:** 45 min  
**Status:** rascunho para revisão

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- Explicar o que é um sistema embarcado e reconhecer exemplos no dia a dia;
- Diferenciar sensores e atuadores;
- Explicar o que é Internet das Coisas e como ela se relaciona com a nuvem;
- Descrever uma automação simples no formato "se, então";
- Reconhecer o que torna um dispositivo "inteligente".

## 1. Sistemas embarcados

Quando pensamos em computador, imaginamos um notebook ou um celular. Mas a maioria dos computadores do mundo não se parece com isso. Eles estão escondidos dentro de outros aparelhos: no micro-ondas, na máquina de lavar, no controle remoto, na catraca do ônibus. Esses computadores são chamados de **sistemas embarcados**, porque vêm "embarcados" dentro de outro produto.

Um sistema embarcado tem as mesmas partes que você viu no Módulo 3: processador, memória e um programa que diz o que fazer. A diferença está no objetivo. Um notebook é de uso geral: você instala o programa que quiser e faz várias tarefas. Um sistema embarcado é feito para **uma tarefa específica**. O computador do micro-ondas só precisa ler os botões, contar o tempo e ligar o aquecimento, e vai fazer isso a vida toda.

Por fazer pouca coisa, ele pode ser pequeno, barato e gastar pouca energia. Muitas vezes, todo o computador cabe em um único chip, chamado **microcontrolador**. Placas como o Arduino, abaixo, são usadas para aprender e criar protótipos com microcontroladores.

![Placa Arduino Uno](https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Arduino_Uno_-_R3.jpg/500px-Arduino_Uno_-_R3.jpg)

*Placa Arduino Uno. Foto: SparkFun Electronics, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/), via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Arduino_Uno_-_R3.jpg).*

Sistemas embarcados estão em lugares onde uma falha pode ser grave. Um carro moderno tem dezenas deles, controlando do freio ABS ao airbag. Um marca-passo é um sistema embarcado que precisa funcionar sem erro por anos dentro do corpo de uma pessoa.

## 2. Sensores e atuadores

Um computador comum recebe informações pelo teclado e pelo mouse e responde pela tela. Um sistema embarcado precisa perceber o mundo físico e agir sobre ele, e para isso usa sensores e atuadores.

**Sensores** são a entrada: medem algo no ambiente e transformam essa medida em dados que o processador entende. **Atuadores** são a saída: recebem um comando do processador e fazem algo acontecer no mundo físico. Entre os dois está o **processamento**, que decide o que fazer com o que foi medido. É o mesmo ciclo de entrada, processamento e saída que você viu no Módulo 2.

| Sensor (entrada) | Mede | Atuador (saída) | Faz |
| --- | --- | --- | --- |
| Termômetro | Temperatura | Motor do ventilador | Gira as pás |
| Sensor de presença | Movimento | Sirene do alarme | Dispara o som |
| Sensor de luz | Claridade | Lâmpada do poste | Acende ao anoitecer |
| Sensor de umidade do solo | Água na terra | Válvula | Libera a água da irrigação |

Um ar-condicionado mostra o ciclo completo. O sensor mede a temperatura da sala, o processador compara com a temperatura que você escolheu e, se a sala estiver quente, aciona o compressor. Quando a temperatura chega ao valor certo, ele desliga o compressor. Esse ciclo se repete o tempo todo, sem ninguém precisar apertar nada.

## 3. Internet das Coisas

Por muito tempo, os sistemas embarcados funcionaram isolados: o ar-condicionado só sabia o que acontecia dentro da sala. A **Internet das Coisas** (IoT, do inglês *Internet of Things*) é a ideia de conectar esses objetos à Internet, para que enviem dados e recebam comandos à distância.

Com a conexão, aparecem novas possibilidades. Você liga o ar-condicionado pelo celular antes de chegar em casa. Uma fazenda acompanha a umidade do solo de cada parte da plantação e irriga só onde precisa. Uma cidade mede o fluxo de carros e ajusta o tempo dos semáforos. Um relógio acompanha os batimentos cardíacos e avisa sobre algo fora do normal.

Na maioria dos casos, o celular não conversa diretamente com o aparelho. O aparelho envia os dados para servidores na **nuvem**, como você viu na Aula 1, e o aplicativo do celular conversa com esses servidores. É a nuvem que guarda o histórico, processa os dados e repassa os comandos. Por isso, se a empresa desligar os servidores, muitos aparelhos "inteligentes" deixam de funcionar.

Conectar objetos também traz riscos, que ligam esta aula à Aula 2. Muitos aparelhos baratos saem de fábrica com senhas padrão, como "admin", e quase nunca recebem atualizações. Em 2016, um malware chamado **Mirai** invadiu centenas de milhares de câmeras e roteadores que usavam essas senhas e os usou, sem que os donos soubessem, em um grande ataque de negação de serviço que tirou do ar sites como Twitter e Netflix por horas. Além disso, aparelhos com câmera, microfone ou localização coletam dados pessoais, e é preciso saber para onde esses dados vão.

## 4. Automação

**Automação** é fazer uma tarefa acontecer sozinha, a partir de uma regra, sem que alguém precise executá-la toda vez. A forma mais simples de regra é **"se acontecer X, então faça Y"**, a mesma estrutura de decisão que você viu no Módulo 2.

- **Se** alguém passar pelo corredor, **então** acenda a luz.
- **Se** o solo estiver seco, **então** abra a válvula da irrigação.
- **Se** forem 7h de um dia útil, **então** ligue a cafeteira.

A automação existe muito antes da Internet. Uma caixa-d'água com boia já é uma automação mecânica: se o nível subir, a boia fecha a entrada de água. Nas fábricas, robôs e máquinas automáticas montam carros e embalam produtos há décadas. O que a tecnologia digital trouxe foi a facilidade de criar e mudar essas regras: hoje, qualquer pessoa monta uma rotina no aplicativo de uma lâmpada ou de um assistente de voz, sem precisar entender de eletrônica.

## 5. Dispositivos inteligentes

Um **dispositivo inteligente** junta tudo o que vimos nesta aula: sensores para perceber o ambiente, conexão com a Internet e regras ou Inteligência Artificial para decidir o que fazer.

A palavra "inteligente" pode enganar. Na maioria dos casos, o aparelho não pensa: ele segue regras definidas por alguém ou usa padrões aprendidos a partir de dados. Um assistente de voz parece entender o que você diz, mas o que ele faz é enviar o áudio para servidores na nuvem, onde um sistema de IA transforma a fala em texto e escolhe uma resposta. Um termostato inteligente observa em quais horários você costuma ligar o aquecimento e passa a fazer isso sozinho.

A diferença entre uma automação simples e um dispositivo inteligente está em quem cria a regra. Na automação, você define "se X, então Y". No dispositivo inteligente, parte das regras é aprendida com o uso. Na Aula 4, você vai ver como a Inteligência Artificial aprende esses padrões.

## Vídeo complementar

- [IoT (Internet das Coisas) // Dicionário do Programador](https://www.youtube.com/watch?v=qNHydTYkfcg) — Código Fonte TV.

## Exercícios

1. Escolha um aparelho da sua casa e identifique:
   - a) Qual é a entrada (sensor ou botão);
   - b) Que processamento acontece;
   - c) Qual é a saída (atuador ou tela);
   - d) Se ele se conecta à Internet.
2. Crie três regras de automação no formato "se, então" para a sua rotina. Para cada uma, diga qual sensor e qual atuador seriam necessários.
3. Explique, com suas palavras, por que uma câmera de segurança conectada à Internet com a senha "admin" é um risco, não só para o dono, mas também para outras pessoas.

## Questionário

1. O que é um sistema embarcado?
   - a) Um programa instalado no celular.
   - b) **Um computador dentro de outro aparelho, feito para uma tarefa específica.**
   - c) Um computador usado em navios.
   - d) Um servidor dentro de um data center.
2. Em uma lâmpada que acende quando alguém entra na sala, qual é o sensor e qual é o atuador?
   - a) A lâmpada é o sensor; o sensor de presença é o atuador.
   - b) **O sensor de presença é o sensor; a lâmpada é o atuador.**
   - c) Os dois são sensores.
   - d) Os dois são atuadores.
3. O que caracteriza a Internet das Coisas?
   - a) Usar a Internet apenas pelo computador.
   - b) **Objetos do dia a dia conectados à Internet, enviando dados e recebendo comandos.**
   - c) Um tipo de rede social para objetos.
   - d) Aparelhos que funcionam sem energia.
4. Qual frase é uma regra de automação?
   - a) "A lâmpada é branca."
   - b) **"Se o solo estiver seco, abra a irrigação."**
   - c) "O ar-condicionado tem controle remoto."
   - d) "A câmera grava em alta resolução."
5. Por que o malware Mirai conseguiu invadir tantos aparelhos em 2016?
   - a) Porque os aparelhos não tinham processador.
   - b) **Porque muitos usavam senhas padrão de fábrica.**
   - c) Porque estavam desligados.
   - d) Porque usavam Wi-Fi.

## Navegação relacionada

- [Voltar para o Módulo 5](./README.md)
- [Aula anterior: Segurança digital](./aula-2-seguranca-digital.md)
- [Próxima aula: Aplicações contemporâneas](./aula-4-aplicacoes-contemporaneas.md)
- [Ementa da trilha](../../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
