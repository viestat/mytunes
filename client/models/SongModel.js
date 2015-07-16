// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('JOY!!');
    this.trigger('play', this);
  },
  enqueue: function() {
    console.log('Enqueueueue');
    this.trigger('enqueue', this);
  }, 
  dequeue: function() {
    this.trigger('dequeue', this);
  },
  ended: function(){
    console.log('UNJOY!!');
    this.trigger('ended', this);
  }

});
