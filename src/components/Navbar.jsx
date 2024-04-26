import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 2px 9px 3px #b3a6a6;
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const LogoImage = styled.img`
  width: 50px;
  height: 50px;

  /* @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  } */
`

const LogoName = styled.div`
  /* margin-left: 10px; */
`

const LinksContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <LogoImage src='src/assets/img/crafted-concepts-logo.png' alt='logo' />
        <LogoName>Crafted-Concepts</LogoName>
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
