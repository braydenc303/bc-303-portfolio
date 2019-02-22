import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    height:100vh;
    width: 100%;
`
const Container = styled.div`
    margin: auto;
`

const Scene = styled.li`
    width: 260px;
    height: 400px;
    margin: 10px 30px;
    perspective: 1000px;
`

const Info = styled.div`
    position: absolute;
    width: 260px;
    height: 400px;
    background-color: #fff;
    -ms-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-transform: rotateY(90deg) translateZ(130px);
    -webkit-transform: rotateY(90deg) translateZ(130px);
    -moz-transform: rotateY(90deg) translateZ(130px);
    transform: rotateY(90deg) translateZ(130px);
    border: 1px solid #B8B5B5;
    font-size: 0.75em;
    -ms-transition: box-shadow 450ms;
    -webkit-transition: box-shadow 450ms;
    -moz-transition: box-shadow 450ms;
    transition: box-shadow 450ms;
    box-shadow: inset -300px 0px 40px rgba(0,0,0,0.5);
    :hover {
        box-shadow: inset 0px 0px 40px rgba(0,0,0,0);
    }
    :focus {
        box-shadow: inset 0px 0px 40px rgba(0,0,0,0);
    }
`

const Project = styled.div`
    width: 260px;
    height: 400px;
    -ms-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -ms-transform: translateZ(-130px);
    -webkit-transform: translateZ(-130px);
    -moz-transform: translateZ(-130px);
    transform: translateZ(-130px);
    -ms-transition: transform 500ms;
    -webkit-transition: transform 500ms;
    -moz-transition: transform 500ms;
    transition: transform 500ms;
    :hover {
        -ms-transform: rotateY(-78deg)translateZ(20px);
        -webkit-transform: rotateY(-78deg)translateZ(20px);
        -moz-transform: rotateY(-78deg)translateZ(20px);
        transform: rotateY(-78deg)translateZ(20px);
    }
    :focus {
        -ms-transform: rotateY(-78deg)translateZ(20px);
        -webkit-transform: rotateY(-78deg)translateZ(20px);
        -moz-transform: rotateY(-78deg)translateZ(20px);
        transform: rotateY(-78deg)translateZ(20px);
    }
    ::after {
        content: '';
        width: 260px;
        height: 260px;
        position: absolute;
        bottom: 0;
        box-shadow: 0 50px 50px rgba(0,0,0,0.3);
        transform-origin: 100% 100%;
        -ms-transform: rotateX(90deg) translateX(-130px) translateY(130px);
        -webkit-transform: rotateX(90deg) translateX(-130px) translateY(130px);
        -moz-transform: rotateX(90deg) translateX(-130px) translateY(130px);
        transform: rotateX(90deg) translateX(-130px) translateY(130px);
        -ms-transition: box-shadow 500ms;
        -webkit-transition: box-shadow 500ms;
        -moz-transition: box-shadow 500ms;
        transition: box-shadow 500ms;
    }
    :hover::after {
        box-shadow: 20px -5px 50px rgba(0,0,0,0.3);
    }
    :focus::after {
        box-shadow: 20px -5px 50px rgba(0,0,0,0.3);
    }
`

const Cover = styled.div`
    position: absolute;
    width: 260px;
    height: 400px;
    background-color: #fff;
    -ms-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    -ms-transform: translateZ(130px);
    -webkit-transform: translateZ(130px);
    -moz-transform: translateZ(130px);
    transform: translateZ(130px);
    background-size: cover;
    background-repeat: no-repeat;
    -ms-transition: box-shadow 500ms;
    -webkit-transition: box-shadow 500ms;
    -moz-transition: box-shadow 500ms;
    transition: box-shadow 500ms;
    box-shadow: inset 0px 0px 40px rgba(255,255,255,0);
    :hover {
        box-shadow: inset 300px 0px 40px rgba(255,255,255,0.8);
    }
    :focus {
        box-shadow: inset 300px 0px 40px rgba(255,255,255,0.8);
    }
`
const Stage = styled.ul`
    list-style: none;
    padding 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${Scene}:nth-child(1) ${Cover} {
        background-image: url(../../assets/img/gitTutorial.JPG);
    }
    ${Scene}:nth-child(2) ${Cover} {
        background-image: url(../../assets/img/trivia.JPG);
        background-size: auto 260px; 
        border: 1px solid grey;
    }
    ${Scene}:nth-child(3) ${Cover} {
        background-image: url(../../assets/img/memembo.JPG);
    }
`

class Portfolio extends Component {

    

    render() {
        return (
            <Wrapper id="Portfolio" className="content">
                <div>
                <h2>Portfolio</h2>
                <Container>
                    <Stage>
                        <Scene>
                            <a href="https://github.com/braydenc303/GitTutorial" target="top">
                                <Project>
                                    <Cover></Cover>
                                        <Info>
                                            <header>
                                                <h3>GitTutorial</h3>
                                                <h3>Personal Project</h3>
                                                <h3>Purpose: Education</h3>
                                            </header>
                                            <p>Merge conflicts on purpose: A Tutorial, and Best Practices For Git Workflow.</p> 
                                            <p>This project sprung out of the need for a quick tutorial for my bootcamp. Though we touched on git we did not cover a group workflow, which made working on our group projects quite difficult. I looked at a few tutorials and built one as a readme file that anyone could download and walk through in their favorite code editor.</p>
                                        </Info>
                                </Project>
                            </a>
                        </Scene>
                        <Scene>
                            <a href="https://braydenc303.github.io/triviaGame/" target="top">
                                <Project>
                                    <Cover></Cover>
                                        <Info>
                                            <header>
                                                <h3>TED Trivia</h3>
                                                <h3>Class Assignment</h3>
                                                <h3>Purpose: Entertainment/
                                                    Education</h3>
                                            </header>
                                            <p>In order to learn about event timeouts and timers, I created a trivia game. I chose TED talks for my theme, had a lot of fun on this project, and learned quite a bit.</p>
                                        </Info>
                                </Project>
                            </a>
                        </Scene>
                        <Scene>
                            <a href="https://memembo.herokuapp.com/" target="top">
                                <Project>
                                    <Cover></Cover>
                                        <Info>
                                            <header>
                                                <h3>M&#477;&#8901;mem&#8901;bo&#772;</h3>
                                                <h3>Group Project</h3>
                                                <h3>Purpose: Education</h3>
                                                <h3>In Progress</h3>
                                            </header>
                                            <p>Having just been through a fast paced learning experience ourselves, my teammates and I wanted to create something that could help people learn any new skill. We created a build your own quiz game, that has three different sets of rules depending on how well you know the material, and all completely customizable.</p>
                                        </Info>
                                </Project>
                            </a>
                        </Scene>
                    </Stage>
                </Container>
                </div>
            </Wrapper>
        );
    }
}

export default Portfolio;