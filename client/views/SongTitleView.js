var SongTitleView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
  setTitle: function(song) {
    this.model = song;
    this.render();
  },
  render: function() {
    this.$el.html(this.model.get('title'));
  }



});
