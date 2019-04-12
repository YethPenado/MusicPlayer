const SingletonSongs = (function () {
  let instance = null;
  return class Songs {
    constructor() {
      this.playlist = playList;
      this.songs = songs;
      return instance ? instance : instance = this;
    }
  }
})();

let singletonSongs = new SingletonSongs();
