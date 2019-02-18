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
    align-content: center;
`

const Stage = styled.ul`
    list-style: none;
    padding 0;
`

const Scene = styled.li`
    width: 260px;
    height: 400px;
    margin: 30px;
    float: left;
    perspective: 1000px;
`

const Info = styled.div`
    position: absolute;
    width: 260px;
    height: 400px;
    background-color: #fff;
    backface-visibility: hidden;
    transform: rotateY(90deg) translateZ(130px);
    border: 1px solid #B8B5B5;
    font-size: 0.75em;
    transition: box-shadow 350ms;
    box-shadow: inset -300px 0px 40px rgba(0,0,0,0.5);
    :hover {
        box-shadow: inset 0px 0px 40px rgba(0,0,0,0);
    }
`

const Project = styled.div`
    width: 260px;
    height: 400px;
    transform-style: preserve-3d;
    transform: translateZ(-130px);
    transition: transform 350ms;
    :hover {
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
        transform: rotateX(90deg) translateX(-130px) translateY(130px);
        transition: box-shadow 350ms;
    }
    :hover::after {
        box-shadow: 20px -5px 50px rgba(0,0,0,0.3);
    }
`

const Cover = styled.div`
    position: absolute;
    background-image: url(../../assets/img/gitTutorial.JPG);
    width: 260px;
    height: 400px;
    background-color: #fff;
    backface-visibility: hidden;
    transform: translateZ(130px);
    background-size: cover;
    background-repeat: no-repeat;
    transition: box-shadow 350ms;
    box-shadow: inset 0px 0px 40px rgba(255,255,255,0);
    :hover {
        box-shadow: inset 300px 0px 40px rgba(255,255,255,0.8);
    }
`


class Portfolio extends Component {

    render() {
        return (
            <Wrapper id="Portfolio">
                <Spacer></Spacer>
                <Heading>Portfolio</Heading>
                <Container>
                    <Stage className="ul">
                        <Scene className="li">
                            <Project className="Movie">
                                <Cover className="Poster"></Cover>
                                <Info>
                                <header>
                                    <h1>GitTutorial</h1>
                                    <span className="type">Personal Project</span>
                                    <span className="purpose">Education</span>
                                </header>
                                <p>Merge conflicts on purpose: A Tutorial, and Best Practices For Git Workflow. This project sprung out of the need for a quick tutorial for my bootcamp. Though we touched on git, we did not cover a group workflow which made working on our group projects more difficult. I looked at a few tutorials and built one as a readme file that anyone could download and walk through.</p>
                                </Info>
                            </Project>
                        </Scene>
                        <Scene className="li">
                            <Project className="Movie">
                                <Cover className="Poster"></Cover>
                                <Info>
                                <header>
                                    <h1>GitTutorial</h1>
                                    <span className="type">Personal Project</span>
                                    <span className="purpose">Education</span>
                                </header>
                                <p>Merge conflicts on purpose: A Tutorial, and Best Practices For Git Workflow. This project sprung out of the need for a quick tutorial for my bootcamp. Though we touched on git, we did not cover a group workflow which made working on our group projects more difficult. I looked at a few tutorials and built one as a readme file that anyone could download and walk through.</p>
                                </Info>
                            </Project>
                        </Scene>
                        <Scene className="li">
                            <Project className="Movie">
                                <Cover className="Poster"></Cover>
                                <Info>
                                <header>
                                    <h1>GitTutorial</h1>
                                    <span className="type">Personal Project</span>
                                    <span className="purpose">Education</span>
                                </header>
                                <p>Merge conflicts on purpose: A Tutorial, and Best Practices For Git Workflow. This project sprung out of the need for a quick tutorial for my bootcamp. Though we touched on git, we did not cover a group workflow which made working on our group projects more difficult. I looked at a few tutorials and built one as a readme file that anyone could download and walk through.</p>
                                </Info>
                            </Project>
                        </Scene>
                    </Stage>
                </Container>
            </Wrapper>
        );
    }
}

export default Portfolio;