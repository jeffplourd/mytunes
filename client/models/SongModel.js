// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // defaults
  defaults: {
    url: "/",
    title: "no title",
    artist: "no artist",
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection (and the AppModel?)
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('enqueue, ', this, ' models/SongModel.js');
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('dequeue, ', this, ' models/SongModel.js');
    this.trigger('dequeue', this);
  }

});
