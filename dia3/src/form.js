const input = document.querySelector('[data-js="input"]');
const form = document.querySelector('[data-js="form"]');

input.addEventListener('input', (e) => {
  const arr = e.target.value.split(' ').map((palavra) => {
    let palavraMinuscula = palavra.toLowerCase();

    if (palavraMinuscula === 'de' || palavraMinuscula === 'da' || palavraMinuscula === 'do' || palavraMinuscula === 'dos') {
      return palavraMinuscula;
    }

    return palavraMinuscula.charAt(0).toUpperCase() + palavraMinuscula.slice(1);

  });

  e.target.value = arr.join(' ');
});

const select = document.createElement('select');
select.setAttribute('multiple', '');
form.appendChild(select);

const cores = {
  vermelho: '#FF0000',
  verde: '#00FF00',
  azul: '#0000FF',
  amarelo: '#FFFF00',
  ciano: '#00FFFF'
};

const coresOptions = Object.entries(cores).map((cor) => {
  let option = document.createElement('option');
  option.value = cor[0];
  option.text = cor[0];
  option.setAttribute('data-js', 'cores');
  return option;
});

for(let cor of coresOptions) {
  select.appendChild(cor);
}

[...select.options].forEach((option) => {
  let div = document.createElement('div');
  div.style.backgroundColor = cores[option.value];
  div.setAttribute('data-js', option.value);
  div.className = 'hide';
  form.appendChild(div);
});

select.addEventListener('change', (e) => {
  [...e.target.options].forEach((option) => {
    let div = document.querySelector(`[data-js=${option.value}]`);
    div.className = 'hide';
  });
  [...e.target.selectedOptions].forEach((option) => {
    let div = document.querySelector(`[data-js=${option.value}]`);
    div.classList.toggle('hide');
  });
});

