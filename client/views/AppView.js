// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    var context = this;
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model){
      this.$el.prepend('<div>' + model.get('currentSong').get('title') +'</div>');
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    this.playerView.on('ended', function() {
      var temp = context.model.get('songQueue').dequeue();
      context.model.get('currentSong').increment();
      context.model.set('currentSong', temp);
      this.$el.append(context.libraryView.render());
      context.render();
    });

    this.model.get('songQueue').on('add remove', function(song) {
      console.log('added');
      this.$el.append(this.songQueueView.render());
    }, this);
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el,
      this.songQueueView.$el
    ]);
  }

});
