function popularQuadro(size) {
  const pai = document.getElementById('pixel-board');
  for (let i = 0; i < size; i += 1) {
    let quadros = document.createElement('div');
    quadros.classList.add('pixel');
    quadros.style.backgroundColor = 'white';
    pai.appendChild(quadros);
  }
}
popularQuadro(25);
