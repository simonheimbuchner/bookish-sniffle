requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'scripts',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        domReady: 'lib/domReady',
    },
    urlArgs: "bust=v2"

});

// mainpage contents
requirejs(['domReady', 'modules/buildModules', 'https://unpkg.com/jarallax@1.10/dist/jarallax.min.js'], function(domReady) { // link: video js, framework for video
  domReady(function() {
    document.addEventListener("touchstart", function(){}, true); // ios touch fix
    // event listeners
    requirejs(['lib/global-eventlisteners']);


    //start of doc












  })
});
