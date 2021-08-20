const app = document.querySelector('.app');
const form = document.querySelector('[data-js="form"]');
const nome = document.querySelector('[data-js="nome"]')
const select = document.createElement('select');
const boxColors = document.createElement('div');

const p = document.createElement('p');

const wordToCheck = ["de", "da", "do", "dos"];

nome.addEventListener('input', (e) => {
  let string = "";
  p.textContent = "";

  if (e.target.value !== " " || e.target.value !== "") {
    string += e.target.value;
  }

  const arr = string.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (wordToCheck.includes(arr[i])) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }

  arr.forEach(e => {
    p.textContent += e + " ";
  })

  app.appendChild(p)
})

const colors = ['red', 'blue', 'green', 'black', 'purple']

select.setAttribute('name', 'color-select')
select.setAttribute('multiple', '')
select.setAttribute('size', 5)

colors.forEach((e) => {
  const option = document.createElement('option');
  option.setAttribute('style', `color:${e}`)
  option.textContent = e;
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  boxColors.innerHTML = "";
  [...e.target.selectedOptions].forEach(el => {
    const div = document.createElement('div');
    if (el.selected) {
      div.setAttribute('style', `background-color:${el.value}; height:100px; width:100px;`)
      boxColors.appendChild(div);
    }
  })
})


form.appendChild(select)
app.appendChild(boxColors);
