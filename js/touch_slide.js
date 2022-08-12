$(function () {
    let mark = new Array()
    var myOffcanvas = document.getElementById('offcanvasExample')
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas)
  document.addEventListener("touchstart", (e) => {
    mark = new Array()
  });
  document.addEventListener("touchend", (e) => {
    direction()
  });
  document.addEventListener("touchmove", handleMove, false);
  function handleMove(evt) {
    var touches = evt.changedTouches;
    for (var i = 0; i < touches.length; i++) {
      var touch = touches[i];
      mark.push([touch.pageX,touch.pageY])
    }
  }
  let vib = function() {
    if(navigator.vibrate) navigator.vibrate(50);
  } 
  let direction = function() {
      if(!mark[5]) return;
      let x = (mark[5][0] - mark[0][0])
      let y = (mark[5][1] - mark[0][1])
      //console.log(x,y)
      if(y > 7) return;
      if(y < 0 && y < -8) return;
      if(x > 20) {
        bsOffcanvas.show()
        vib()
      }else if(x < 0 && x < -8) {
        bsOffcanvas.hide()
        vib()
      }
  }
});
