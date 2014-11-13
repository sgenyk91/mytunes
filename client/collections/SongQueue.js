// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('removeSong', function(song) {
      this.remove(song);
    });



    // this.on('enqueue', function(song) {
    //   console.log('adddddd');
    //   this.add(song);
    // });
  },
  dequeue: function() {
    var temp = this.at(0);
    this.remove(temp);
    return temp;
  }
});
