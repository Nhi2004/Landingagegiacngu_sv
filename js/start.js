 // Generate random stars
 for (let i = 0; i < 50; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    document.body.appendChild(star);
  }

  // Move stars to new random positions every 3 seconds
  setInterval(() => {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
      star.style.left = Math.random() * 95 + '%';
      star.style.top = Math.random() * 95 + '%';
    });
  }, 5000);