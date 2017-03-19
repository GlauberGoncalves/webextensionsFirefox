var relatedVideos, video, div;

function checkingDOM() {
  relatedVideos = document.getElementsByClassName('watch-sidebar');
  content = document.getElementsByClassName('watch-main-col ');
  teatro = document.getElementById('page');

  if (relatedVideos != null || relatedVideos != undefined) {
    console.log('[Achei]');
    relatedVideos[0].parentNode.removeChild(relatedVideos[0]);
    teatro.classList.add('watch-wide');
    teatro.classList.add('watch-stage-mode');
    content[0].style.float = 'inherit';
    content[0].style.position = 'relative';
    content[0].style.marginLeft = 'auto';
    content[0].style.marginRight = 'auto';
  }
  else {
    console.log("[Não achei]");
  }
}

timeInterval = setInterval(function () {
  checkingDOM();
}, 1000);
