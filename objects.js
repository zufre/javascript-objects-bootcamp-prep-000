var playlist = {'der' = 'fre'};

function updatePlayList(playlist, artist, song) {
  playlist[artist] = song;
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist];
  return playlist;
}
