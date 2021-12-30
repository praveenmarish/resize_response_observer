function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const observer = new ResizeObserver((entries) => {
  for (let entry of entries) {
    const width = Math.floor(entry.contentRect.width);
    const angle = Math.floor((width / 360) * 100);
    const gradient = `linear-gradient(${angle}deg, ${getRandomColor()}, ${getRandomColor()}`;
    entry.target.style.background = gradient;
  }
});

observer.observe(container);
