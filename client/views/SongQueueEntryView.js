// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // instead of just playing the song, we should add the current song to the SongQueue collection
      // The SongQueueView will listen on change events (add) on the SongQueue model and play the first song (if nothing playing / queue is empty)
      console.log('event: clicked on',this, 'SongQueueEntryView');
      // this.model.play();
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
