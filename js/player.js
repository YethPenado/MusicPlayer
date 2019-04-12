const backward = document.getElementById('backward');
const forward = document.getElementById('forward');
const songName = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const songAlbum = document.getElementById('song-album');
const songCover = document.getElementById('song-cover');

backward.addEventListener('click', () => {
  indexSong--;
  if(indexSong < 0) indexSong = singletonSongs.songs.length - 1;
  audio.src = singletonSongs.songs[indexSong].mp3;
  audio.play();
  changeContent(indexSong);
});

forward.addEventListener('click', () => {
  indexSong++;
  if(indexSong > singletonSongs.songs.length - 1) indexSong = 0;
  audio.src = singletonSongs.songs[indexSong].mp3;
  audio.play();
  changeContent(indexSong);
});
