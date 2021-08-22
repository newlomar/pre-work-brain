const input = document.querySelector('[data-js="input"]');

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
