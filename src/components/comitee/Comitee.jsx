import React from "react";
import styled from "styled-components";
import Header from "../common/Header"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 80px;
`

const Members = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: 42px;
`

const Member = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;
`

const Image = styled.img`
    width: 256px;
    height: 256px;
    border-radius: 50%;
`

const Name = styled.p`
    margin: 0;
    color: #212226;    
    font-family: "Mort", sans-serif;
    font-weight: 900;
    font-size: 24px;
`

const Organiststion = styled.p`
    margin: 0;
    font-family: "Lato", sans-serif;
    font-size: 18px;
`


const Comitee = () => {
    return(
        <Container>
            <Header>Kommitee</Header>
            <Members>
                <Member>
                    <Image src="people/Sofia.png" />
                    <Name>Sofia Hurtado</Name>
                    <Organiststion>JUSO</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Nico.png" />
                    <Name>Nico Zobrist</Name>
                    <Organiststion>JUSO & SP</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Oliver.png" />
                    <Name>Oliver Jan Meyer</Name>
                    <Organiststion>Jungfreisinnige</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Jacqueline.png" />
                    <Name>Jacqueline Wick</Name>
                    <Organiststion>Junge Mitte</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Placeholder.png" />
                    <Name>Julia Hauri</Name>
                    <Organiststion>jglp</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Placeholder.png" />
                    <Name>Gion Reto Kaiser</Name>
                    <Organiststion>jglp</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Placeholder.png" />
                    <Name>Mechthild Mus</Name>
                    <Organiststion>junge grüne</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Placeholder.png" />
                    <Name>Tabea Irina Stauffer</Name>
                    <Organiststion>jevp</Organiststion>
                </Member>
                <Member>
                    <Image src="people/Placeholder.png" />
                    <Name>Peter Weihrauch</Name>
                    <Organiststion>junge grüne</Organiststion>
                </Member>
            </Members>
        </Container>
    )
}

export default Comitee;