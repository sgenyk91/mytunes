// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults : {
    songCount : 0
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function() {
    console.log('queue happened');
    this.trigger('enqueue', this);
  },
  removeSong: function() {
    console.log('remove happen');
    this.trigger('removeSong', this);
  },
  increment: function() {
    this.set('songCount', this.get('songCount') + 1);
  }
});
