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

Segurança digital é proteger informações e sistemas. Para saber o que proteger, a área usa três pilares, conhecidos como **tríade CID**:

| Pilar | Pergunta | Exemplo de falha |
| --- | --- | --- |
| **Confidencialidade** | Só quem tem permissão consegue ver a informação? | Alguém lê suas mensagens sem você saber. |
| **Integridade** | A informação está correta e não foi alterada sem permissão? | Alguém muda o valor de um Pix antes de ele ser enviado. |
| **Disponibilidade** | A informação e o sistema funcionam quando você precisa? | O site do banco sai do ar e ninguém consegue acessar. |

Quase todo problema de segurança afeta pelo menos um desses pilares.

## 2. Autenticação e autorização

Para garantir a confidencialidade e a integridade, um sistema precisa saber quem está acessando e o que essa pessoa pode fazer.

- **Autenticação** responde "quem é você?". Exemplos: senha, código enviado por SMS ou aplicativo, digital ou reconhecimento facial.
- **Autorização** responde "o que você pode fazer?". Exemplo: em uma escola, o estudante vê as próprias notas, e o professor pode lançar as notas da turma.

A autenticação fica mais forte quando combina duas formas diferentes, como senha e um código no celular. Isso se chama **verificação em duas etapas**. Mesmo que alguém descubra a sua senha, ainda vai precisar do seu celular.

## 3. Ameaças comuns

| Ameaça | Como funciona | Pilar afetado |
| --- | --- | --- |
| **Phishing** | Mensagem falsa que imita um banco, loja ou pessoa conhecida para fazer você clicar em um link ou passar dados. | Confidencialidade |
| **Senha fraca ou repetida** | Se uma senha vaza em um site, criminosos testam a mesma senha em outros serviços. | Confidencialidade |
| **Vazamento de dados** | Uma empresa perde o controle sobre dados de clientes, que acabam expostos. | Confidencialidade |
| **Malware** | Programa malicioso que rouba dados ou, no caso do *ransomware*, sequestra arquivos e cobra resgate. | Os três |
| **Ataque de negação de serviço** | Milhares de acessos falsos ao mesmo tempo derrubam um site. | Disponibilidade |

Muitos ataques não dependem de tecnologia avançada, e sim de enganar pessoas. Isso se chama **engenharia social**: criar urgência ("sua conta será bloqueada hoje"), oferecer vantagem ("você ganhou um prêmio") ou fingir ser alguém de confiança.

## 4. Boas práticas

- Use uma **senha diferente** para cada serviço;
- Use um **gerenciador de senhas** para criar e guardar senhas fortes;
- Ative a **verificação em duas etapas**, principalmente no e-mail, no banco e nas redes sociais;
- Mantenha o sistema e os aplicativos **atualizados**;
- **Desconfie** de links e anexos recebidos, mesmo de pessoas conhecidas. Na dúvida, acesse o site digitando o endereço;
- Faça **backup** dos arquivos importantes.

## 5. Como um atacante age e como as empresas se defendem

Um atacante costuma seguir etapas:

1. **Reconhecimento:** coleta informações sobre o alvo, como nomes de funcionários e sistemas usados;
2. **Acesso:** explora uma falha, como uma senha vazada, um sistema desatualizado ou um phishing;
3. **Ação:** rouba dados, altera informações ou derruba o serviço.

Para se antecipar, as empresas fazem **pentest** (teste de intrusão): profissionais contratados atacam os sistemas da própria empresa, com autorização, para encontrar falhas antes dos criminosos. As equipes de segurança costumam se dividir assim:

- **Red team:** simula ataques reais, como um adversário faria;
- **Blue team:** defende os sistemas, monitora o que acontece e responde a incidentes.

> **Atenção:** testar a segurança de um sistema sem autorização do dono é crime no Brasil (Lei nº 12.737/2012). O pentest só é legal com autorização por escrito.

## 6. Frameworks e leis

Para organizar a segurança, as empresas seguem **frameworks**: guias com boas práticas reconhecidas. Um dos mais usados é o **NIST Cybersecurity Framework**, que divide o trabalho em seis funções:

| Função | O que a empresa faz |
| --- | --- |
| Governar | Define regras, responsáveis e prioridades de segurança. |
| Identificar | Conhece seus sistemas, dados e riscos. |
| Proteger | Aplica proteções, como senhas fortes, backups e controle de acesso. |
| Detectar | Monitora para perceber ataques. |
| Responder | Age quando um ataque acontece. |
| Recuperar | Restaura os sistemas e os dados depois do incidente. |

Além das boas práticas, existem **leis**. No Brasil, a **Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)** define como empresas e órgãos públicos podem coletar e usar **dados pessoais**, isto é, informações que identificam uma pessoa, como nome, CPF, endereço e localização.

Pela LGPD, você tem direito, entre outros, a:

- Saber quais dados uma empresa tem sobre você;
- Corrigir dados errados;
- Pedir a eliminação de dados desnecessários;
- Revogar o consentimento que deu.

Alguns dados exigem mais cuidado, os **dados sensíveis**: origem racial ou étnica, religião, opinião política, saúde, vida sexual, dados genéticos e biométricos. Quando há um vazamento que possa causar risco ou dano, a empresa deve avisar a **ANPD** (Autoridade Nacional de Proteção de Dados) e as pessoas afetadas.

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
- [Ementa da trilha](../../../ementas/trilha-introdutoria-descobrindo-o-mundo-tech.md)
