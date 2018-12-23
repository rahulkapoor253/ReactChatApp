import React, { Component } from 'react';
import MessageList from './components/MessageList';
import NewRoomForm from './components/NewRoomForm';
import RoomList from './components/RoomList';
import SendMessageForm from './components/SendMessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      messages : [],
    }

    this.sendMessage = this.sendMessage.bind(this);
  }

componentDidMount() {
  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:f3d02e65-28de-4979-b56b-274b9ea16dff',
    userId: 'rahul',
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f3d02e65-28de-4979-b56b-274b9ea16dff/token' })
  })

//get array of joinable rooms that user isnt a member of;


  chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
    //subscribe to a room and listen to messages;
    this.currentUser = currentUser;

    this.currentUser.subscribeToRoom({
      roomId: "19393147",
      hooks: {
        onMessage: message => {
          console.log(`Received new message ${message.text}`)
          //store messages in state;
          this.setState({
            messages : [...this.state.messages, message]
          })
        }
      },
      messageLimit: 10
    })
  })
  .catch(err => {
    console.log('Error on connection', err)
  })


}


sendMessage(text) {
  this.currentUser.sendMessage({
    text: text,
    roomId: "19393147"
  })
  .then(messageId => {
    console.log(text + " added successfully.")
  })
  .catch(err => {
    console.log("failure in sending message.")
  })
}

  render() {
    return (
      <div className="App-header">
        
        <RoomList />
          <NewRoomForm />
          <SendMessageForm sendMessage={this.sendMessage}/>
          <MessageList messages={this.state.messages}/>
       
      </div>
    );
  }
}

export default App;
