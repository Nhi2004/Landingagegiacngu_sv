for (let i = 0; i < 10; i++) {
    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.style.top = `${Math.random() * 500}px`;
    cloud.style.animationDelay = `${Math.random() * 60}s`;
    document.body.appendChild(cloud);
  }