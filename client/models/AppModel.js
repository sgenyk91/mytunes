// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    var songQueue = new SongQueue(params.songQueue) || new SongQueue();
    this.set('songQueue', songQueue);
    this.set('currentSong', this.get('songQueue').dequeue() || null);
    console.log(this.get('currentSong'));
    console.log(this.get('songQueue').length);

    // this.get('songQueue').trigger('queue');

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);
    params.library.on('enqueue', function(song){
      if (this.checkIfSongInQueue(song)) {
        this.add(song);
     }

    }, this.get('songQueue'));
    // this.get('songQueue').on('add', function(song) {
    //   console.log('hi');
    // });
    // this.get('songQueue').on('remove', function(song){
    //   console.log('removed song');
    //   this.remove(song);
    // }, this.get('songQueue'));
    // var testQueue = this.get('songQueue');
    // testQueue.on('queue', function(song){
    //   console.log('songQueue happened');
    //   this.add(song);
    // }, this.get('songQueue'));
  }

});
