// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  container: [],

  // TODO: Define how you want to store your messages.
  _data: function() {
    Parse.readAll( function(data) {
      for (var i = 0; i < data.length; i++) {
        this.container.push(data[i]);
      }
    });

  },

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  //function to add to
  //push new object to container

  //function to retrieve
  //return the value object by key or a filter type (by friends,best friends etc)

  //function to interact


};