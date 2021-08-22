import './style.css'

const url = 'http://localhost:3333/cars'

const app = document.querySelector('[data-js="app"]')
const form = document.querySelector('[data-js="form-carro"]')
const table = document.querySelector('[data-js="table-car"]')


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const dadosParaApi = {
    image: e.target.elements.imagem.value,
    brandModel: e.target.elements.marca.value,
    year: e.target.elements.ano.value,
    plate: e.target.elements.placa.value,
    color: e.target.elements.cor.value
  }

  const {
    image,
    brandModel,
    year,
    plate,
    color
  } = {
    ...dadosParaApi
  };

  cadastrarCarro(image, brandModel, year, plate, color);
  e.target.reset()
  imagem.focus()
})

async function cadastrarCarro(imagem, brandModel, year, plate, color) {
  const result = await fetch('http://localhost:3333/cars', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      image: imagem,
      brandModel: brandModel,
      year: year,
      plate: plate,
      color: color
    })
  })
  if (!result.ok) {
    console.log("Não foi possível cadastrar o carro.")
  }
}

// async function getDados() {
//   await fetch(url)
//     .then(response => {
//       return response.json();
//     })
//     .then(r => {
//       dados = r;
//       console.log("Exemplo no bloco do getDados", dados)
//     })
//     .then(err => {
//       // fazer algo com o erro aqui
//     })
// }

// async function verificaDados() {
//   await getDados()
//   if (dados.length === 0) {
//     const span = document.createElement('span');
//     span.textContent = "Nenhum carro cadastrado"
//     app.appendChild(span)
//   }
// }

async function getCars() {
  const result = await fetch(url)
    .then(result => result.json())
    .then((result) => result)
  renderCars(result)
}

function renderCars(carros) {
  carros.forEach(carro => {
    const tr = document.createElement('tr')
    for (let key in carro) {
      console.log(key)
      const th = document.createElement('th')
      if (key === "image") {
        const img = document.createElement('img')
        img.src = carro[key]
        th.appendChild(img);
        tr.appendChild(th)
      } else {
        th.innerHTML = carro[key];
        tr.appendChild(th)
      }
    }
    table.appendChild(tr)
  })
}

function deleteCar() {

}

function loadApp() {
  getCars()
}

loadApp();
