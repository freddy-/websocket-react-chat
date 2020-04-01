import React, { useEffect, useRef, useState } from 'react';
import socketIOClient from "socket.io-client";
import MessageViewer from '../../components/messageViewer';
import AppContainer from '../../components/appContainer';
import MessageEditor from '../../components/messageEditor';

const URL = 'http://192.168.0.17:8000/chat'

function Chat({ userName }) {

  const socket = useRef();
  const [receivedMsgs, setReceivedMsgs] = useState([]);

  useEffect(() => {
    socket.current = socketIOClient(URL);
  }, [socket]);

  const handleNewMessage = (msg) => {
    setReceivedMsgs([...receivedMsgs, { ...msg, fromServer: true }])
  }

  useEffect(() => {
    socket.current.off();
    socket.current.on('message', handleNewMessage);
  }, [receivedMsgs])

  const onSend = (msg) => {
    if (!msg) return;

    socket.current.emit('message', { msg, userName });
    setReceivedMsgs([...receivedMsgs, { msg, userName, fromServer: false }]);
  }

  return (
    <AppContainer>
      <MessageViewer messages={receivedMsgs} />
      <MessageEditor handleSend={onSend} />
    </AppContainer>
  );
}

export default Chat;
