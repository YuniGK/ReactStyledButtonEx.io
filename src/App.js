import React, {useState} from "react";
import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";
import Dialog from "./components/Dialog";

/*
background: black; -> 프로미터 값을 받아 색상 변경하기 위해
background: ${props => props.color}; 변경함 

코드에서 <Circle /> -> <Circle color="pink" /> 변경해주었다.

- - -

${props => props.huge && `width : 10rem; height : 10rem;`}
`width : 10rem; height : 10rem;` 안에서는 다른 props의 내용을 추가할 수 없다.

그래서 import styled from "styled-components"; -> import styled, {css} from "styled-components";
props => props.huge && css`${props} width : 10rem; height : 10rem;`
처럼 수정해주면, props내용을 추가할 수 있다.

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  margin: 2rem;
  background: ${props => props.color};
  border-radius: 50%;
  ${props =>
    props.huge &&
    css`
      width: 10rem;
      height: 10rem;
    `}
`;
*/

const AppBlock = styled.div`
  width: 512px;
  margin: 4rem auto 0;
  border: 1px solid #000;
  padding: 2rem;
`;

const ButtonGroup = styled.div`
  & + & {
    margin-top:1rem;
  }
`;

const palette = {
  blue: "#228be6",
  gray: "#496057",
  pink: "#f06595"
};

function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = () => {
    setDialog(true);
  };

  const onConfirm = () => {
    console.log('Ok');
    setDialog(false);
  };
  const onCancel = () => {
    console.log('No');
    setDialog(false);
  };

  return (
    <ThemeProvider theme={{ palette }}>
      {/* 
      <Circle color="yellow" />
      <Circle color="pink" huge />
      */}
        <>
          <AppBlock>
          <ButtonGroup>
            <Button size="large">BUTTON</Button>
            <Button >BUTTON</Button>
            <Button size="small">BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button size="large" color="gray">BUTTON</Button>
            <Button color="gray">BUTTON</Button>
            <Button size="small" color="gray">BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button size="large" color="pink">BUTTON</Button>
            <Button color="pink">BUTTON</Button>
            <Button size="small" color="pink">BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button outline>BUTTON</Button>
            <Button color="gray" outline>BUTTON</Button>
            <Button color="pink" outline>BUTTON</Button>
          </ButtonGroup>

          <ButtonGroup>
            <Button outline fullwidth size="small">BUTTON</Button>
            <Button color="gray" fullwidth>BUTTON</Button>
            <Button color="pink" outline fullwidth size="large" onClick={onClick}>삭제</Button>
          </ButtonGroup>

          <Dialog title="삭제 하시겠습니까?" confirmText="삭제" onCancel={onCancel} onConfirm={onConfirm} visible={dialog}>
              내용을 삭제하겠습니까?
          </Dialog>        
      </AppBlock>
      </>
    </ThemeProvider>
  );
}

export default App;
