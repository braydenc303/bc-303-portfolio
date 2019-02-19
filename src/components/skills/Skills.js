import React, { Component } from "react";
import styled from "styled-components";

const UList = styled.ul`
    height: 100vh;
`
const ListI = styled.li`
    list-style-type: none;
    padding: 15px;
    font-family: Arial;
    font-size: 1.5em;
    text-align: left;
`

const Spacer = styled.div`
    height: 50px;
`


class Skills extends Component {


    render() {
        return(
            <div id="Skills">
                <Spacer></Spacer>
                <h2>Skills</h2>
                <UList>
                    <ListI>HTML</ListI>
                    <ListI>CSS</ListI>
                    <ListI>JavaScript</ListI>
                    <ListI>Git</ListI>
                    <ListI>Mongo</ListI>
                    <ListI>MySQL</ListI>
                    <ListI>Express</ListI>
                    <ListI>React</ListI>
                    <ListI>Node</ListI>
                    <ListI>npm</ListI>
                    <ListI>Yarn</ListI>
                </UList>
            </div>
        );
    }
}

export default Skills;