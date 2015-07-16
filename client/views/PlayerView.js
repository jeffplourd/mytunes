// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio id="player" controls autoplay />',

  initialize: function() {
    console.log(this.model);
    // why is this not working?
    // this.model.on('change', function(){
    //   console.log('player test');
    //   // this.setSong(model.get('currentSong'));
    // });
    // this.model.on('ended' , function(){
    //   console.log('ended');
    // });

    // this.$el.on('ended', function() {
    //     console.log('ended');
    //     // this.model.trigger('ended');
    //     this.model.ended();
    // });
  },

  events: {
    'ended': function() {
      console.log('this thing ended');
      this.model.ended();
    }
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
