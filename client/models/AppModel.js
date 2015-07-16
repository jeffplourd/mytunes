// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the function (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    params.library.on('enqueue', function(song){
      console.log('setting variable songQueue to: ',song,' in models/AppModel.js, on library.enqueue event')
      // adding 'song' to songQueue collection

      console.log(song);
      var songQueue = this.get('songQueue');
      songQueue.add(song);

      if (this.get('currentSong').attributes.artist === 'no artist') {
        this.set('currentSong', song);
      }; 

    }, this);

    params.library.on('dequeue', function(song){
      var songQueue = this.get('songQueue');
      console.log(song);
      songQueue.remove(song);
      songQueue.save();
      var songQueue = this.get('songQueue');
      console.log(songQueue);
    
    }, this);

    params.library.on('play', function(song){
      console.log('setting: ',song, ' to currentSong, models/AppModel.js')
      this.set('currentSong', song);
    }, this);

    //listen for the 'ended' event
    params.library.on('ended', function() {
      console.log('this thing ended');

      var songQueue = this.get('songQueue');
      var newSong = songQueue.shift();
      this.unset('currentSong');
      this.set('currentSong', newSong);

    }, this);

    this.get('currentSong').on('change', function() {
      console.log('this changed the song');
    })

  }

  // events: {
  //   'ended #player' : function(e){
  //     console.log('event handler ended')
  //   } 
  // }

});
