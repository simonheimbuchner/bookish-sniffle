// header
function headerObj(defaultHeaderImagePath, headerSiteImgName, headerSiteName, headerBGImage, headerContactIcon, headerMyEmailAdress) {
  headerAppendHTML = '<div class="headercontent"><img src=' + defaultHeaderImagePath + "/" + headerSiteImgName + '><h1>'+ headerSiteName +'</h1><a href="mailto:'+ headerMyEmailAdress +'"><div class="contact" style="background-image: url('+ defaultHeaderImagePath + "/" + headerContactIcon +')"></div></a></div>',
  render = function() {
      document.querySelector('header').style = 'background-image:url('+ defaultHeaderImagePath + "/" + headerBGImage +')';
      document.querySelector('header').innerHTML += headerAppendHTML;
  },
  render();
}
