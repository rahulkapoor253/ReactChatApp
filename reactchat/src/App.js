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
  }

componentDidMount() {
  const chatManager = new ChatManager({
    instanceLocator: 'v1:us1:f3d02e65-28de-4979-b56b-274b9ea16dff',
    userId: 'rahul',
    tokenProvider: new TokenProvider({ url: 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/f3d02e65-28de-4979-b56b-274b9ea16dff/token' })
  })

  chatManager.connect()
  .then(currentUser => {
    console.log('Successful connection', currentUser)
    //subscribe to a room and listen to messages;
    currentUser.subscribeToRoom({
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

  render() {
    return (
      <div className="App-header">
        
        <RoomList />
          <NewRoomForm />
          <SendMessageForm />
          <MessageList messages={this.state.messages}/>
       
      </div>
    );
  }
}

export default App;
