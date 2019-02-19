import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width:100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
`

const Paragraph = styled.p`
    font-family: Arial;
    font-size: 1.5rem;
    text-align: justify;
    width: 80%;
    padding: 1rem;
`

const Spacer = styled.div`
    height: 50px;
`


class About extends Component {

    render () {
        return (
            <Wrapper id="About">
                <Spacer></Spacer>
                <h2>About</h2>
                <Paragraph>Capable full-stack developer who loves the problem-solving aspect of programming. 
                    Aptitude for creating experiences that are pleasing to the eye and which naturally lead users to where they want to go. 
                    Drawing on my background in service and hospitality helps me to understand my clients wants and needs while using my technical skills in
                    HTML, CSS, JavaScript, React, and NodeJS gained from the DU Full-Stack bootcamp to provide efficient and aesthetic solutions. 
                </Paragraph>
                <Paragraph>Integrity and a strong work ethic have to led me to management and other trusted positions in my previous work, and I look forward to my 
                    future in this field building new technologies to make life and business more enjoyable.</Paragraph>
            </Wrapper>
        )
    }
}

export default About;