const deleteButton = document.getElementById('delete');
const editButton = document.getElementById('edit');
const editInputs = document.querySelectorAll('.modal-edit input');
const saveEdit = document.getElementById('saveEdit');
const cancelEdit = document.getElementById('cancelEdit');
const liParent = document.querySelector('.panels');
const modal = document.querySelectorAll('[modal]');
const cancelModal = document.getElementById('cancelModal');
const deleteModal = document.getElementById('deleteModal');
const editName = document.getElementById('edit-name');
const editAlbum = document.getElementById('edit-album');
const editArtist = document.getElementById('edit-artist');
const editYear = document.getElementById('edit-year');
const editCover = document.getElementById('edit-cover');
const editmp = document.getElementById('edit-mp3');
const editWav = document.getElementById('edit-wav');
const editOgg = document.getElementById('edit-ogg');

let chosenLi = ['', 0];

function removeItem(parent, child) {
  parent.removeChild(child);
}

liParent.addEventListener('click', (e) => {
  let elem = e.target;
  if(elem.tagName === 'LI') {
    let buttonsDisabled = document.querySelectorAll('button[disabled]');
    for(let i = 0; i < buttonsDisabled.length; i += 1) {
      buttonsDisabled[i].removeAttribute('disabled');
    }
    let index = elem.getAttribute('data-index');
    chosenLi = [elem.parentElement.classList[0], index];
  }
});

function recreateList(container, name) {
  let newArray = [];
  let children = container.children;
  for(let i = 0; i < children.length; i += 1) {
    let obj = {};
    obj['name'] = children[i].getAttribute('data-name');
    obj['artist'] = children[i].getAttribute('data-artist');
    obj['album'] = children[i].getAttribute('data-album');
    obj['year'] = children[i].getAttribute('data-year');
    obj['cover'] = children[i].getAttribute('data-cover');
    obj['mp3'] = children[i].getAttribute('data-mp3');
    obj['wav'] = children[i].getAttribute('data-wav');
    obj['ogg'] = children[i].getAttribute('data-ogg');
    newArray.push(obj);
  }
  if(name === 'playlist') {
    singletonSongs.songs = newArray;
  } else {
    singletonSongs.playlist = newArray;
  }
}

deleteButton.addEventListener('click', () => {
  modal[0].removeAttribute('invisible');
});

cancelModal.addEventListener('click', () => {
  modal[0].setAttribute('invisible', '');
});

deleteModal.addEventListener('click', () => {
  let parent;
  let child;
  modal[0].setAttribute('invisible', '');
  singletonSongs[chosenLi[0]].splice(chosenLi[1], 1);
  parent = document.querySelector(`.${chosenLi[0]}`);
  child = parent.children[chosenLi[1]];
  removeItem(parent, child);
  changeIndex(parent);
  recreateList(containers[0], 'playlist');
  recreateList(containers[1], 'songs');
});

editButton.addEventListener('click', () =>{
  modal[1].removeAttribute('invisible');
});

cancelEdit.addEventListener('click', () =>{
  modal[1].setAttribute('invisible', '');
});

saveEdit.addEventListener('click', () =>{
  modal[1].setAttribute('invisible', '');
  if(chosenLi[0] === 'songs') {
    chosenLi[0] = 'playlist';
  } else {
    chosenLi[0] = 'songs';
  }
  singletonSongs[chosenLi[0]][chosenLi[1]].name = editName.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].artist = editArtist.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].album = editAlbum.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].album = editYear.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].cover = editCover.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].mp3 = editmp.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].wav = editWav.value;
  singletonSongs[chosenLi[0]][chosenLi[1]].ogg = editOgg.value;
  
  let editPlaylist = chosenLi[0];

  if(chosenLi[0] === 'songs') {
    chosenLi[0] = 'playlist';
  } else {
    chosenLi[0] = 'songs';
  }
  getPlaylist(singletonSongs[editPlaylist], document.querySelector(`.${chosenLi[0]}`));
  changeContent(chosenLi[1]);
});
