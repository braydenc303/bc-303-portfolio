import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Image = styled.img`
    height: 100px;
    :hover {
        height: 125px;
    }
`

const Spacer = styled.div`
    height: 50px;
`

class Contact extends Component {

    render() {
        return (
            <>
                <Spacer id="Contact"></Spacer>
                <h2>Contact</h2>
                <Spacer></Spacer>
                <Wrapper>
                    <a href="https://github.com/braydenc303" target="top"><Image src="./assets/img/GitHub-Mark-120px-plus.png" alt="github logo" /></a> 
                    <a className="LI-simple-link" href='https://www.linkedin.com/in/brayden-copley-9bb0b35?trk=profile-badge'><Image src="./assets/img/linkedin.png" alt="LinkedIn Logo"></Image></a>
                    <a href="mailto:braydenc303@gmail.com"><Image src="./assets/img/email-icon-2.jpg" alt="email logo"/></a>
                </Wrapper>
            </>
        );
    }
}

export default Contact;