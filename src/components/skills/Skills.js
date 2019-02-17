import React, { Component } from "react";
import styled from "styled-components";

const UList = styled.ul`
`
const ListI = styled.li`
    list-style-type: none;
    padding: 15px;
    font-family: Arial;
    font-size: 1.5em;
    text-align: left;
`
class Skills extends Component {


    render() {
        return(
            <>
                <UList>
                <ListI>HTML</ListI>
                <ListI>CSS</ListI>
                <ListI>JavaScript</ListI>
                <ListI>Mongo</ListI>
                <ListI>MySQL</ListI>
                <ListI>Express</ListI>
                <ListI>React</ListI>
                <ListI>Node</ListI>
                </UList>
            </>
        );
    }
}

export default Skills;