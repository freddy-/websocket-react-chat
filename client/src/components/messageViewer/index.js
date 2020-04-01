import React, { useRef, useEffect } from 'react';
import styled, { css } from 'styled-components'

const MsgContainer = styled.div`
  padding: 5px 5px 0px 5px;
  overflow: auto;
  height: 100%;
`;

const MsgBalloon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 5px;

  ${props => props.primary && css`
    align-items: flex-end;
  `}
`;

const Msg = styled.div`
  background-color: #a9c8ff;
  border-radius: 10px;
  padding: 10px;
  max-width: 70%;
  word-break: break-word;

  ${props => props.primary && css`
    background-color: rgb(202, 202, 202);
  `}
`;

const SenderUserName = styled.div`
  color: #7b7b7b;
  font-size: 15px;
  text-transform: capitalize;
`;

function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const scrollToRef = (ref) => ref.current.scrollTo(0, 9999999999) 

export default ({ messages }) => {

  const containerRef = useRef(null)
  const previousMessageCount = usePrevious(messages.length)

  useEffect(() => {
    if (messages.length > previousMessageCount) {
      scrollToRef(containerRef);
    }
  });

  return (
    <MsgContainer ref={containerRef}>
      {messages.map((msg, idx) => 
        <MsgBalloon key={idx} primary={!msg.fromServer}>
          <Msg primary={!msg.fromServer}>
            { msg.userName && <SenderUserName>{msg.userName}:</SenderUserName> }
            {msg.msg}
          </Msg>
        </MsgBalloon>
      )}
  </MsgContainer>
  );
};