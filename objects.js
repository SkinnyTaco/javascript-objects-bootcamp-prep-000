var playlist = { 'Will Smith' : 'Big Willie Style', 'The Killers' : 'Mr. Brightside' };

function updatePlaylist(obj, artistName, song) {
  obj[artistName] = song;
  return obj;
}

function removeFromPlaylist(obj, artistName) {
  var newPlaylist = Object.assign({}, obj);
  delete newPlaylist[artistName];
  return newPlaylist;
}

