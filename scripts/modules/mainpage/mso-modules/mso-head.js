// head ------------------------------>
function msoHead(i, projHeadTitle, projHeadDesc, projHeadTagDisplay, projHeadTagHref) {
  this.i = 'mso-' + i,

    this.projHeadTitle = projHeadTitle,
    this.projHeadDesc = projHeadDesc,
    this.projHeadTagDisplay = projHeadTagDisplay,
    this.projHeadTagHref = projHeadTagHref,


    this.projAppendHTML = '<div data-role="ms-head"><div class="ms-head-button-collapse"><hr><hr></div><div class="ms-head-title"><h3>' + this.projHeadTitle + '</h3></div><div class="ms-head-desc"><h4>' + this.projHeadDesc + '</h4></div><div class="ms-head-tag"><h4><a href="' + this.projHeadTagHref + '"> ' + this.projHeadTagDisplay + ' </a></h4></div></div>',
    this.render = function() {
      document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
    },
    this.render();
}
