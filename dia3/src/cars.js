import './style.css'

const form = document.querySelector('[data-js="form-carro"]')
const table = document.querySelector('[data-js="table-car"]')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const tr = document.createElement('tr')

  const dadosParaApi = {
    imagem: e.target.elements.imagem.value,
    marca: e.target.elements.marca.value,
    ano: e.target.elements.ano.value,
    placa: e.target.elements.placa.value,
    cor: e.target.elements.cor.value
  }

  for(let key in dadosParaApi) {
    const th = document.createElement('th')
    if(key === "imagem") {
      const img = document.createElement('img')
      img.src = dadosParaApi[key]
      th.appendChild(img);
      tr.appendChild(th)
    } else {
      th.innerHTML = dadosParaApi[key];
      tr.appendChild(th)
    }
  }
  table.appendChild(tr)


})


