# Aula 4 — Aplicações contemporâneas

**Módulo:** [Módulo 5 — Tecnologia e Sistemas Modernos](./README.md)  
**Duração estimada:** 60 min  
**Status:** rascunho para revisão

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- Diferenciar aplicações Web e aplicações móveis;
- Explicar, em nível introdutório, a diferença entre aplicativos nativos, híbridos e Web;
- Explicar o que é Inteligência Artificial e como ela evoluiu, das regras escritas por pessoas ao aprendizado com dados;
- Reconhecer usos e limites da IA atual;
- Descrever como uma aplicação moderna junta nuvem, IA e dispositivos conectados;
- Reconhecer quais dados as aplicações coletam e como proteger sua privacidade.

## 1. Aplicações Web

Uma **aplicação Web** é um programa que você usa pelo navegador, sem instalar nada. Gmail, Google Docs e o site do seu banco são exemplos. Você digita um endereço, o navegador pede a página a um servidor e mostra o resultado, como você viu no Módulo 4.

A grande vantagem é funcionar em qualquer aparelho que tenha um navegador: o mesmo Google Docs abre no notebook, no celular e no computador da escola. Também não há atualização para instalar. Quando a empresa muda o programa, a mudança vale para todo mundo na próxima vez que a página for aberta, porque o programa fica no servidor.

A desvantagem é depender do navegador. Uma aplicação Web tem acesso mais limitado aos recursos do aparelho, como notificações, câmera e arquivos, e muitas não funcionam sem Internet.

## 2. Aplicações móveis

Uma **aplicação móvel**, ou aplicativo, é instalada no celular, normalmente pela Play Store (Android) ou pela App Store (iPhone). Por estar instalada, ela pode usar os recursos do aparelho com mais liberdade: câmera, GPS, microfone, sensores de movimento, contatos e notificações. É isso que permite a um aplicativo de transporte saber onde você está ou a um aplicativo de banco ler um QR Code.

Existem três formas principais de construir um aplicativo:

| Tipo | Como é feito | Vantagem | Desvantagem |
| --- | --- | --- | --- |
| **Nativo** | Um programa feito separadamente para cada sistema: um para Android, outro para iPhone. | Mais rápido e com acesso completo aos recursos do aparelho. | Mais caro, porque é preciso construir e manter duas versões. |
| **Híbrido** | Um único código que roda nos dois sistemas. | Mais barato e rápido de construir. | Pode ser um pouco mais lento e ter menos acesso a alguns recursos. |
| **Web** | Um site adaptado ao celular, que pode ganhar um ícone na tela inicial. | Não precisa de loja nem de instalação. | Tem o acesso mais limitado aos recursos do aparelho. |

Para quem usa, a diferença costuma ser invisível: um bom aplicativo híbrido parece igual a um nativo. A escolha é da empresa, que equilibra custo, velocidade de desenvolvimento e o que o aplicativo precisa fazer. Um jogo pesado tende a ser nativo; o aplicativo de uma loja pequena pode ser híbrido ou Web.

## 3. Inteligência Artificial

**Inteligência Artificial** (IA) é a área da computação que cria sistemas capazes de fazer tarefas que, em uma pessoa, exigiriam inteligência: reconhecer o que há em uma imagem, entender uma frase, tomar uma decisão, prever o que vai acontecer ou criar um texto. O nome foi criado em 1956, em uma conferência de pesquisadores nos Estados Unidos. Ou seja, a IA não é nova. O que mudou ao longo dessas décadas foi a forma de construí-la.

### A primeira forma: regras escritas por pessoas

Durante muito tempo, fazer IA significava escrever regras. Especialistas explicavam como tomavam decisões, e programadores transformavam esse conhecimento em milhares de instruções do tipo "se, então", como as que você viu na Aula 3. Esses programas foram chamados de **sistemas especialistas** e eram usados, por exemplo, para ajudar médicos a sugerir diagnósticos.

Outra parte da IA dessa época eram os **algoritmos de busca**, que testam caminhos possíveis até encontrar o melhor. O planejamento de rotas é um exemplo: um dos algoritmos mais usados para encontrar caminhos em um mapa, o A\*, foi criado em 1968 por pesquisadores de IA, para guiar um robô. É esse tipo de algoritmo que está nos aparelhos de GPS dos anos 2000. O computador Deep Blue, que venceu o campeão mundial de xadrez em 1997, também funcionava assim: testava milhões de jogadas e avaliava cada uma com regras escritas por especialistas.

Essa abordagem funciona bem quando o problema tem regras claras, como um mapa ou um tabuleiro. Mas ela falha quando as regras são difíceis de descrever. Tente escrever todas as regras para reconhecer um gato em uma foto: orelhas pontudas? Nem sempre. Bigodes? Outros animais também têm. As exceções não acabam.

Existe um fenômeno curioso nessa história: quando uma técnica de IA passa a funcionar bem e fica comum, as pessoas deixam de chamá-la de IA. O planejamento de rotas e o corretor ortográfico já foram IA de ponta e hoje parecem apenas "programas".

