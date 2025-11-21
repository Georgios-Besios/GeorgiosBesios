function getRandomColor() {
  const colors = ['#379157', '#FFD700']; // πράσινο και χρυσό/κίτρινο
  return colors[Math.floor(Math.random() * colors.length)];
}

function createTree() {
  const treeContainer = document.createElement('div');
  treeContainer.className = 'tree-container';
  document.body.appendChild(treeContainer);

  const layers = 10;
  let delay = 0;

  for (let i = 0; i < layers; i++) {
    const layerSize = (layers - i) * 10;
    const radius = (layers - i) * 15;
    for (let j = 0; j < layerSize; j++) {
      const star = document.createElement('div');
      star.className = 'star';
      const angle = (j / layerSize) * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = i * 20;
      star.innerText = '*';
      star.style.color = getRandomColor();
      star.style.left = `${x}px`;
      star.style.bottom = `${y}px`;
      star.style.transform = `translateZ(${z}px)`;
      star.style.animationDelay = `${delay}s, ${delay + 1}s`;
      star.style.fontSize = `${16 + i}px`;
      treeContainer.appendChild(star);
      delay += 0.02;
    }
  }

  const topStar = document.createElement('div');
  topStar.className = 'star';
  topStar.innerText = '*';
  topStar.style.color = '#FFD700';
  topStar.style.fontSize = '42px';
  topStar.style.left = '-2px';
  topStar.style.bottom = `${layers * 20}px`;
  topStar.style.transform = `translateZ(0px)`;
  topStar.style.animationDelay = `${delay}s, ${delay + 1}s`;
  treeContainer.appendChild(topStar);
}

createTree();