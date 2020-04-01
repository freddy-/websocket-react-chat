import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 5px;
  height: 50px;
`;

const TextInput = styled.input`
  height: 40px;
  border: none;
  border-radius: 25px;
  background-color: #ececec;
  padding-left: 20px;
  flex: 1;
`;

const SendButton = styled.img`
  position: fixed;
  right: 0;
  margin-top: 5px;
  margin-right: 15px;
`;

export default ({ handleSend }) => {

  const [msgToSend, setMsgToSend] = useState('');

  const onSend = () => {
    handleSend(msgToSend);
    setMsgToSend('');
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSend();
    }
  }

  return (
    <Container>
      <TextInput 
        type="text"
        value={msgToSend}
        onKeyDown={onKeyDown}
        onChange={(evt) => setMsgToSend(evt.target.value)}
      />
      <SendButton src='send-icon.png' onClick={onSend} />
    </Container>
  );
}