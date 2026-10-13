# Aula 2 — Segurança digital

**Módulo:** [Módulo 5 — Tecnologia e Sistemas Modernos](./README.md)  
**Duração estimada:** 50 min  
**Status:** rascunho para revisão

## Objetivos da aula

Ao final desta aula, você deverá ser capaz de:

- Explicar a tríade CID: confidencialidade, integridade e disponibilidade;
- Diferenciar autenticação de autorização;
- Reconhecer ameaças comuns, como phishing e senhas vazadas;
- Aplicar boas práticas básicas para proteger suas contas;
- Entender, de forma geral, o que fazem o pentest, o red team e o blue team;
- Reconhecer o papel de frameworks de segurança e da LGPD.

## 1. A tríade CID

Hoje, quase tudo o que fazemos deixa informação em algum sistema: conversas, fotos, compras, notas da escola, dados do banco. **Segurança digital** é o conjunto de cuidados para que essas informações e os sistemas que as guardam não sejam vistos, alterados ou derrubados por quem não deveria.

Para saber o que exatamente proteger, a área usa três pilares, conhecidos como **tríade CID**:

| Pilar | Pergunta | Exemplo de falha |
| --- | --- | --- |
| **Confidencialidade** | Só quem tem permissão consegue ver a informação? | Alguém lê suas mensagens sem você saber. |
| **Integridade** | A informação está correta e não foi alterada sem permissão? | Alguém muda o valor de um Pix antes de ele ser enviado. |
| **Disponibilidade** | A informação e o sistema funcionam quando você precisa? | O site do banco sai do ar e ninguém consegue acessar. |

Os três pilares se equilibram. Um cofre trancado e enterrado protege muito bem a confidencialidade, mas ninguém consegue usar o que está dentro, então falha na disponibilidade. Proteger um sistema é encontrar o ponto em que a informação fica segura e, ao mesmo tempo, acessível para quem precisa dela. Quase todo problema de segurança afeta pelo menos um desses pilares, muitas vezes mais de um, e perguntar "qual pilar foi atingido?" ajuda a entender qualquer incidente.

## 2. Autenticação e autorização

Para garantir a confidencialidade e a integridade, um sistema precisa responder a duas perguntas sempre que alguém tenta usá-lo.

A primeira é **"quem é você?"**, e o processo de responder a ela se chama **autenticação**. Você prova quem é usando algo que **sabe** (uma senha), algo que **tem** (o celular que recebe um código) ou algo que **é** (sua digital ou seu rosto).

A segunda é **"o que você pode fazer?"**, e a resposta é a **autorização**. Depois de saber quem você é, o sistema decide o que liberar. No sistema de uma escola, por exemplo, o estudante e o professor fazem login no mesmo lugar, mas o estudante só vê as próprias notas, e o professor pode lançar as notas da turma.

Uma senha sozinha é frágil: ela pode ser adivinhada, vazada ou roubada por uma página falsa. Por isso, muitos serviços oferecem a **verificação em duas etapas**, que pede duas provas de tipos diferentes, como a senha e um código no celular. Assim, mesmo que alguém descubra a sua senha, ainda vai precisar do seu aparelho para entrar.

## 3. Ameaças comuns

A maioria dos ataques que atingem pessoas comuns não usa técnicas sofisticadas. Eles exploram descuidos e a confiança das pessoas.

Para entender uma ameaça, ajuda separar duas coisas: **por onde o atacante entra** e **o que ele faz depois de entrar**. Uma mesma porta de entrada pode levar a danos muito diferentes, e por isso uma única ameaça pode atingir mais de um pilar da tríade CID.

**Phishing.** É uma mensagem falsa, por e-mail, SMS ou WhatsApp, que imita um banco, uma loja ou uma pessoa conhecida. O phishing é uma porta de entrada, e o dano depende do que a mensagem leva a vítima a fazer:

