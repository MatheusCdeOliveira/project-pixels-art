// Input
const paiInput = document.querySelector('#buttonFather');
const newInput = document.createElement('input');
newInput.id = 'board-size';
paiInput.appendChild(newInput);
newInput.type = 'number';
newInput.min = '1';
// ------------------------------------------------
// botão VQV
const newButton = document.createElement('button');
newButton.innerText = 'VQV';
newButton.id = 'generate-board';
paiInput.appendChild(newButton);

const pai = document.getElementById('pixel-board');

function popularQuadro(size) {
  for (let i = 0; i < size; i += 1) {
    const quadros = document.createElement('div');
    quadros.classList.add('pixel');
    quadros.style.backgroundColor = 'white';
    pai.appendChild(quadros);
  }
}
popularQuadro(25);

// ---------------------------------------------------

function populateByInput() {
  if (!newInput.value) {
    alert('Board inválido!');
  }
  if (newInput.value < 5) {
    newInput.value = 5;
  } else if (newInput.value > 50) {
    newInput.value = 50;
  }
  while (pai.children.length > 0) {
    pai.lastChild.remove();
  }
  pai.style.width = newInput.value * 42 + 'px';
  for (let i = 0; i < newInput.value * newInput.value; i += 1) {
    const quadros = document.createElement('div');
    quadros.classList.add('pixel');
    quadros.style.backgroundColor = 'white';
    pai.appendChild(quadros);
  }
}
newButton.addEventListener('click', populateByInput);

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
  const divPai = document.querySelector('#buttonFather');
  const pix = document.querySelectorAll('.pixel');
  const btnClear = document.createElement('button');
  btnClear.innerText = 'Limpar';
  btnClear.id = 'clear-board';
  divPai.appendChild(btnClear);

  btnClear.addEventListener('click', function () {
    for (const valor of pix) {
      if (valor.style.backgroundColor !== 'white') {
        valor.style.backgroundColor = 'white';
      }
    }
  });
}
limpaTudo();

function carregaPagina() {
  const corPreta = document.querySelector('.one');
  corPreta.classList.add('selected');
}
window.onload = carregaPagina;
