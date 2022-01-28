import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    background-color: #F5F5F5;
    justify-content: center;
`;

const Wrapper = styled.div`
    background-color: #FDFDFD;
    display: flex;
    max-width: 1200px;
    width: 1200px;
    box-shadow: 4px 4px 4px #00000025;
    margin: 0 128px;
`

const Elements = styled.div`
    margin: 80px 128px;
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: 80px;
`

const Content = ({children}) => {
    return (
        <Container>
            <Wrapper>
                <Elements>
                    {children}
                </Elements>
            </Wrapper>
        </Container>
    )
}

export default Content;