- Se a vítima digita a senha em uma página falsa, o atacante passa a ler e-mails, conversas e documentos dela, o que atinge a **confidencialidade**.
- Com o acesso à conta, ele pode alterar dados, fazer transferências ou mandar mensagens em nome da vítima para enganar outras pessoas, o que atinge a **integridade**.
- Se a vítima abre um anexo ou instala um programa, a mensagem pode trazer um malware, como um ransomware, que atinge a **integridade** e a **disponibilidade** (veja abaixo).

**Senha fraca ou repetida.** Sites são invadidos com frequência, e as listas de e-mails e senhas vazadas circulam na Internet. Criminosos usam programas que testam essas combinações em bancos, redes sociais e lojas, e também tentam senhas óbvias, como "123456". Quem entra em uma conta pode ler tudo o que há nela (**confidencialidade**), alterar dados e agir em nome da vítima (**integridade**) e trocar a senha para que a dona da conta não consiga mais entrar (**disponibilidade**). O risco maior está no e-mail: quem controla o seu e-mail consegue redefinir a senha de quase todas as suas outras contas.

**Vazamento de dados.** Aqui a falha não é da vítima, e sim da empresa que guardava os dados dela, por um sistema mal protegido, um funcionário descuidado ou uma invasão. Nome, CPF, telefone e senhas de milhares de clientes ficam expostos, o que atinge a **confidencialidade**. O dano continua depois: com esses dados, criminosos montam golpes mais convincentes ("olá, Maria, confirme o CPF terminado em 123") e testam as senhas vazadas em outros serviços. Um vazamento costuma ser o começo de novos ataques.

**Malware.** É qualquer programa feito para causar dano, e cada tipo atinge pilares diferentes:

- **Spyware** e programas que roubam senhas trabalham escondidos, copiando o que você digita, suas senhas salvas e seus arquivos. Atingem a **confidencialidade**.
- **Ransomware** criptografa os arquivos da vítima, isto é, embaralha o conteúdo com uma chave que só o criminoso tem, e cobra um resgate para devolver o acesso. Os arquivos foram alterados sem permissão, o que atinge a **integridade**, e a vítima não consegue mais usá-los, o que atinge a **disponibilidade**. Muitos grupos também copiam os arquivos antes de criptografar e ameaçam publicá-los se o resgate não for pago, o que atinge a **confidencialidade**.
- Outros tipos dão ao atacante o controle remoto do aparelho e podem atingir os três pilares.

**Ataque de negação de serviço.** Milhares de aparelhos, muitas vezes infectados sem que seus donos saibam, acessam um site ao mesmo tempo até ele não aguentar e sair do ar. Nenhum dado é roubado ou alterado, mas ninguém consegue usar o serviço, o que atinge a **disponibilidade**. Para uma loja virtual ou um banco, horas fora do ar significam prejuízo e clientes sem atendimento.

| Ameaça | Pilares que pode atingir |
| --- | --- |
| Phishing | Confidencialidade, integridade e disponibilidade, conforme o que a mensagem entrega |
| Senha fraca ou repetida | Confidencialidade, integridade e disponibilidade |
| Vazamento de dados | Confidencialidade, e abre caminho para novos ataques |
| Malware | Depende do tipo; o ransomware atinge integridade e disponibilidade, e às vezes a confidencialidade |
| Negação de serviço | Disponibilidade |

Por trás de muitos desses golpes está a **engenharia social**: enganar a pessoa em vez de atacar o sistema. A mensagem cria urgência ("sua conta será bloqueada hoje"), oferece vantagem ("você ganhou um prêmio") ou finge ser alguém de confiança, como um parente pedindo dinheiro por um número novo. A pressa faz a pessoa agir sem conferir, e é exatamente isso que o golpista quer.

## 4. Boas práticas

A boa notícia é que poucos hábitos já bloqueiam a maior parte desses ataques:

