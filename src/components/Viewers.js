import React from 'react';
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';

function Viewers() {
  return (
    <Container>

      <Wrap>
        <HoverVideoPlayer className='videoStyle' videoSrc="/videos/1564674844-disney.mp4"
          pausedOverlay={
            <img src='/images/viewers-disney.png' />
          }
          hoverOverlay={
            <img style={{ background: 'none' }} src='/images/viewers-disney.png' />
          }
        />
      </Wrap>

      <Wrap >
        <HoverVideoPlayer className='videoStyle' videoSrc="/videos/1564676714-pixar.mp4"
          pausedOverlay={
            <img src='/images/viewers-pixar.png' />
          }
          hoverOverlay={
            <img style={{ background: 'none' }} src='/images/viewers-pixar.png' />
          }
        />
      </Wrap>

      <Wrap>
        <HoverVideoPlayer className='videoStyle' videoSrc="/videos/1564676115-marvel.mp4"
          pausedOverlay={
            <img src='/images/viewers-marvel.png' />
          }
          hoverOverlay={
            <img style={{ background: 'none' }} src='/images/viewers-marvel.png' />
          }
        />
      </Wrap>

      <Wrap>
        <HoverVideoPlayer className='videoStyle' videoSrc="/videos/1608229455-star-wars.mp4"
          pausedOverlay={
            <img src='/images/viewers-starwars.png' />
          }
          hoverOverlay={
            <img style={{ background: 'none' }} src='/images/viewers-starwars.png' />
          }
        />
      </Wrap>

      <Wrap>
        <HoverVideoPlayer className='videoStyle' videoSrc="/videos/1564676296-national-geographic.mp4"
          pausedOverlay={
            <img src='/images/viewers-national.png' />
          }
          hoverOverlay={
            <img style={{ background: 'none' }} src='/images/viewers-national.png' />
          }
        />
      </Wrap>

    </Container>
  )
}

export default Viewers

const Container = styled.div`
  padding: 15px 10px;
  margin-top: 30px;
  display:grid;
  grid-template-columns:repeat(5,minmax(0, 1fr));
  gap:20px;
  
`



const Wrap = styled.div`
  position:relative;
  width:100%;
  display:block;
  overflow:hidden;
  box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px ;
  border-radius:10px;
  cursor:pointer;
  border: 3px solid rgba(249, 249, 249, 0.2);
  transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  .videoStyle {
    width:100%;
    height:100%;
    object-fit: cover;
  }

  img {
    background-image: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));  
    width:100%;
    height:100%;
    object-fit:cover;
  }


  &:hover {
    
    transform: scale(1.05);
    border-color:rgba(249, 249, 249, 0.8); 
    
  }

`