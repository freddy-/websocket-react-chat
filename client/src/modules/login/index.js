import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #007969;
`;

const Form = styled.div`
  flex: 0;
  padding: 70px;
  background-color: white;
  border-radius: 20px;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 5px;
  padding: 0.5rem 0;
  width: 100%;
  background: #007969;
  color: white;
  border: none;
  font-weight: bold;
  margin-top: 5px;
`

const UsernameInput = styled.input`
  height: 23px;
  border: none;
  border-radius: 5px;
  background-color: #00000017;
  padding: 5px;
`;

function Login({ onJoinClick }) {

  const [userName, setUserName] = useState('');

  return (
    <Container>
      <Form>
        <UsernameInput 
          type="text" 
          placeholder="Username"
          onChange={e => setUserName(e.target.value)}
          value={userName}
        />
        <Button
          onClick={() => onJoinClick(userName)}>JOIN CHAT</Button>
      </Form>
    </Container>
  );
}

export default Login;
