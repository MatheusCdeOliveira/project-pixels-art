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

let corAtual;
function selectColor() {
  let cores = document.getElementById('color-palette');
  const select = document.getElementsByClassName('selected');
  if (select.length <= 1) {
    cores.addEventListener('click', function (event) {
      select[0].classList.remove('selected');
      event.target.classList.add('selected');
    });
  }
}
selectColor();

const pixels = document.getElementById('pixel-board');
const select = document.getElementsByClassName('selected');
const color = document.querySelector('.one');
let cor = color.style.backgroundColor;
pixels.addEventListener('click', function (event) {
  if (
    select.length > 0 &&
    event.target.style.backgroundColor !== select[0].style.backgroundColor
  ) {
    event.target.style.backgroundColor = select[0].style.backgroundColor;
  } else {
    event.target.style.backgroundColor = 'white';
  }
});

window.onload = carregaPagina;

function carregaPagina() {
  const corPreta = document.querySelector('.one');
  corPreta.classList.add('selected');
}
