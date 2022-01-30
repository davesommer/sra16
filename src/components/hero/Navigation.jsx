import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  margin: 0 15%;
  display: flex;
  justify-content: flex-end;
  height : 64px;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 36px;
`;

const ListItem = styled.li`
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;

  > a {
    color: #FDFDFD;
    text-decoration: none;
  }

  > a:hover {
    color: #FDFDFD;
    border-bottom: 1px solid #FDFDFD;
    padding-bottom: 3px;
  }

  > a:active {
    color: #FDFDFD;
  }

  > a:visited {
    color: #FDFDFD;
  }
`;

const Navigation = () => {
    return (
    <Nav>
      <NavList>
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
      </NavList>
    </Nav>
    )
}

export default Navigation;