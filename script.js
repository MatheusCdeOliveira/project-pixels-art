function popularQuadro(size) {
  const pai = document.getElementById('pixel-board');
  for (let i = 0; i < size; i += 1) {
    const quadros = document.createElement('div');
    quadros.classList.add('pixel');
    quadros.style.backgroundColor = 'white';
    pai.appendChild(quadros);
  }
}
popularQuadro(25);

function selecionarCor() {
  let cores = document.getElementById('color-palette');
  const select = document.getElementsByClassName('selected');
  if (select.length <= 1) {
    cores.addEventListener('click', function (event) {
      select[0].classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selecionarCor();

window.onload = carregaPagina;

function carregaPagina() {
  const corPreta = document.querySelector('.one');
  corPreta.classList.add('selected');
}
