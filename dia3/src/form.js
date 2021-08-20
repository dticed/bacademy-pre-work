const body = document.querySelector('body');
const nome = document.querySelector('[data-js="nome"]')

const p = document.createElement('p');

const wordToCheck = ["de", "da", "do", "dos"];

nome.addEventListener('input', (e) => {
  let string = "";
  p.textContent = "";

  if (e.target.value !== " " || e.target.value !== "") {
    //p.textContent = e.target.value;
    string += e.target.value;
  }

  const arr = string.split(" ");

  // arr.map(element => {
  //   if(wordToCheck.includes(element)) {
  //     element.toLowerCase();
  //   } else {
  //     element.charAt(0).toUpperCase();
  //   }
  // })

  for(let i = 0; i < arr.length; i++) {
    if(wordToCheck.includes(arr[i])) {
      arr[i] = arr[i].toLowerCase();
    } else {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
  }

  arr.forEach(e => {
    p.textContent += e + " ";
  })

  body.appendChild(p)
})
