import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    background: #9A1750;
    position: sticky;
    top: 0;
`   

const Nav = styled.div`
  margin: 0 15%;
  display: flex;
  justify-content: flex-end;
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
        <Container>
            <Nav>
                <NavList>
                    <ListItem>
                        <Link to="/">Argumente</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">Komitee</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">Spenden</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">Unterstützen</Link>
                    </ListItem>
                </NavList>
            </Nav>
        </Container>
    )
}

export default Navigation;