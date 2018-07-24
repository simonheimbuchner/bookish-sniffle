// MAIN SECTION OBJECT: WRAPPER

function msoWrapper(projID, projHeadTitle, projType, projFolder, projPathToData) {
    includesContainerFunction = function() {
      if (projType === 'gallery') {
        return true;
      } else {
        return false;
      }
    }
    projAppendHTML = '<section class="main-segment" data-includescontainer="' + includesContainerFunction() + '" data-role="main-segment" data-state="collapsed" data-projid="' + projID + '" data-purpose=' + projType + '><div class="ms-txt">'+ projHeadTitle +'</div><div class="ms-hr"></section>',
    segmentAfterHTML = '',
    projAppendHTML = projAppendHTML += segmentAfterHTML;
    render = function() {
      document.querySelector('main').innerHTML += projAppendHTML;
    },
    render();
}


// thumbnail ------------------------------>
function msoThumbnail(projID, defaultProjPath, defaultThumbPath, projType, projFolder, projThumbnailImages) {
    projThumbnailImgSrcRight = defaultProjPath + '/' + projFolder + '/' + defaultThumbPath + '/' + projThumbnailImages[1],
    projThumbnailImgSrcLeft = defaultProjPath + '/' + projFolder + '/' + defaultThumbPath + '/' + projThumbnailImages[0],

    projAppendHTML = '<figure class="ms-gallery-thumb"><div class="ms-img ms-gt-right" style="background-image: url(' + projThumbnailImgSrcRight + ')"></div><div class="ms-img ms-gt-left" style="background-image:url(' + projThumbnailImgSrcLeft + ')"></h4></figcaption></figure>',
    render = function() {
      document.querySelector('[data-projid="' + projID + '"]').innerHTML += projAppendHTML;
    },
    render();
}