### A virada: aprender com exemplos

A partir dos anos 1990 e, com mais força, nos anos 2000, ganhou espaço outra abordagem: em vez de escrever as regras, mostrar ao sistema muitos exemplos e deixar que ele **aprenda os padrões**. Para reconhecer gatos, o sistema recebe milhões de fotos marcadas com "gato" ou "não é gato" e, a partir delas, aprende a reconhecer gatos em fotos que nunca viu. Esse processo se chama **aprendizado de máquina**.

Os filtros de spam do e-mail foram um dos primeiros usos populares: em vez de alguém listar todas as palavras suspeitas, o filtro aprende com as mensagens que as pessoas marcam como spam. As recomendações de filmes e músicas seguem a mesma ideia, aprendendo com o que milhões de pessoas assistiram e ouviram.

Essa abordagem só se tornou possível em grande escala por três motivos que se juntaram:

- **Dados:** a Internet e os smartphones passaram a gerar uma quantidade enorme de exemplos, como fotos, textos, cliques e localizações;
- **Poder de processamento:** computadores mais rápidos, em especial as placas de vídeo (GPUs), e servidores na nuvem, como você viu na Aula 1;
- **Algoritmos melhores:** a partir de 2012, as **redes neurais profundas**, inspiradas de forma simplificada no funcionamento dos neurônios, deram um salto no reconhecimento de imagens e de voz e na tradução.

### A fase atual: IA generativa

Até pouco tempo atrás, a IA era usada principalmente para **reconhecer** (um rosto, uma fala, uma fraude no cartão) e **prever** (o tempo de chegada, a próxima palavra no teclado). Em 2017, um novo tipo de rede neural, chamado *transformer*, tornou possível treinar modelos com quantidades gigantes de texto. Esses modelos aprenderam a **gerar** conteúdo novo: textos, imagens, traduções e respostas a perguntas. Em 2022, o lançamento do ChatGPT levou esse tipo de IA ao público, e é por isso que hoje se fala tanto do assunto.

### Do GPS dos anos 2000 ao aplicativo de transporte de hoje

Comparar um táxi guiado por GPS nos anos 2000 com um aplicativo de transporte de hoje mostra bem essa evolução:

| Tarefa | Anos 2000 | Hoje |
| --- | --- | --- |
| **Rota** | Algoritmo de busca sobre um mapa fixo, com a velocidade máxima de cada rua. | O mesmo tipo de algoritmo, mas usando tempos de viagem previstos com dados de trânsito em tempo real. |
| **Tempo de chegada** | Distância dividida pela velocidade das ruas. | Previsão aprendida com milhões de viagens anteriores, considerando horário, dia da semana e trânsito. |
| **Preço** | Tabela fixa: bandeirada mais valor por quilômetro. | Calculado na hora, conforme a procura e o número de motoristas disponíveis na região. |
| **Escolha do motorista** | A central de rádio chamava quem estivesse perto. | Um sistema compara milhares de motoristas e passageiros ao mesmo tempo. |
| **Segurança** | Pouco controle. | Modelos que aprendem a reconhecer contas falsas e fraudes de pagamento. |

Repare que as regras não desapareceram: a rota continua sendo calculada por um algoritmo de busca, como em 1968. O que o aprendizado de máquina mudou foi a qualidade das informações que alimentam essas regras. Os sistemas modernos **combinam** regras escritas por pessoas e padrões aprendidos com dados. A IA de hoje é uma evolução das regras, não uma substituição completa delas.

### Os limites da IA

Aprender com dados traz problemas que as regras escritas não tinham. Uma regra pode ser lida e conferida por uma pessoa. Um padrão aprendido por uma rede neural, não: muitas vezes nem quem construiu o sistema consegue explicar por que ele tomou uma decisão.

A IA também **erra**, e os assistentes de texto podem inventar informações com total confiança, porque geram o texto mais provável, e não necessariamente o verdadeiro. Por isso, o que eles respondem precisa ser conferido. Além disso, a IA aprende **vieses**: se os exemplos usados no treino tiverem preconceitos ou forem desequilibrados, o sistema repete esses problemas. Um sistema de reconhecimento facial treinado quase só com fotos de pessoas brancas, por exemplo, erra mais com pessoas negras. A IA encontra padrões nos dados que recebeu, mas não entende o mundo como uma pessoa.

## 4. Como tudo se junta

As aplicações modernas raramente usam uma tecnologia só. Pense em um aplicativo de transporte:

1. O **aplicativo móvel** usa o GPS do celular para saber onde você está;
2. Ele envia o pedido para servidores na **nuvem** (Aula 1), que guardam os dados de motoristas e passageiros;
3. **Algoritmos de rota e modelos de IA** calculam o caminho, o tempo de chegada, o preço e qual motorista deve receber a corrida;
4. A comunicação é protegida por **autenticação**, para que ninguém peça corridas em seu nome (Aula 2);
5. O carro pode ter **sistemas embarcados e sensores** que enviam dados de localização e de direção (Aula 3).

