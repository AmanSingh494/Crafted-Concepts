/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 9px;
  box-shadow: 0px 2px 9px 3px #b3a6a6;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
`

const LogoName = styled.div`
  margin-left: 10px;
`

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src='logo.png' alt='logo' />
        <LogoName>Company Name</LogoName>
      </LogoContainer>
      <LinksContainer>
        <a href='#'>Link 1</a>
        <a href='#'>Link 2</a>
        <a href='#'>Link 3</a>
        <a href='#'>Link 4</a>
      </LinksContainer>
    </NavbarContainer>
  )
}

export default Navbar
