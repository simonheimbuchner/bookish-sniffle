define(['lib/getJSONFromFile',
          'modules/mod-content',
          'modules/mod-header',
          'modules/mod-lightbox',


          ], function() {
/*           'modules/lightbox/lightbox-wrapper',
          'modules/lightbox/lightbox-gallery', */

  // JSON call mainpage
  getJSONFromFile('resources/json/pagecontents.json', function(output) {
    var output = JSON.parse(output),
      defaultProps = output.defaultProps,
      headerProps = output.headerProps,
      pageContents = output.pageContents;

    // header ---------------------------------------------------------------------------------------------------------
          new headerObj(defaultProps.defaultHeaderImagePath, headerProps.headerSiteImgName, headerProps.headerSiteName, headerProps.headerBGImage, headerProps.headerContactIcon, headerProps.headerMyEmailAdress);


    // mainpage ---------------------------------------------------------------------------------------------------------
          // prep array
          var contentArr = [];
          // loop 1: through mso types (gallery, image, video, ...), (mso = pageContents)
          for (i in pageContents) {
              contentArr.push(pageContents[i]);
          }
          // sort contentArr by date, descending
          contentArr.sort(function(a, b) {
            return b.projID - a.projID;
          });
          // create objects
          for (i in contentArr) {
            var thisobj = contentArr[i];
            // render galleries
            if (thisobj.projType == 'gallery') {
              new msoWrapper(thisobj.projID, thisobj.projHeadTitle, thisobj.projType, thisobj.projFolder, thisobj.projPathToData),
              new msoThumbnail(thisobj.projID, defaultProps.defaultProjPath, defaultProps.defaultThumbPath, thisobj.projType, thisobj.projFolder, thisobj.projThumbnailImages);
            }
          }

  });


});
