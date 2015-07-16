// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

  },
  playFirst: function (){
    this.at(0).play();
    // this.at(0).on('ended',function(){
    //   this.models.shift();
    //   this.trigger('playFirst', this);
    // },this);
  }
  // add: function(song){
  //   var newSong = new SongModel(song);
  //   this.models.push(newSong);
  //   if(this.models.length === 1){
  //     this.playFirst();
  //   }
  // }

});