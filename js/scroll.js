document.addEventListener('scroll', function () {
    var tags = document.querySelectorAll('.course');
  
    tags.forEach(function (tag) {
      if (isElementInViewport(tag)) {
        tag.classList.add('active');
      }
    });
  });
  
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }