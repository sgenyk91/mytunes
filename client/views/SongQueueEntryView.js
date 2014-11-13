// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
 tagName: 'tr',

  template: _.template('<td class="play">(<%= artist %>)</td><td class="play"><%= title %></td><td class="removeSong">X</td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .removeSong': function() {
      this.model.removeSong();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
