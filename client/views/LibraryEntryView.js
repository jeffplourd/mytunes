// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      // instead of just playing the song, we should add the current song to the SongQueue collection
      // The SongQueueView will listen on change events (add) on the SongQueue model and play the first song (if nothing playing / queue is empty)
      console.log('event: clicked on',this, 'LibraryEntryView');
      // this.model.play();
      this.model.enqueue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
