// MAIN SECTION OBJECT: WRAPPER
function msoWrapper(i, projName, projType, projCreationDate, projPathToData) {
  this.projName = projName,
    this.i = 'mso-' + i,
    this.projType = projType,

    this.includesContainerFunction = function() {
      if (this.projType === 'gallery' || this.projType === 'video') {
        return true;
      } else {
        return false;
      }
    }

  this.projCreationDate = projCreationDate, //YYYY-MM-DD
    this.projPathToData = projPathToData,
    this.projAppendHTML = '<section class="main-segment size-l" data-includescontainer="' + this.includesContainerFunction() + '" data-role="main-segment" data-state="collapsed" data-projid="' + this.i + '" data-creationdate=' + this.projCreationDate + ' data-purpose=' + this.projType + ' data-projname=' + this.projName + '></section>',

    this.segmentAfterHTML = '<hr class="segment-spacing-vertical"/>',
    this.projAppendHTML = this.projAppendHTML += this.segmentAfterHTML;
  this.render = function() {
      document.querySelector('main').innerHTML += this.projAppendHTML;
    },
    this.render();
}
