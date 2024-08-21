function loadHeader() {
    const width = window.innerWidth;
    let headerFile = '';
  
    if (width <= 1024) {
      headerFile = 'mobile.html';
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'mobile.css';
      document.head.appendChild(link);
    } else {
      headerFile = 'desktop.html';
    }
  
    fetch(headerFile)
      .then(response => response.text())
      .then(html => {
        document.getElementById('header').innerHTML = html;
      });
  }
  
  function loadContent() {
    const width = window.innerWidth;
    let contentFile = '';
  
    if (width <= 430) {
      contentFile = 'mobilecontent.html';
    } else {
      contentFile = 'desktop.html';
    }
  
    fetch(contentFile)
      .then(response => response.text())
      .then(html => {
        document.getElementById('contenttext').innerHTML = html;
      });
  }
  
  function loadContentTwo() {
    const width = window.innerWidth;
    let contentFile = '';
  
    if (width <= 430) {
      contentFile = 'mobilecontent2.html';
    } else {
      contentFile = 'desktop.html';
    }
  
    fetch(contentFile)
      .then(response => response.text())
      .then(html => {
        document.getElementById('contenttext2').innerHTML = html;
      });
  }

  window.addEventListener('resize', () => {
    loadHeader();
    loadContent();
    loadContentTwo();
    
  });
  
  loadHeader();
  loadContent();
  loadContentTwo();
  
  
  function loadStyles() {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'styles.css';
    document.head.appendChild(link);
  }
  
  window.addEventListener('load', loadStyles);