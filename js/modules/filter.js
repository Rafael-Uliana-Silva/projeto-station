export default function filterBar() {
  const valorPesquisa = document.querySelector('[data-filter="filter-bar"]');
  const bairroNome = document.querySelectorAll('[data-filter="card"]');
  const arrayBairro = Array.from(bairroNome);

  valorPesquisa.addEventListener('input', (e) => {
    const valor = e.target.value.toLowerCase();
    arrayBairro.forEach((bairro) => {
      const visivel = bairro.innerHTML.toLowerCase().includes(valor);
      bairro.classList.toggle('esconder', !visivel);
    });
  });
}
