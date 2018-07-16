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

function toggleState(elem, one, two) {
  elem.setAttribute('data-state', elem.getAttribute('data-state') === one ? two : one);
}







createClickEvent('main-segment', "main", function(target) {
  toggleState(target, 'collapsed', 'expanded');
});


if (thisProperty.numKeys == 0) {
  t = 0;
} else {
  n = 0;
  if (marker.numKeys > 0) {
    n = marker.nearestKey(time).index;
    if (marker.key(n).time > time) {
      n--;
    }
  }

  if (n == 0) {
    t = 0;
  } else {
    m = marker.key(n);
    t = time - m.time;
  }
}

valueAtTime(t)



if (thisProperty.numkeys == 0) {t = 0;}  n = 0;    if (marker.numKeys > 0) {      n = marker.nearestKey(time).index;      if (marker.key(n).time > time) {n--;}    }  if (n == 0) {t = 0;}  else {    m = marker.key(n);    t = time - m.time;  }}valueAtTime(t)
