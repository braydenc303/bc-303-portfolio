import React, { Component } from "react";
import styled from "styled-components";

const Lead = styled.div`
    height: 50px;
    width: 100%;
    background-color: grey;
`

const UList = styled.ul`
    display: flex;
    flex-direction: row;
    text-align: right;
`

const ListI = styled.li`
    list-style-type: none;
    padding: 15px;
`

class Header extends Component {

    render() {
        return(
            <>
                <Lead>
                    <UList>
                        <ListI>Portfolio</ListI>
                        <ListI>About</ListI>
                        <ListI>Skills</ListI>
                        <ListI>Contact</ListI>
                    </UList>
                </Lead>
            </>
        );
    }
}

export default Header;