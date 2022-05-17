const { Playlist } = require("../models");

const playlistdata = [
  {
    id: 1,
    playlist_name: "Spotify's Most Played All Time",
    author: "Ray Fontaine",
    embed_playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2YRe7HRKNRvXdJBp9nXFza?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  },
  {
    id: 2,
    playlist_name: "Top 2022 Best of 2022: POP & DANCE HITS 2022",
    author: "Indiemono",
    embed_playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/06S64oWn7uGnfGrwjh5IWb?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  },
  {
    id: 3,
    playlist_name: "Feel-Good Indie Rock",
    author: "Spotify",
    embed_playlist: `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/37i9dQZF1DX2sUQwD7tbmL?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`,
  },
];

const seedPlaylists = () => Comment.bulkCreate(playlistdata);

module.exports = seedComments;
