import './style.css'

const app = document.querySelector('[data-js=app]');

app.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`
const anchor = document.querySelector('[data-js=anchor]');

let flag = 1;

anchor.addEventListener('click', (event) => {

  console.log(flag);

  event.preventDefault();
  app.classList.toggle('hide');

  if (!(flag % 2 === 0)) {
    anchor.innerHTML = 'Fazer o conteúdo aparecer';
  }
  else {
    anchor.innerHTML = 'Sumir com o conteúdo';
  }

  flag++;
})
