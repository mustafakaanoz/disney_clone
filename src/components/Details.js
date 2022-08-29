import React from 'react'
import styled from 'styled-components'

function Details() {
  return (
    <Container>
      <Background>
        <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B294C3D5E93B4C1A32BAE99A1CC791A34E3554EB5FA95B5634C0F1291BB1B239/scale?width=1440&aspectRatio=1.78&format=jpeg' />
      </Background>
      <ImageTitle>
        <img src='./images/rogue_title.png' />
      </ImageTitle>

      <Infos>
        <span><img src='/images/13_age.png' />2016 • 2 sa 14 dk</span>
        <span>Bilim Kurgu, Aksiyon-Macera</span>
      </Infos>

      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>OYNAT</span>
        </PlayButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controls>
      <Description>
        <p>Lucasfilm’in destansı macerası Rogue One: Bir Star Wars Hikayesi'nde bir grup alışılmadık kahraman İmparatorluğun son kitle imha silahı Ölüm Yıldızı'nın planlarını çalmak için bir araya gelir.</p>
      </Description>
    </Container>
  )
}

export default Details

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 24px);
  position:relative;
  background-image:radial-gradient(farthest-side at 73% 21%, transparent, rgb(26, 29, 41));
  
`

const Background = styled.div`
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  z-index:-1;
  


  img {
    width:100%;
    height:auto;
    object-fit:cover;
  }

`

const ImageTitle = styled.div`
  height:30vh;
  min-height:170px;
  width:21.3vw;
  max-with:341px;
  min-width:100px;
  position:relative;
  top:58px;


  img {
    width:100%;
    height:auto;
    object-fit:contain;

  }
`

const Controls = styled.div`
  display:flex;
  align-items:center;

`

const PlayButton = styled.button`
  cursor: pointer;
  border-radius:4px;
  display:flex;
  align-items:center;
  justify-content: center;
  height: 56px;
  background: #f9f9f9;
  border: none;
  color: #0e0b14;
  transition: all .2s ease-in-out;
  padding: 0 24px;
  font-size: 15px;
  letter-spacing: 1.5px;
  font-weight: 550;,
  line-height: 1.6;
  text-align: center;
  margin-right: 1rem;
  margin-left:0.2rem;
  z-index:2;

  &:hover {
    opacity:60%;
  }

  span {
    margin: 0px 0px 0px 12px;
    color: #0e0b14;
  }
`

const AddButton = styled.button`
&:hover {
  background-color: white;
  color: black;
}

span {
  font-size:25px;
  font-weight:600;
}
  color:#f9f9f9;
  z-index:2;
  background-color: rgba(0,0,0,.6);
  border: 2px solid #f9f9f9;
  height: 44px;
  width: 44px;
  border-radius: 100%;
  display:flex;
  align-items:center;
  cursor: pointer;
  justify-content: center;
  transition: all .2s ease-in-out;
  margin-right: 1rem;
 
`

const GroupWatchButton = styled(AddButton)`

`

const Infos = styled.div`
  display:flex;
  flex-direction:column;
  font-size: 12px;
  letter-spacing: -.1px;
  line-height: 1.5;
  margin: 2.5rem 0px 2.1rem ;
  color: #f9f9f9;
  gap:5px;

  img {
    height: 20px;
    margin: 0px 10px 0px 0px;
    vertical-align: top;
  }
`

const Description = styled.div`
  font-size: 20px;
  color:#f9f9f9;
  line-height: 1.6;
  letter-spacing: -.1px;
  max-width: 850px;
`