O mesmo raciocínio vale para uma casa conectada, um banco digital ou uma plataforma de cursos. Os conceitos deste módulo não são assuntos separados: são peças que aparecem juntas em quase todo serviço digital que você usa.

## 5. Coleta de dados e privacidade

Para funcionar, as aplicações coletam dados. O aplicativo de mapas precisa da sua localização para traçar a rota. Mas muitas aplicações coletam mais do que precisam para funcionar: quais páginas você visita, quanto tempo fica em cada vídeo, com quem conversa, onde esteve ao longo do dia e o que comprou.

Esses dados têm valor. Muitos serviços gratuitos, como redes sociais e buscadores, ganham dinheiro com **publicidade direcionada**: quanto mais sabem sobre você, mais precisamente conseguem mostrar anúncios para pessoas com o seu perfil. Os dados também alimentam os sistemas de IA da seção anterior e podem ser compartilhados com outras empresas, conforme a política de privacidade que você aceitou ao se cadastrar.

Dados que parecem inofensivos revelam muito quando combinados. Sozinha, a localização de uma manhã diz pouco. Ao longo de um mês, ela mostra onde você mora, onde trabalha ou estuda, que horas sai de casa e quais lugares frequenta, como uma igreja ou um hospital. Isso pode revelar até **dados sensíveis**, que, como você viu na Aula 2, a LGPD protege com mais rigor.

Algumas atitudes ajudam a reduzir essa exposição:

- **Revise as permissões** dos aplicativos nas configurações do celular. Uma lanterna não precisa acessar seus contatos;
- Prefira liberar a localização **"só durante o uso"**, e não "sempre";
- **Desconfie** de aplicativos gratuitos que pedem muitas permissões sem motivo claro;
- Pense antes de colocar informações pessoais em assistentes de IA, porque o que você digita pode ser guardado pela empresa;
- Lembre que a LGPD dá a você o direito de saber quais dados uma empresa tem sobre você e de pedir a eliminação deles.

## Vídeo complementar

- [A curiosa linha do tempo da evolução da Inteligência Artificial](https://www.youtube.com/watch?v=SkX6MKU9gAQ) — BBC News Brasil.

## Exercícios

1. Escolha cinco serviços que você usa. Para cada um, diga se você acessa pelo navegador (aplicação Web), por um aplicativo instalado ou pelos dois. Quais recursos do celular o aplicativo usa?
2. Dê três exemplos de IA que você usa no dia a dia e diga se cada uma reconhece, prevê ou gera algo.
3. Escolha um serviço que existia antes dos smartphones, como mapas, tradução ou atendimento ao cliente. Compare como ele funcionava antes e como funciona hoje: o que ainda segue regras fixas e o que passou a aprender com dados?
4. Abra as configurações do seu celular e veja as permissões de três aplicativos. Algum tem acesso a algo de que não precisa? O que você mudaria?

## Questionário

1. Qual é a principal vantagem de uma aplicação Web?
   - a) Funciona sem Internet em qualquer situação.
   - b) **Funciona em qualquer aparelho com navegador, sem instalação.**
   - c) Tem acesso total aos recursos do celular.
   - d) Só pode ser usada no computador.
2. Uma empresa quer um aplicativo para Android e iPhone gastando pouco e com um único código. Que tipo ela deve escolher?
   - a) Nativo
   - b) **Híbrido**
   - c) Sistema embarcado
   - d) Data center
3. Como um sistema de IA aprende a reconhecer gatos em fotos?
   - a) Alguém escreve todas as regras sobre como é um gato.
   - b) **Ele analisa muitos exemplos de fotos e aprende os padrões.**
   - c) Ele pergunta ao usuário a cada foto.
   - d) Ele busca a resposta em um dicionário.
4. Qual a principal diferença entre a IA dos sistemas especialistas e o aprendizado de máquina?
   - a) Os sistemas especialistas não usavam computador.
   - b) **Nos sistemas especialistas, pessoas escreviam as regras; no aprendizado de máquina, o sistema aprende padrões a partir de exemplos.**
   - c) O aprendizado de máquina não usa dados.
   - d) Não há diferença; são nomes diferentes para a mesma coisa.
5. Por que a resposta de um assistente de IA precisa ser conferida?
   - a) Porque ela sempre está desatualizada.
   - b) **Porque a IA pode errar e até inventar informações com confiança.**
   - c) Porque a IA só responde em inglês.
   - d) Não precisa; a IA nunca erra.
6. Um aplicativo de lanterna pede acesso aos seus contatos. O que isso indica?
   - a) Que ele precisa dos contatos para acender a luz.
   - b) **Que ele pede mais dados do que precisa, e a permissão deve ser negada.**
   - c) Que o celular está com defeito.
   - d) Que é um aplicativo nativo.

## Navegação relacionada

- [Voltar para o Módulo 5](./README.md)
- [Aula anterior: Tecnologia além dos computadores tradicionais](./aula-3-tecnologia-alem-dos-computadores-tradicionais.md)
- [Ementa da trilha](../../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
