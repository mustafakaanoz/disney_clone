import React from 'react';
import styled from 'styled-components';

function Tonight() {
  return (
    <Container>
      <h4>Bu Akşam İzlemek İsteyebileceklerin</h4>

      <Wrapper>
        <img src='./images/scale.png' />
        <Button>DAHA FAZLASI</Button>
      </Wrapper>

      <Content>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/737E23E8AF21C484EB75EB6EC296D28D5AAAD1E20A786F149334F7395155229F/scale?width=600&aspectRatio=0.71&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9560CD9CDC7AA4FFD797D06A0F80FB220E9B5BB78EEA2D0682FEF3F5B7B787A3/scale?width=600&aspectRatio=0.71&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D40F386D285FF9486ED23D4A8D6F18DB4FF5943F3F2355D2AD486BCFE3329A05/scale?width=600&aspectRatio=0.71&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/8E08D414569EAF9CC23C4C42927DB25B5D14B2F38F2CBF5C490F61E3AAABBAA8/scale?width=600&aspectRatio=0.71&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7973B95DBE1088AA9433B32F15634D0BF5FF5425E019E86D63F3B9271E4BF687/scale?width=600&aspectRatio=0.71&format=jpeg' />
        </Wrap>
      </Content>

    </Container>
  )
}

export default Tonight

const Container = styled.div`
  margin-top:30px;
  position:relative;
  
  

  h4 {
    font-size:20px;
    letter-spacing:.11px;
    line-height:1.4;
    padding-left:10px;
    margin-bottom:10px;
  }
`
const Content = styled.div`
z-index:2;
display:grid;
grid-template-columns:repeat(5,minmax(0, 1fr));
grid-gap:10px;
position:absolute;
top:3.5rem;
right:0;
`

const Wrap = styled.div`
  cursor:pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 4px solid transparent;
  -webkit-box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 00px 16px 10px -10px;
  transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  &:hover {
    transform:scale(1.05);
    border:4px solid rgba(249, 249, 249, 0.8); 
    box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 50px 50px -10px;
}

  img {
    width:195px;
    height:100%;
    object-fit:cover;
    
  }

`

const Wrapper = styled.div`
z-index:-1;
  background-image: url("./images/compose.jpg");
  position:relative;
  display: block;
  position: relative;
  margin-top: 10px;
  margin-bottom: 16px;
  margin-left: calc(0% - (3.5vw + 24px));
  height: calc((100vw + 3.5vw + 24px) / 4.61);
  width: 100vw;
  background-repeat: round;
  z-index:0;

  img {
    position:absolute;
    top:4rem;
    left:9rem;
    width:18%;
  }

`

const Button = styled.button`
  display: block;
  background: #40424a;
  color:#f9f9f9;
  font-size: 1em;
  padding: 0 24px;
  cursor:pointer;
  border: 0;
  height:48px;
  border-radius: 3px;
  font-size:15px;
  font-weight:600;
  letter-spacing:1.5px;
  line-height:1.6;
  position:absolute;
  top:16rem;
  left:12.5rem;
  

  &:hover {
    transition: all 0.2s ease-in-out 0s;
    background:#464852;
  }
    
`
