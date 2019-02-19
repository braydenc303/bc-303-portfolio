import React, { Component } from "react";
import styled from "styled-components";

const Lead = styled.div`
    height: 50px;
    width: 100%;
    background-color: grey;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    z-index: 1000;
`

const UList = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: center;
`

const ListI = styled.li`
    list-style-type: none;
    padding: 15px;
    :hover {
        font-size: 1.5rem;
    }
`

const Name = styled.h2`
    font-weight: normal;
    align-self: center;
    padding: 15px;
    font-size: 1.5rem;
`

const Spacer = styled.div`
    flex-grow: 5;
`

class Header extends Component {

    render() {
        return(
            <>
                <Lead>
                    <a href="#Portfolio"><Name>brayden copley production llc</Name></a>
                    <Spacer></Spacer>
                    <UList>
                        <a href="#Portfolio"><ListI>Portfolio</ListI></a>
                        <a href="#About"><ListI>About</ListI></a>
                        <a href="#Skills"><ListI>Skills</ListI></a>
                        <a href="#Contact"><ListI>Contact</ListI></a>
                    </UList>
                </Lead>
            </>
        );
    }
}

export default Header;