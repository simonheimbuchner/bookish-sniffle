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
        output += '<img src="' + this.defaultProjPath + '/' + this.projCreationDate + '/' + array[i] + '">';
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
