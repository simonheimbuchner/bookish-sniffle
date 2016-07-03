// MAIN SECTION OBJECT: WRAPPER
function msoWrapper(i, projName, projType, projCreationDate, projPathToData) {
  this.projName = projName,
    this.i = 'mso-' + i,
    this.projType = projType,
    this.projCreationDate = projCreationDate, //YYYY-MM-DD
    this.projPathToData = projPathToData,

    this.initDataState = function() {
      document.querySelector('[data-role=main-segment]').setAttribute('data-state', 'collapsed');
    }

    this.projAppendHTML = '<section class="size-l" data-role="main-segment" data-projid="' + this.i + '" data-creationdate=' + this.projCreationDate + ' data-purpose=' + this.projType + ' data-projname=' + this.projName + '></section>',
    this.render = function() {
      document.querySelector('main').innerHTML += this.projAppendHTML;
    },
    this.render();
    this.initDataState();

}
