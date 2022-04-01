import React from "react";
import styled from "styled-components";
import {breakpoints} from "../../utils/Breakpoint"

const Container = styled.div`
    display: flex;
    background-color: #F5F5F5;
    justify-content: center;
`;

const Wrapper = styled.div`
    background-color: #FDFDFD;
    display: flex;
    max-width: 1200px;
    box-shadow: 2px 2px 8px #00000012;
    ${breakpoints("max-width", "", [
    { 1200: "1200px" },     
    { 800: "800px" },
    { 600: "100vw" },
    { 450: "100vw" }
  ])};  
`

const Elements = styled.div`
    margin: 80px 128px;
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: 80px;
    ${breakpoints("row-gap", "px", [
    { 1200: 80 },
    { 800: 60 },
    { 600: 20 },
    { 450: 20 }
    ])};
    ${breakpoints("margin", "", [
    { 1200: "80px 128px" },
    { 800: "60px 96px" },
    { 600: "20px 32px" },
    { 450: "20px 24px" }
    ])};

`

const Content = ({children}) => {
    return (
        <Container>
            <Wrapper id="test">
                <Elements>
                    {children}
                </Elements>
            </Wrapper>
        </Container>
    )
}

export default Content;