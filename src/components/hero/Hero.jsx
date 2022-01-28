import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation"

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
  row-gap: 48px;
  align-items: center;  
`

const Title = styled.h1`
  margin: 0;
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 96px;
  text-transform: uppercase;
  color: #FDFDFD;
`
const Subtitle = styled.h2`
  margin: 0;
  font-family: "Mort", sans-serif;
  font-weight: 900;
  font-size: 72px;
  color: #FDFDFD;
`

const FindOutContainer = styled.div`  
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
  transition: transform .5s;
  :hover {
    transform: translateY(16px);
  }
`

const FindOutText = styled.p`
  margin: 0;
  font-family: "Lato", sans-serif;
  font-size: 36px;
  color: #FDFDFD;
`

const FindOutIcon = styled.img`
  height: 64px;
  width: auto;
` 

const Hero = () => (
  <Container>
    <Navigation />
    <HeroContainer>
      <Title>Für eine Demokratie mit Zukunft</Title>
      <Subtitle>Stimmrechtsalter 16 im Aargau</Subtitle>
    </HeroContainer>
    <FindOutContainer>
        <FindOutText>Erfahre mehr</FindOutText>
        <FindOutIcon src="arrow.svg" />
      </FindOutContainer>
  </Container>
);

export default Hero;
