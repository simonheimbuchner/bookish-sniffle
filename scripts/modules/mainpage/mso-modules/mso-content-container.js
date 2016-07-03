// content container ------------------------------>
function msoContentContainer(i) {
  this.i = 'mso-' + i,
  
  this.projAppendHTML = '<div class="size-l ms-content-container"></div>',
    this.render = function() {
      document.querySelector('[data-projid="' + this.i + '"]').innerHTML += this.projAppendHTML;
    },
    this.render();
}
