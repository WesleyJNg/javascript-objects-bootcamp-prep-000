var playlist = {name: 'song'}

function updatePlaylist(playstObj,artistName,songTitle) {
  playstObj.artistName = songTitle;
  return playstObj;
}

function removeFromPlaylist(playstObj,artistName) {
  delete playstObj.artistName;
  return playstObj;
}