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


    this.projAppendHTML = '<figure class="ms-gallery-thumb"><div class="ms-img ms-gt-right" style="background-image: url(' + this.projThumbnailImgSrcRight + ')"></div><div class="ms-img ms-gt-left" style="background-image:url(' + this.projThumbnailImgSrcLeft + ')"></h4></figcaption></figure>',
    this.render = function() {
      document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
    },
    this.render();
}
