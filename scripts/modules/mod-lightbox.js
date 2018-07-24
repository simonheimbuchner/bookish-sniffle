// content gallery ------------------------------>
function lightboxContents(projid, defaultProjPath, defaultBackgroundPath, projHeadTitle, projHeadDesc, projHeadTagHref, projBackgroundColor, projBackgrondImage, projFolder, projContent) {
    index = projid,
    projGenerateImagesHTML = function() {
      output = "";
      for(k in projContent) {
        if(projContent[k].type == "image") {
          output += '<img src="' + defaultProjPath + '/' + projFolder + '/' + projContent[k].src + '" alt="'+ projContent[k].alt +'">';
        }
        if (projContent[k].type == "text") {
          output += '<p data-style="'+ projContent[k].style +'" style="padding-top:' + projContent[k].paddings[0] +'px; padding-bottom:' + projContent[k].paddings[1] +'px" >'+ projContent[k].text +'</p>';
        }
        if (projContent[k].type == "video") {
          // standard video
          output += '<video class="video-js" controls preload="auto" width="1280" height="720"'+
                    '  poster data-setup="{}">'+
                    '    <source src="'+ defaultProjPath + '/' + projFolder + '/' + projContent[k].src +'" type=\'video/mp4\'>'+
                    '    <p class="vjs-no-js">'+
                    '      To view this video please enable JavaScript, and consider upgrading to a web browser that'+
                    '      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>'+
                    '    </p>'+
                    '  </video>';
        }
        if (projContent[k].type == "gif") {
          // standard video
          output += '<video class="video-js" loop muted autoplay preload="auto" width="1280" height="720"'+
                    '  poster data-setup="{}">'+
                    '    <source src="'+ defaultProjPath + '/' + projFolder + '/' + projContent[k].src +'" type=\'video/mp4\'>'+
                    '    <p class="vjs-no-js">'+
                    '      To view this video please enable JavaScript, and consider upgrading to a web browser that'+
                    '      <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a>'+
                    '    </p>'+
                    '  </video>';
        }
      }
      return output;
    }
    projGenerateLightboxHeadHTML = '<h2>'+ projHeadTitle +'</h2><p>'+ projHeadDesc +'</p>';
    projGenerateLightboxBackgroundHTML = '';
  render = function() {
      lightbox = document.querySelector('lightbox');
      document.getElementById('lightbox-header').innerHTML = projGenerateLightboxHeadHTML;
      document.getElementById('lightbox-contents').innerHTML = projGenerateImagesHTML();
        lightbox.style.backgroundColor = "";
        lightbox.style.backgroundColor = projBackgroundColor;
        lightbox.style.backgroundImage = "";
        lightbox.style.backgroundImage = "url(" + defaultProjPath + '/' + projFolder + '/' + defaultBackgroundPath + '/' + projBackgrondImage + ")";


      }

    render();
}
