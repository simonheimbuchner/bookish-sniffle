

// BIND EVENT HANDLER TO MULTIPLE IDENTICAL CLASSES >>>>>>>

function createClickEvent(targetClass, parentId, executedFunction) {
  // get parent of classes and bind eventListener to it
  document.querySelector(parentId).addEventListener("click", function(event) {
    // define clicked element as "target"
    event = event || window.event
    var target = event.target || event.srcElement
      // count upwards from "target", until previously defined parent element is reached
    while (target != document.querySelector(parentId)) {
      // test if element meets defined requirements (class name == ?)
      if (target.classList.contains(targetClass)) {
        // IF RETURNS TRUE... finally execute code on found element
        executedFunction(target)
      }
      // IF RETURNS FALSE... rerun while loop
      target = target.parentNode
    }
  });
}




// TOGGLE DATA-STATE >>>>>>>

function toggleState(elem, dataset, one, two) {
  elem.setAttribute('data-'+dataset, elem.getAttribute('data-'+dataset) === one ? two : one);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function(){
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
  t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

// lightbox on

createClickEvent('main-segment', "main", function(target) {
      var projID = target.dataset.projid;

      // scroll to object
      var targetY = target.getBoundingClientRect().top, targetSizeY = target.offsetHeight;
      var windowY = document.documentElement.scrollTop, windowSizeY = window.innerHeight;
      var desiredScrollTop = (windowSizeY - targetSizeY)/2;
      var scrollTop = windowY-(desiredScrollTop-targetY);
      scrollTo(document.documentElement, scrollTop, 500);

      lightboxEl = document.querySelector('lightbox');
      getJSONFromFile('resources/json/pagecontents.json', function(output) {
          var output = JSON.parse(output), defaultProps = output.defaultProps, pageContents = output.pageContents;
          for(i in pageContents){
                if(pageContents[i].projID == projID) {
                      // lightbox on
                      new lightboxContents(i, defaultProps.defaultProjPath, defaultProps.defaultBackgroundPath, pageContents[i].projHeadTitle, pageContents[i].projHeadDesc, pageContents[i].projHeadTagHref, pageContents[i].projBackgroundColor, pageContents[i].projBackgroundImage, pageContents[i].projFolder, pageContents[i].projContent);
                      toggleState(document.body, 'lightboxstate', 'expanded', 'collapsed');
                      toggleState(target, 'state', 'expanded', 'collapsed');
                      toggleState(lightboxEl, 'lightboxstate', 'expanded', 'collapsed'); // add styles to lightbox, after 2 sec
                      lightboxEl.dataset.projid = projID;

                } else{}
          }
      });
});




// lightbox off
createClickEvent('lightboxBackBtn', "lightbox", function(target) {
    projID = document.querySelector('lightbox').dataset.projid;
    // long way to get the obj with the current projid – .main-segment[data-projid] is not supported on ios
    allMainSegments = document.getElementsByClassName('main-segment');
    for(i=0;i<allMainSegments.length;i++){
      if(allMainSegments[i].dataset.projid == projID)
       toggleState(allMainSegments[i], 'state', 'expanded', 'collapsed');
    }
    toggleState(document.body, 'lightboxstate', 'expanded', 'collapsed');
    toggleState(document.querySelector('lightbox'), 'lightboxstate', 'expanded', 'collapsed')
});

/*
var instance = basicScroll.create({
  elem: document.querySelector('.headercontent'),
  from: 'top-middle',
  to: 'bottom-top',
  direct: true,
  props: {
    '--translateY': {
      from: '0px',
      to: '-300px',
    },
    '--opacity': {
      from: '.99',
      to: '.10',
    }
  }
});

instance.start()
*/

// parralax thumbs
parralaxThumbEls = document.getElementsByClassName('ms-gt-left');
for(i=0;i<parralaxThumbEls.length;i++) {
  var instance = basicScroll.create({
  	elem: parralaxThumbEls[i],
    from: 'top-bottom',
  	to: 'bottom-top',
    direct: true,
  	props: {
  		'--translateY': {
  			from: '200px',
  			to: '-100px',
  		}
  	}
  });

  instance.start()
}
