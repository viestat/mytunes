// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  render: function () {
    // debugger;
    console.log(this.model);
    var that = this;
    return this.$el.html(this.template(that.model.attributes));
  }
  // your code here!
});
