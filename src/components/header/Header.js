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

const WList = styled.ul`
    display: flex;
    flex-direction: row;
    align-content: center;
    @media (min-width: 480px) {
        display: flex;
    }
`
// Part of a responsive navbar to be implemented in the future:
// const NList = styled.ul`
//     display: none;
//     @media (min-width: 480px) {
//         display: none;
//     }
// `

const WListI = styled.li`
    list-style-type: none;
    padding: 15px;
    :hover {
        font-size: 1.5rem;
    }
`
// Part of a responsive navbar to be implemented in the future:
// const NListI = styled.li`
//     display: none;
//     list-style-type: none;
//     padding: 15px;
//     :hover {
//         font-size: 1.5rem;
//     }
// `
const LName = styled.h2`
    display: none;
    font-weight: normal;
    align-self: center;
    padding: 15px;
    font-size: 1.5rem;
    @media (min-width: 675px) {
        display: flex;
}
`

const SName = styled.h2`
    font-weight: normal;
    align-self: center;
    padding: 15px;
    font-size: 1.5rem;
    @media (min-width: 675px) {
        display: none;
    }
`

const Spacer = styled.div`
    flex-grow: 5;
`
// Part of a responsive navbar to be implemented in the future:
// const Plus = styled.span`
//     display: flex;
//     padding: 15px;
//     @media (min-width: 480px) {
//         display: none;
//     }
//     :hover {
//         font-size: 1.5rem;
//     }
// `


class Header extends Component {

    Toggle = (props) => {
        let linksEl = document.querySelector("NList");
        if (linksEl.style.display === 'flex') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'flex';
        }
    }

    render() {
        return(
            <>
                <Lead>
                    <a href="#Portfolio"><SName>bcp</SName><LName>brayden copley production llc.</LName></a>
                    <Spacer></Spacer>
                    <WList>
                        <a href="#Portfolio"><WListI>Portfolio</WListI></a>
                        <a href="#About"><WListI>About</WListI></a>
                        <a href="#Skills"><WListI>Skills</WListI></a>
                        <a href="#Contact"><WListI>Contact</WListI></a>
                    </WList>
                    {/* Part of a responsive navbar to be implemented in the future: */}
                    {/* <Plus onClick={this.Toggle}>+</Plus> */}
                    {/* <NList>
                        <a href="#Portfolio" onClick={this.Toggle}><NListI>Portfolio</NListI></a>
                        <a href="#About" onClick={this.Toggle}><NListI>About</NListI></a>
                        <a href="#Skills" onClick={this.Toggle}><NListI>Skills</NListI></a>
                        <a href="#Contact" onClick={this.Toggle}><NListI>Contact</NListI></a>
                    </NList> */}
                </Lead>
            </>
        );
    }
}

export default Header;