export default function digitacaoAnim() {
  const textos = document.querySelectorAll('[data-digitacao]');

  textos.forEach((texto) => {
    const textoArray = texto.innerHTML.split('');
    texto.innerHTML = '';
    textoArray.forEach((letra, index) => {
      setTimeout(() => { texto.innerHTML += letra; }, 75 * index);
    });
  });
}
