const containers = document.getElementsByClassName('content');

function getPlaylist (array, parent){
  parent.innerHTML = '';
  array.forEach((obj, i) => {
    let li = document.createElement('li');
    li.innerText = obj.name;
    li.setAttribute('draggable', 'true');
    li.setAttribute('data-index', i);
    li.setAttribute('ondragstart', 'event.dataTransfer.setData("text/plain",null)');

    for(let key in obj) li.setAttribute(`data-${key}`, obj[key]);
    parent.appendChild(li);
  });
}

function dragArray(arrayRemove, arrayActive, index) {
  arrayActive.push(arrayRemove.splice(index, 1)[0]);
}

function changeIndex(ul) {
  let lis = ul.children;
  for(let i = 0; i < lis.length; i += 1) {
    lis[i].setAttribute('data-index', i);
  }
}

function changeContent(i) {
  songName.innerText = singletonSongs.songs[i].name;
  songArtist.innerText = singletonSongs.songs[i].artist;
  songAlbum.innerText = singletonSongs.songs[i].album;
  if(singletonSongs.songs[i].cover){
    songCover.src = singletonSongs.songs[i].cover;
  }else{
    songCover.src = 'img/covers/default.jpg';
  }
}

getPlaylist(playList, containers[0]);
