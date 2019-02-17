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

const A = styled.a`
    text-decoration: none;
    color: black;
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
                    <A href="#Portfolio"><Name>brayden copley production llc</Name></A>
                    <Spacer></Spacer>
                    <UList>
                        <A href="#Portfolio"><ListI>Portfolio</ListI></A>
                        <A href="#About"><ListI>About</ListI></A>
                        <A href="#Skills"><ListI>Skills</ListI></A>
                        <A href="#Contact"><ListI>Contact</ListI></A>
                    </UList>
                </Lead>
            </>
        );
    }
}

export default Header;