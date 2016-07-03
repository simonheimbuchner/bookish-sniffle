requirejs(['./modules/msObject', './vendor/getJSONFromFile'], function() {


  // JSON call
  getJSONFromFile('resources/json/msObjects_neu.json', function(output) {

    // PREP ---------------------------------------------------------------------------------------------------------

    // convert plain text to javascript object
    var output = JSON.parse(output);

    // prep JSON Objects
    // default properties (e.g. default project path)
    var defaultProps = output.defaultProps;
    // all object contents
    var mainSectionObjects = output.mainSectionObjects;

    // prep array
    var sortedJSONArr = [];
    // loop 1: through mso types (gallery, image, video, ...), (mso = mainSectionObjects)
    for (mso_type_i in mainSectionObjects) {
      // loop 2: loop through each object within mso types
      for (mso_contents_i in mainSectionObjects[mso_type_i]) {
        // push to sortetJSONArr
        sortedJSONArr.push(mainSectionObjects[mso_type_i][mso_contents_i]);
      }
    }
    // sort sortedJSONArr by date, descending
    sortedJSONArr.sort(function(a, b) {
      return new Date(b.projCreationDate) - new Date(a.projCreationDate);
    });


    // RENDER MODULES ------------------------------------------------------------------------------------------------

    for (i in sortedJSONArr) {
      var thisobj = sortedJSONArr[i];
      // render galleries
      if (thisobj.projType == 'gallery') {
        initMsoGallery(i, defaultProps.defaultProjPath, defaultProps.defaultThumbPath, thisobj.projType, thisobj.projName, thisobj.projCreationDate, thisobj.projPathToData, thisobj.projHeadTitle, thisobj.projHeadTitle, thisobj.projHeadDesc, thisobj.projHeadTagDisplay, thisobj.projHeadTagHref, thisobj.projThumbnailImages, thisobj.projImages);
      }

    }

  });
});



function initMsoGallery(i, defaultProjPath, defaultThumbPath, projType, projName, projCreationDate, projPathToData, projHeadTitle, projHeadTitle, projHeadDesc, projHeadTagDisplay, projHeadTagHref, projThumbnailImages, projImages) {
  var mso_gallery_i = i + 'gallery';
  mso_gallery_i = new msoWrapper(i, projName, projType, projCreationDate, projPathToData);
  mso_gallery_i = new msoHead(i, projHeadTitle, projHeadDesc, projHeadTagDisplay, projHeadTagHref);
  mso_gallery_i = new msoThumbnail(i, defaultProjPath, defaultThumbPath, projType, projCreationDate, projThumbnailImages);
  mso_gallery_i = new msoContentContainer(i);
  mso_gallery_i = new msoContentGallery(i, defaultProjPath, projPathToData, projCreationDate, projImages);
}

function initMsoImage() {

}
