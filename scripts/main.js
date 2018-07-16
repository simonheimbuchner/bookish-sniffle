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
        jarralax: 'lib/jarallax.min'
    },
    urlArgs: "bust=v2"

});

// mainpage contents
requirejs(['domReady', 'modules/buildModules', 'jarralax'], function(domReady) {
  domReady(function() {
    // event listeners
    requirejs(['lib/global-eventlisteners']);

    //start of doc












  })
});
