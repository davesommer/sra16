import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"
import { breakpoints } from "../../utils/Breakpoint"

const Container = styled.div`
  height: 100vh;
  background-image: 
    linear-gradient(
      #27041366,
      #27041366
    ),
    url("hero.jpg");
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const HeroContainer = styled.div`
  align-items: strech;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  row-gap: 4em;
  align-items: center;  
`

const Title = styled.h1`
  margin: 0;
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 6em;
  text-transform: uppercase;
  text-align: center;
  color: #FDFDFD;
  ${breakpoints("font-size", "em", [
    { 1200: 6 },
    { 800: 5 },
    { 600: 4 },
    { 450: 3 }
  ])};
`
const Subtitle = styled.h2`
  margin: 0;
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 4em;
  text-align: center;
  color: #FDFDFD;
  ${breakpoints("font-size", "em", [
    { 1200: 4 },
    { 800: 3 },
    { 600: 3 },
    { 450: 2 }
  ])};
`

const FindOutContainer = styled.a`  
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  text-decoration: none;
  transition: transform .5s;
  :hover {
    transform: translateY(16px);
  }
`

const FindOutText = styled.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 2em;
  color: #FDFDFD;
  text-align: center;
  ${breakpoints("font-size", "em", [
    { 1200: 2 },
    { 800: 2 },
    { 600: 1.5 },
    { 450: 1.5 }
  ])};
`

const FindOutIcon = styled.img`
  height: 4em;
  ${breakpoints("font-size", "em", [
    { 1200: 1 },
    { 800: 1 },
    { 600: 1 },
    { 450: .75 }
  ])};
  width: auto;
` 

const Hero = () => (
  <Container>
    <Navigation />
    <HeroContainer>
      <Title>Für eine Demokratie mit Zukunft</Title>
      <Subtitle>Stimmrechtsalter 16 im Aargau</Subtitle>
    </HeroContainer>
    <FindOutContainer href="#Argumente">
        <FindOutText>Erfahre mehr</FindOutText>
        <FindOutIcon src="arrow.svg" />
      </FindOutContainer>
  </Container>
);

export default Hero;
