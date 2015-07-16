// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if (this.length === 1) {
        this.playFirst()
        
      }
    },this);

    this.on('ended', function(){
      this.remove(this.at(0));
      if(this.length > 0){
        this.playFirst();
      }
    },this);

    this.on('dequeue', function(){
      this.remove(this.at(0));
    },this);

  },
  playFirst: function (){
    this.at(0).play();
    // 
  }
  // add: function(song){
  //   var newSong = new SongModel(song);
  //   this.models.push(newSong);
  //   if(this.models.length === 1){
  //     this.playFirst();
  //   }
  // }

});