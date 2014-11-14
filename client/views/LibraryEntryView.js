// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="play">(<%= artist %>)</td><td class="play"><%= title %></td><td class="counter"><%= songCount %></td><td class="Queue"> Q </td>'),

  events: {
    'click .play': function() {
      this.model.play();
    },
    'click .Queue': function() {
      this.model.enqueue();
    }
  },
  // delegateEvents: function() {
  //   this.on({'click .Queue' : function() {
  //     console.log('clicked');
  //     this.model.enqueue();
  //   }});
  // },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
    // this.delegateEvents();
  }

});
