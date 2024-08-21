// Lấy tất cả các thẻ <img> có class
var imgElements = document.querySelectorAll('img[class]');

// Loại bỏ thuộc tính class của các thẻ <img>
imgElements.forEach(function(img) {
  img.removeAttribute('class');
});