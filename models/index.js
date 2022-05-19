const User = require('./User')
const Playlist = require('./Playlist')
const Song = require('./Song')
const Comment = require('./Comments')

//need to double check these to make sure they are right
User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(Song, {
    foreignKey: 'song_id'
});



Song.belongsTo(Playlist, {
    foreignKey: 'playlist_id'
});

Playlist.hasMany(Song, {
    foreignKey: 'playlist_id'
});

module.exports = { User, Playlist, Song, Comment }