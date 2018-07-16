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
    this.projAppendHTML = '<section class="main-segment" data-includescontainer="' + this.includesContainerFunction() + '" data-role="main-segment" data-state="collapsed" data-projid="' + this.i + '" data-creationdate=' + this.projCreationDate + ' data-purpose=' + this.projType + ' data-projname=' + this.projName + '><div class="ms-txt">'+ this.projName +'</div><div class="ms-hr"></section>',

    this.segmentAfterHTML = '',
    this.projAppendHTML = this.projAppendHTML += this.segmentAfterHTML;
  this.render = function() {
      document.querySelector('main').innerHTML += this.projAppendHTML;
    },
    this.render();
}
