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

function selectColor() {
  const cores = document.getElementById('color-palette');
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

function limpaTudo() {
  const divPai = document.querySelector('#color-palette');
  const pix = document.querySelectorAll('.pixel');
  const btnClear = document.createElement('button');
  btnClear.innerText = 'Limpar';
  btnClear.id = 'clear-board';
  divPai.appendChild(btnClear);

  btnClear.addEventListener('click', function () {
    for (valor of pix) {
      if (valor.style.backgroundColor !== 'white') {
        valor.style.backgroundColor = 'white';
      }
    }
  });
}
limpaTudo();

window.onload = carregaPagina;

function carregaPagina() {
  const corPreta = document.querySelector('.one');
  corPreta.classList.add('selected');
}
