export default function showHeader() {
  const header = document.querySelector('[data-header="header"]');
  let valorTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = this.window.pageYOffset || this.documentElement.scrollTop;
    if (scrollTop > valorTop) {
      header.style.top = '-100px';
    } else {
      header.style.top = '0';
    }
    valorTop = scrollTop;
  });
}
