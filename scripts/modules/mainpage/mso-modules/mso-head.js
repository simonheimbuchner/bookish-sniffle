// head ------------------------------>
function msoHead(i, projHeadTitle, projHeadDesc, projHeadTagDisplay, projHeadTagHref) {
  this.i = 'mso-' + i,

    this.projHeadTitle = projHeadTitle,
    this.projHeadDesc = projHeadDesc,
    this.projHeadTagDisplay = projHeadTagDisplay,
    this.projHeadTagHref = projHeadTagHref,


    this.projAppendHTML = '<div class="head"><a href="' + projHeadTagHref + '">' + projHeadTagDisplay + '</a></div>',
    this.render = function() {
      document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
    },
    this.render();
}
