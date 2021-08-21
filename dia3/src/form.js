const input = document.querySelector('[data-js="username"]')

const dontChange = ['da', 'de', 'do', 'dos']

input.addEventListener('input', (e) => {
  const valueArray = e.target.value.split(' ');
  console.log(valueArray)
  e.target.value = valueArray.map((word) => {
    return dontChange.includes(word.toLowerCase())
      ? word.toLowerCase()
      : capitalize(word)
  }).join(' ')
})

function capitalize(word) {
  if(word.length === 0) {
    return ''
  }
  return `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}`
}

function $ (selector) {
  return document.querySelector(selector)
}

const form = $('[data-js="form"]')
const select = document.createElement('select')
const colors = ['#6B3280', '#EF4441', '#F59E0B', '#10B981', '#3B82F6']
const colorsContainer = document.createElement('div')
colorsContainer.style.display = "flex"

colors.forEach(color => {
  const option = document.createElement('option')
  option.value = color
  option.textContent = color
  select.appendChild(option)
})

select.addEventListener('change', (e) => {
  colorsContainer.innerHTML = ''
  Array.from(e.target.selectedOptions).forEach(option => {
    const div = document.createElement('div')
    div.style.width = "100px"
    div.style.height = "100px"
    div.style.background = option.value
    colorsContainer.appendChild(div)
  })
})



select.setAttribute('multiple', '')

form.appendChild(select)
document.body.appendChild(colorsContainer)
