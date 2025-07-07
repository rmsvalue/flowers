window.onload = function() {
  // Animate each flower one by one
  const flowers = document.querySelectorAll('.flower');
  flowers.forEach((flower, index) => {
    const petals = flower.querySelectorAll('.petal');
    const center = flower.querySelector('.center');
    const stem = flower.querySelector('.stem');

    // Delay each flower a bit
    const baseDelay = index * 2000;

    // Animate stem
    stem.animate([
      { transform: 'scaleY(0)', opacity: 0 },
      { transform: 'scaleY(1)', opacity: 1 }
    ], {
      duration: 1000,
      delay: baseDelay,
      fill: 'forwards'
    });

    // Animate petals
    petals.forEach((petal, i) => {
      petal.animate([
        { transform: 'scale(0)', opacity: 0 },
        { transform: 'scale(1)', opacity: 1 }
      ], {
        duration: 800,
        delay: baseDelay + 1000 + i * 300,
        fill: 'forwards'
      });
    });

    // Animate center
    center.animate([
      { transform: 'scale(0)', opacity: 0 },
      { transform: 'scale(1)', opacity: 1 }
    ], {
      duration: 800,
      delay: baseDelay + 1000 + petals.length * 300,
      fill: 'forwards'
    });
  });

  // Create bokeh
  createBokeh();
}

function createBokeh() {
  const bokehContainer = document.getElementById('bokeh');
  const colors = ['#ffb6c1', '#ffc0cb', '#ff69b4', '#ff1493', '#db7093'];

  for (let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.classList.add('bokeh-flower');
    const size = Math.random() * 40 + 20; // 20px to 60px
    flower.style.width = `${size}px`;
    flower.style.height = `${size}px`;
    flower.style.left = `${Math.random() * 100}%`;
    flower.style.top = `${Math.random() * 100 + 200}px`; // start below screen
    flower.style.background = colors[Math.floor(Math.random() * colors.length)];
    flower.style.animationDuration = `${8 + Math.random() * 5}s`;
    bokehContainer.appendChild(flower);
  }
}
