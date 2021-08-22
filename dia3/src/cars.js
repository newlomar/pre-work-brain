const form = document.querySelector('[data-js="form-carros"]');
const table = document.querySelector('[data-js="table"]');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let tr = document.createElement('tr');

  let tdImage = document.createElement('td');
  tdImage.innerHTML = `<img src=${e.target.elements.imagem.value}>`;

  let tdMarca = document.createElement('td');
  tdMarca.innerHTML = `${e.target.elements.marca.value}`;

  let tdPlaca = document.createElement('td');
  tdPlaca.innerHTML = `${e.target.elements.placa.value}`;

  let tdCor = document.createElement('td');
  tdCor.innerHTML = `${e.target.elements.cor.value}`;

  tr.appendChild(tdImage);
  tr.appendChild(tdMarca);
  tr.appendChild(tdPlaca);
  tr.appendChild(tdCor);
  table.appendChild(tr);
  form.reset();
  form.elements.imagem.focus();
})
