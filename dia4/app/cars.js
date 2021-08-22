import './style.css'

const url = 'http://localhost:3333/cars'

const app = document.querySelector('[data-js="app"]')
const form = document.querySelector('[data-js="form-carro"]')
const tbody = document.querySelector('tbody')


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
  console.log(dadosParaApi)
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
  getCars()

}

async function getCars() {
  const result = await fetch(url)
    .then(result => result.json())
    .then((result) => result)
  renderCars(result)
}

function renderCars(cars) {
  tbody.innerHTML = ""
  if (cars.length === 0) {
    const span = document.createElement('span')
    span.textContent = "Nenhum carro cadastrado."
    app.appendChild(span)
  } else {
    const span2 = document.querySelector('span')
    if (span2) {
      span2.innerHTML = ""
    }
    console.log(cars)
    cars.forEach(car => {
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button')
      deleteButton.textContent = "Delete"
      //deleteButton.addEventListener('click', deleteCar());
      const tr = document.createElement('tr')
      for (let key in car) {
        const th = document.createElement('th')
        if (key === "image") {
          const img = document.createElement('img')
          img.src = car[key]
          th.appendChild(img);
          tr.appendChild(th)
        } else {
          th.innerHTML = car[key];
          tr.appendChild(th)
        }
      }
      tr.appendChild(deleteButton)
      tbody.appendChild(tr)
    })
  }
}

function deleteCar() {
  console.log('teste')
}

function loadApp() {
  getCars()
}

loadApp();
