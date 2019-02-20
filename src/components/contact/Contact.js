import React, { Component } from "react";
import styled from "styled-components";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: top;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Image = styled.img`
    height: 100px;
    :hover {
        height: 125px;
    }
`


class Contact extends Component {

    render() {
        return (
            <div id="Contact" className="panel">
                <div className="content">
                    <h2>Contact</h2>
                    <Wrapper>
                        <a href="https://github.com/braydenc303" target="top"><Image src="./assets/img/GitHub-Mark-120px-plus.png" alt="github logo" /></a> 
                        <a className="LI-simple-link" href='https://www.linkedin.com/in/brayden-copley-9bb0b35?trk=profile-badge'><Image src="./assets/img/linkedin.png" alt="LinkedIn Logo"></Image></a>
                        <a href="mailto:braydenc303@gmail.com"><Image src="./assets/img/email-icon-2.jpg" alt="email logo"/></a>
                    </Wrapper>
                </div>
            </div>
        );
    }
}

export default Contact;