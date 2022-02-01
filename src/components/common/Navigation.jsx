import React, { useState } from "react";
import styled from "styled-components";
import {breakpoints} from "../../utils/Breakpoint"

const Container = styled.div`
    background: #9A1750;
    position: sticky;
    top: 0;
    height : 4em;
`   

const Nav = styled.div`
  height: 100%;
  margin: 0 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${breakpoints("margin", "", [
    { 1200: "0 20%" },
    { 800: "0 20%" },
    { 600: "0 5%" },
    { 450: "0 5%  " }
    ])};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 3em;
`;

const ListItem = styled.li`
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 1.5em;

  > a {
    color: #FDFDFD;
    text-decoration: none;
  }

  > a:hover {
    color: #FDFDFD;
    border-bottom: 1px solid #FDFDFD;
    padding-bottom: 6px;
  }

  > a:active {
    color: #FDFDFD;
  }

  > a:visited {
    color: #FDFDFD;
  }
`;

const MenuIcon = styled.img`
  height: 3em;
  width: auto;
  color: #FDFDFD;
`

const MobileNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #9A1750;
`

const Navigation = () => {

    const  [showNav, setShowNav] = useState(false);

    let width = window.innerWidth;
    return (
      <Container>
          <Nav>
            <NavList>
              { width > 600 && 
                <>
                <ListItem>
                  <a href="#Argumente">Argumente</a>
                </ListItem>
                <ListItem>
                  <a href="#Komitee">Komitee</a>
                </ListItem>
                <ListItem>
                  <a href="#Spenden">Spenden</a>
                </ListItem>
                <ListItem>
                  <a href="#Unterstützen">Unterstützen</a>
                </ListItem>
                </>
              }
              { width <= 600 && 
                <MenuIcon onClick={() => setShowNav(true)} src="menu.svg"/>
              }
              { showNav && <MobileNav></MobileNav>}
              </NavList>
          </Nav>
      </Container>
    )
}

export default Navigation;