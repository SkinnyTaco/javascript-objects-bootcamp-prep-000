var playlist = { 'Will Smith' : 'Big Willie Style', 'The Killers' : 'Mr. Brightside' };

function updatePlaylist(obj, artistName, song) {
  var newPlaylist = Object.assign({}, obj, {[artistName] : song});
  return newPlaylist;
}

function removeFromPlaylist(obj, artistName) {
  var newPlaylist = Object.assign({}, obj);
  delete newPlaylist[artistName];
  return newPlaylist;
}

