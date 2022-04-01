import React from "react";
import styled from "styled-components";

const Nav = styled.div`
  margin: 0 20%;
  display: flex;
  justify-content: flex-end;
  height : 4em;
  align-items: center;
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

const Navigation = () => {
  let width = window.innerWidth;
    return (
      <>
      { width > 600 && 
        <Nav>
          <NavList>
            <ListItem>
              <a href="#Argumente">Argumente</a>
            </ListItem>
            <ListItem>
              <a href="#Komitee">Komitee</a>
            </ListItem>
            <ListItem>
              <a href="#Unterstützen">Unterstützen</a>
            </ListItem>
            </NavList>
        </Nav>
      }
    </>
    )
}

export default Navigation;