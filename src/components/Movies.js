import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h4>Disney+'ta Yeni</h4>
      <Content>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9EA9E8A3A3B0B0DBFB1F103454A01BE121A2653982B5176DEABF8C2F29233C44/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9EA9E8A3A3B0B0DBFB1F103454A01BE121A2653982B5176DEABF8C2F29233C44/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9EA9E8A3A3B0B0DBFB1F103454A01BE121A2653982B5176DEABF8C2F29233C44/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9EA9E8A3A3B0B0DBFB1F103454A01BE121A2653982B5176DEABF8C2F29233C44/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </Wrap>
        <Wrap>
          <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/9EA9E8A3A3B0B0DBFB1F103454A01BE121A2653982B5176DEABF8C2F29233C44/scale?width=400&aspectRatio=1.78&format=jpeg' />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies


const Container = styled.div`

  h4 {
    font-size:20px;
    letter-spacing:.11px;
    line-height:1.4;
    padding-left:10px;
    margin-bottom:10px;
  }
`

const Content = styled.div`
padding: 0px 10px;
display:grid;
grid-template-columns:repeat(5,minmax(0, 1fr));
grid-gap:20px;

`

const Wrap = styled.div`
  cursor:pointer;
  border-radius: 8px;
  overflow: hidden;
  border: 4px solid rgba(255, 255, 255, 0);
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width:100%;
    height:100%;
    object-fit:cover;
  }

  &:hover {
    transform:scale(1.05);
    border-color: rgba(249, 249, 249, 0.8); 
  }

`