- **Uma senha diferente para cada serviço**, para que um vazamento não abra as outras contas;
- **Um gerenciador de senhas**, que cria e guarda senhas fortes, assim você só precisa lembrar de uma;
- **Verificação em duas etapas**, principalmente no e-mail, no banco e nas redes sociais;
- **Atualizações em dia**, porque muitas delas corrigem falhas de segurança já conhecidas pelos criminosos;
- **Desconfiança de links e anexos**, mesmo de pessoas conhecidas. Na dúvida, acesse o site digitando o endereço ou ligue para a pessoa;
- **Backup** dos arquivos importantes, para recuperar tudo se o aparelho for perdido ou atacado por ransomware.

## 5. Como um atacante age e como as empresas se defendem

Ataques contra empresas costumam ser mais planejados e seguem etapas. Primeiro, o atacante faz o **reconhecimento**: descobre nomes de funcionários, e-mails e quais sistemas a empresa usa, muitas vezes só com informações públicas. Depois, busca um **acesso**, explorando uma falha, como uma senha vazada, um sistema desatualizado ou um funcionário que caiu em um phishing. Por fim, realiza a **ação**: rouba dados, altera informações ou derruba o serviço.

Esperar o ataque acontecer para descobrir as falhas sai caro. Por isso, as empresas contratam profissionais para atacar os próprios sistemas, com autorização, e encontrar os problemas antes dos criminosos. Esse trabalho se chama **pentest** (teste de intrusão). Ao final, a equipe entrega um relatório com as falhas encontradas e como corrigi-las.

Em empresas maiores, a segurança costuma se dividir em dois times. O **red team** pensa como o adversário e simula ataques reais, testando não só os sistemas, mas também as pessoas e os processos. O **blue team** defende: monitora os sistemas, percebe comportamentos estranhos e responde quando algo acontece. Os dois trabalham juntos, porque cada ataque simulado mostra ao blue team onde a defesa precisa melhorar.

> **Atenção:** testar a segurança de um sistema sem autorização do dono é crime no Brasil (Lei nº 12.737/2012). O pentest só é legal com autorização por escrito.

## 6. Frameworks e leis

Cuidar da segurança de uma empresa inteira envolve muitas tarefas, e é fácil esquecer alguma. Para não começar do zero, as empresas seguem **frameworks**: guias com boas práticas reconhecidas, que organizam o que precisa ser feito. Um dos mais usados é o **NIST Cybersecurity Framework**, que divide o trabalho em seis funções:

| Função | O que a empresa faz |
| --- | --- |
| Governar | Define regras, responsáveis e prioridades de segurança. |
| Identificar | Conhece seus sistemas, dados e riscos. |
| Proteger | Aplica proteções, como senhas fortes, backups e controle de acesso. |
| Detectar | Monitora para perceber ataques. |
| Responder | Age quando um ataque acontece. |
| Recuperar | Restaura os sistemas e os dados depois do incidente. |

Repare que só uma das funções é "proteger". As outras partem da ideia de que nenhuma proteção é perfeita: a empresa também precisa perceber quando algo deu errado, reagir rápido e voltar a funcionar.

Além das boas práticas, existem **leis**. No Brasil, a **Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)** define como empresas e órgãos públicos podem coletar e usar **dados pessoais**, isto é, informações que identificam uma pessoa, como nome, CPF, endereço e localização. A ideia central é que os dados pertencem à pessoa, e não à empresa que os coletou. Por isso, a empresa precisa de um motivo legítimo para usá-los e deve protegê-los.

Pela LGPD, você tem direito, entre outros, a saber quais dados uma empresa tem sobre você, corrigir dados errados, pedir a eliminação de dados desnecessários e revogar o consentimento que deu. Alguns dados exigem cuidado ainda maior, os **dados sensíveis**, porque podem levar a discriminação: origem racial ou étnica, religião, opinião política, saúde, vida sexual, dados genéticos e biométricos. Quando há um vazamento que possa causar risco ou dano, a empresa deve avisar a **ANPD** (Autoridade Nacional de Proteção de Dados) e as pessoas afetadas.

