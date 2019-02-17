import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height: 100vh;
`

const Spacer = styled.div`
    height: 50px;
`

const Heading = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
`

const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
`

class Portfolio extends Component {

    render() {
        return (
            <Wrapper id="Portfolio">
                <Spacer></Spacer>
                <Heading>Portfolio</Heading>
                <Container>

                </Container>
            </Wrapper>
        );
    }
}

export default Portfolio;