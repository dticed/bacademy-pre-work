import './style.css'

const app = document.querySelector('[data-js="app"]');
app.innerHTML = `<h1>B. Academy</h1>
<p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`

const link = document.querySelector('[data-js="link"]');
link.innerHTML = "Click aqui para remover e adicionar o app"
link.addEventListener('click', (e) => {
  e.preventDefault();
  if (app.innerHTML.length === 0) {
    addApp(app);
    link.innerHTML = "Click para remover o app"
  } else {
    app.innerHTML = "";
    link.innerHTML = "Click para adicionar o app"
  }
}, false);

function addApp(element) {
  element.innerHTML = `<h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
  `
}

//Desafio 4
// Crie um link no HTML (fora da div .app), e adicione à ele um
// evento de clique. O clique nesse botão deverá alternar a
// visibilidade do .app: se o .app estiver visível, ele deverá
// ser escondido. Se estiver escondido, o clique deve exibí-lo.