## Vídeo complementar

- [Os Pilares da Segurança da Informação - Conheça o CID](https://www.youtube.com/watch?v=tc1vnk7t9kw) — Guia Anônima.

## Material complementar

Fascículos da Cartilha de Segurança para Internet, do CERT.br:

- [Autenticação](https://cartilha.cert.br/fasciculos/autenticacao/fasciculo-autenticacao.pdf)
- [Golpes: não se deixe enganar](https://cartilha.cert.br/fasciculos/golpes/fasciculo-golpes.pdf)
- [Proteção de dados](https://cartilha.cert.br/fasciculos/protecao-de-dados/fasciculo-protecao-de-dados.pdf)
- [Vazamento de dados](https://cartilha.cert.br/fasciculos/vazamento-de-dados/fasciculo-vazamento-de-dados.pdf)

Aprofundamento opcional: criptografia e segurança física.

## Exercícios

1. Relacione cada situação ao pilar da tríade CID afetado:
   - a) Um site de compras fica fora do ar durante a Black Friday.
   - b) Um funcionário altera a nota de um estudante sem permissão.
   - c) Fotos de um celular perdido são publicadas na Internet.
2. Revise uma conta pessoal (e-mail ou rede social):
   - A verificação em duas etapas está ativada?
   - A senha é usada só nessa conta?
   - Há aparelhos conectados que você não reconhece?
3. Leia a mensagem abaixo e aponte três sinais de que ela é um golpe:

   > **URGENTE:** Seu acesso ao banco será BLOQUEADO hoje às 18h. Para evitar o bloqueio, confirme seus dados no link: banco-seguro-atualizacao.com

## Questionário

1. Um ataque derruba o site de um hospital. Qual pilar da tríade CID foi afetado?
   - a) Confidencialidade
   - b) Integridade
   - c) **Disponibilidade**
   - d) Autorização
2. Qual a diferença entre autenticação e autorização?
   - a) São a mesma coisa.
   - b) **Autenticação confirma quem você é; autorização define o que você pode fazer.**
   - c) Autenticação define o que você pode fazer; autorização confirma quem você é.
   - d) Autenticação só existe em bancos.
3. Por que usar a mesma senha em vários sites é arriscado?
   - a) Porque a senha expira mais rápido.
   - b) **Porque, se ela vazar em um site, pode ser usada para entrar nos outros.**
   - c) Porque os sites bloqueiam senhas repetidas.
   - d) Não é arriscado se a senha for longa.
4. O que é um pentest?
   - a) Um vírus que testa senhas.
   - b) Um ataque feito por criminosos.
   - c) **Um teste de invasão feito com autorização para encontrar falhas.**
   - d) Um programa de backup.
5. Qual lei brasileira trata da proteção de dados pessoais?
   - a) Marco Civil da Internet
   - b) **LGPD**
   - c) Código de Defesa do Consumidor
   - d) Lei de Direitos Autorais

## Referências

- BRASIL. [Lei nº 13.709, de 14 de agosto de 2018](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm). Lei Geral de Proteção de Dados Pessoais (LGPD).
- CERT.br. [Cartilha de Segurança para Internet — Fascículos](https://cartilha.cert.br/fasciculos/). CC BY-NC-ND 4.0.
- NIST. [*The NIST Cybersecurity Framework (CSF) 2.0*](https://doi.org/10.6028/NIST.CSWP.29). 2024. Domínio público.

## Navegação relacionada

- [Voltar para o Módulo 5](./README.md)
- [Aula anterior: Computação em nuvem](./aula-1-computacao-em-nuvem.md)
- [Próxima aula: Tecnologia além dos computadores tradicionais](./aula-3-tecnologia-alem-dos-computadores-tradicionais.md)
- [Ementa da trilha](../../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
