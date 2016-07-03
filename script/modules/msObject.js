// MAIN SECTION OBJECT: WRAPPER
function msoWrapper(i, projName, projType, projCreationDate, projPathToData) {
  this.projName = projName,
  this.i = 'mso-' + i,
  this.projType = projType,
  this.projCreationDate = projCreationDate, //YYYY-MM-DD
  this.projPathToData = projPathToData,
  this.projAppendHTML = '<section class="ms-object" data-projid="' + this.i + '" data-creationdate=' + this.projCreationDate + ' data-purpose=' + this.projType + ' data-projname=' + this.projName + '></section>',
  this.render = function() {
    document.getElementById('ms-wrapper').innerHTML += this.projAppendHTML;
  },
  this.render();
  }





// thumbnail ------------------------------>
      function msoThumbnail(i, defaultProjPath, defaultThumbPath, projType, projCreationDate, projThumbnailImages) {
        this.i = 'mso-' + i,
        this.projType = projType,
        this.defaultProjPath = defaultProjPath,
        this.defaultThumbPath = defaultThumbPath,
        this.projCreationDate = projCreationDate,
        this.projThumbnailImages = projThumbnailImages,

        this.projThumbnailImgSrcRight = this.defaultProjPath + '/' + this.projCreationDate + '/' + this.defaultThumbPath + '/' + this.projThumbnailImages[1],
        this.projThumbnailImgSrcLeft = this.defaultProjPath + '/' + this.projCreationDate + '/' + this.defaultThumbPath + '/' + this.projThumbnailImages[0],


        this.projAppendHTML = '<figure class="size-m ms-gallery-thumb"><div class="ms-img ms-gt-right" style="background-image: url(' + this.projThumbnailImgSrcRight + ')"></div><div class="ms-img ms-gt-left" style="background-image:url(' + this.projThumbnailImgSrcLeft + ')"></div><figcaption><h4>' + this.projType + '</h4></figcaption></figure>',
        this.render = function() {
          document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
        },
        this.render();
      }




// head ------------------------------>
      function msoHead(i, projHeadTitle, projHeadDesc, projHeadTagDisplay, projHeadTagHref) {
        this.i = 'mso-' + i,

        this.projHeadTitle = projHeadTitle,
        this.projHeadDesc = projHeadDesc,
        this.projHeadTagDisplay = projHeadTagDisplay,
        this.projHeadTagHref = projHeadTagHref,


        this.projAppendHTML = '<div class="head">' + this.projHeadTitle + '<a href="' + projHeadTagHref + '">' + projHeadTagDisplay + '</a></div>',
        this.render = function() {
          document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
        },
        this.render();
      }





// content container ------------------------------>
      function msoContentContainer(i) {
        this.i = 'mso-' + i,


        this.projAppendHTML = '<div class="ms-content-container"></div>',
        this.render = function() {
          document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
        },
        this.render();
      }




// content gallery ------------------------------>
            function msoContentGallery(i, defaultProjPath, projPathToData, projCreationDate, projImages) {
              this.i = 'mso-' + i,
              this.defaultProjPath = defaultProjPath,
              this.projCreationDate = projCreationDate,
              this.projImages = projImages,
              this.projGenerateImagesHTML = function() {
                var array = this.projImages,
                  output = "";
                for (var i in array) {
                  output += '<img src="'+ this.defaultProjPath + '/' + this.projCreationDate + '/' + array[i] + '">';
                }
                var output = '<div class="ms-gallery-container">' + output + '</div>';
                return output;
              },
              this.projGenerateImageControlsHTML = function() {
                var array = this.projImages,
                  output = "";
                for (var i in array) {
                  output += '<hr class="ms-gallery-control-point"/>';
                }
                var output = '<div class="ms-gallery-controls"><div class="ms-gallery-controls-arrowleft"></div><div class="ms-gallery-control-point-wrapper">' + output + '</div><div class="ms-gallery-controls-arrowright"></div></div>';
                return output;
              }
              this.render = function() {
                document.querySelector('[data-projid="' + this.i + '"] .ms-content-container').innerHTML += this.projGenerateImagesHTML() + this.projGenerateImageControlsHTML();
              },
              this.render();
            }
