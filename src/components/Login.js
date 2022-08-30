import React from 'react';
import styled from 'styled-components'

function Login() {
  return (
    <Container>

      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>
          DAHA FAZLASI
        </SignUp>
        <Description>
          The Disney Bundle includes Disney+, Hulu, and ESPN+. Stream thousands of shows, movies, originals, new releases, live sports, and more.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position:relative;
  height:calc(100vh - 70px);
  display:flex;
  align-items:center;
  justify-content:center;

  &:before {
    opacity:0.8;
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      content:"";
      background-image:url("/images/login-background.jpg");
      background-size:cover;
      background-repeat:no-repeat;
      z-index:-1;
  }
`


const CTA = styled.div`
  max-width: 650px;
  padding:80px 40px;
  width: 60%;
  display:flex;
  flex-direction:column;
  text-align:center;
  align-items:center;
  gap:.5rem;
`

const CTALogoOne = styled.img`

`
const CTALogoTwo = styled.img`
  width:90%;
`

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight:bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius:4px;
  cursor:pointer;
  font-size:18px;
  transition: all 250ms;
  letter-spacing:1.7px;

  &:hover {
    background: #0483ee;
  }
`

const Description = styled.p`
  font-size:11px;
  letter-spacing:1.5px;
  line-height:1.5;
  margin-top:0;
`





