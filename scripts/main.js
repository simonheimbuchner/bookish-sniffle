// mainpage contents
requirejs(['modules/mainpage/mainpage-contents'], function() {
}); //requirejs ending brackets

var resizeId;
window.addEventListener('resize', function() {


  document.body.className = 'notransition';
  clearTimeout(resizeId);
  resizeId = setTimeout(function() { // resize success event
    document.body.className = '';
  }, 500);
})
