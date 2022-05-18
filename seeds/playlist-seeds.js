const { Playlist } = require("../models");

const playlistdata = [
  {
    playlist_name: "Spotify's Most Played All Time",
    author: "Ray Fontaine",
    embed_playlist: "https://open.spotify.com/embed/playlist/2YRe7HRKNRvXdJBp9nXFza?utm_source=generator",
  },
  {
    playlist_name: "Top 2022 Best of 2022: POP & DANCE HITS 2022",
    author: "Indiemono",
    embed_playlist: "https://open.spotify.com/embed/playlist/06S64oWn7uGnfGrwjh5IWb?utm_source=generator",
  },
  {
    playlist_name: "Feel-Good Indie Rock",
    author: "Spotify",
    embed_playlist: "https://open.spotify.com/embed/playlist/37i9dQZF1DX2sUQwD7tbmL?utm_source=generator",
  },
];

const seedPlaylists = () => Comment.bulkCreate(playlistdata);

module.exports = seedComments;
