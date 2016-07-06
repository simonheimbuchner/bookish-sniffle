define(['lib/getJSONFromFile',
          'modules/mainpage/mso-init-functions',
          'modules/mainpage/mso-modules/mso-wrapper',
          'modules/mainpage/mso-modules/mso-head',
          'modules/mainpage/mso-modules/mso-thumbnail',
          'modules/mainpage/mso-modules/mso-content-container',
          'modules/mainpage/mso-modules/mso-content-gallery',
          'modules/mainpage/mso-modules/mso-content-video',
          ], function() {


  // JSON call mainpage
  getJSONFromFile('resources/json/pagecontents.json', function(output) {

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
