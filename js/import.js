const inputs = document.querySelectorAll('.import-form input');
const save = document.getElementById('save');
const reset = document.getElementById('reset');

function resetAll() {
  for(let i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}

function saveAll(e) {
  e.preventDefault();
  const newObject = {};
  for(let i = 0; i < inputs.length; i++) {
    newObject[inputs[i].id] = inputs[i].value;
  }
  singletonSongs.playlist.push(newObject);
  getPlaylist(singletonSongs.playlist, containers[0]);
}

reset.addEventListener('click', resetAll);
save.addEventListener('click', saveAll);
