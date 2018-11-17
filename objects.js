var playlist = {name: 'song'}

function updatePlaylist(playlistObj,artistName,songTitle) {
  playlistObj.artistName = songTitle;
  return playstObj;
}

function removeFromPlaylist(playlistObj,artistName) {
  delete playlistObj.artistName;
  return playstObj;
}