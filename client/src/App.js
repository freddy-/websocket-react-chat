import React, { useState } from 'react';
import styled from 'styled-components'
import Chat from './modules/chat';
import Login from './modules/login';

function App() {

  const [userName, setUserName] = useState();

  return userName 
    ? <Chat userName={userName} /> 
    : <Login onJoinClick={(name) => setUserName(name)} />;
}

export default App;
