// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    // will user renderMessages as  helper to append messages
    //run a loop send each one to MessageView.render(msg)
    // take in value from container renderMssage will be called,
    // its argument will be the current container[i]
    console.log(data);
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //this will append it to the $chat
    var div = MessageView.render(message);
    MessagesView.$chats.append(div);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};