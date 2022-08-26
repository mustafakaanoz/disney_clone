import React from 'react';
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" />
          <span>ANA SAYFA</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>ARAMA</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>İZLEME LİSTEM</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>FİLMLER</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>DİZİLER</span>
        </a>

      </NavMenu>
      <UserImg src="https://media-exp1.licdn.com/dms/image/C4D03AQG6hSS0yG_7LQ/profile-displayphoto-shrink_800_800/0/1640294725368?e=1666828800&v=beta&t=nVeQdSqFodYA1IoP_rYvNsB_ufbsdmtGNADRFRnoAjg" />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display:flex;
  align-items: center;
  padding: 0 36px;
`

const Logo = styled.img`
  width: 75px; 
  cursor:pointer;
`

const NavMenu = styled.div`
  display: flex;
  flex:1;
  margin-left:40px;
  align-items:center;
  
  a {
    display: flex;
    align-items:center;
    padding: 0 20px;
    cursor:pointer;

    img {
      height: 20px;
      padding-right:10px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      font-weight:700;
      position:relative;

      &:after {
        content:"";
        height: 2px;
        background: white;
        position:absolute;
        left:0;
        right:0;
        bottom:-8px;
        opacity:0;
        transform-origin:left center;
        transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform:scaleX(1);
        opacity:1;
      }
    }
  }
`

const UserImg = styled.img`
width:48px;
height:48px;
border-radius:50%;
cursor: pointer;
`
