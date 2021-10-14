<p align="center">
  <a href="http://https://github.com/Luanaap/twitchsetup-clone">
  <a href="https://github.com/Luanaap/twitchsetup-clone/network">
  <a href="https://github.com/Luanaap">
</p>

# Twitch Setup Clone

Fiz esse clone como um desafio de codificação para me juntar à [SuperSim](https://www.supersim.com.br/) equipe.

## O Desafio

O desafio consiste em fazer um clone de algum site de seu interesse. Sua estrutura deverá conter pelo menos duas páginas, uma lista(tabela, ou cards, ou o que preferir) populada dinamicamente e um formulário;

Confira a versão ao vivo aqui: [TwitchSetupClone](twitchsetup-clone.vercel.app)

Confira o desafio aqui: [SuperSim](https://s3.amazonaws.com/gupy5/production/companies/1954/emails/1633634448387/a3311c60-27a3-11ec-bd06-2bc019f57abd/supersim_-_jnior_-_front_end.pdf)

## Recursos

### Primeira Página

Criei a parte principal do site e é totalmente responsivo a dispositivos móveis.

<p align="center">
    <img  max-width="768" src="https://i.imgur.com/tbDfTvZ.png">
  </p>
<br />

### Componente de canais recomendados
O `<VideoGroup data={[]}/>` componente é totalmente reutilizável, ele apenas pega uma matriz de dados da API oficial da Twitch e embaralha os resultados (algum tipo de "algoritmo" de canais recomendados)

 <p align="center">
    <img  max-width="768" src="https://i.imgur.com/mpvTCuY.png">
  </p>
<br />

### Componente Botão
O `<Button buttonType={'primary'|'secondary'}>Text Inside</Button>` componente recebe uma propriedade buttonType que pode ser usada como 'primária' ou 'secundária', o texto dentro dele será exibido como o texto do botão.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/mhWLZAm.png">
  </p>
<br />

### Pontuação de desempenho farol


  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/0bpjPLk.png">
  </p>


  ### Construido com:
- [x] Next.JS
- [x] Typescript
- [x] Axios
- [x] Styled-Components
- [x] TwitchAPI
- [x] Deployed to Vercel

## Isenção de responsabilidade
Este projeto não é de forma alguma afiliado à Twitch Interactive, Inc. Amazon.com, Provi ou qualquer empresa mencionada nesta página.

## Execute isso Localmente.
Para executar este projeto localmente, você precisará do Node.js instalado.

Clone esse repositório usando `https://github.com/Luanaap/twitchsetup-clone.git`

Vá para o diretório do seu projeto `cd twitchsetup-clone`

Instale dependências de preferência com, `yarn`, mas você também pode usar o `npm install`

Crie um arquivo .env na raiz da pasta com base em .env.example.

Execute seu aplicativo NEXTJS com `yarn dev` ou `npm run dev`

Acesse `localhost:300` e confira esse clone incrível

## Infos da dev
- Linkedin - [LuanaAndradePereira](https://www.linkedin.com/in/luanaapereira/)
- Discord - [Luanapr#0362](https://discord.com/)











