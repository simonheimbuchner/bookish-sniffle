function initMsoGallery(i, defaultProjPath, defaultThumbPath, projType, projName, projCreationDate, projPathToData, projThumbnailImages, projImages) {
  var mso_gallery_i = i + 'gallery';

  mso_gallery_i =
    new msoWrapper(i, projName, projType, projCreationDate, projPathToData),
    new msoThumbnail(i, defaultProjPath, defaultThumbPath, projType, projCreationDate, projThumbnailImages),
    new msoContentContainer(i),
    new msoContentGallery(i, defaultProjPath, projPathToData, projCreationDate, projImages);
}

function initMsoImage() {

}
