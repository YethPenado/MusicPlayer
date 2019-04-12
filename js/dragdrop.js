(function createDrop () {
  let dragged;
  
  document.addEventListener('dragstart', (event) => {
    dragged = event.target;
  }, false);
  
  document.addEventListener('dragover', (event) => {
    event.preventDefault();
  }, false);
  
  document.addEventListener('drop', (event) => {
    if (event.target.className === 'playlist content'
        || event.target.className === 'songs content') {
      event.target.appendChild(dragged);
      let pl = singletonSongs.playlist;
      let s = singletonSongs.songs;
      let i = dragged.getAttribute('data-index');
  
      if(event.target.className === 'playlist content') {
        dragArray(pl, s, i);
      } else {
        dragArray(s, pl, i);
      }
  
      let uls = event.target.parentElement.parentElement.children;
      changeIndex(uls[1].children[0]);
      changeIndex(uls[2].children[0]);
      audio.src = singletonSongs.songs[indexSong].mp3;
      changeContent(indexSong);
    }
  }, false);
  
  audio.addEventListener('ended', () => {
    indexSong += 1;
    if(indexSong > singletonSongs.songs.length - 1) indexSong = 0;
    audio.src = singletonSongs.songs[indexSong].mp3;
    changeContent(indexSong);
    audio.play();
    createDrop();
  });
}());