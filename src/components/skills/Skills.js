import React, { Component } from "react";
import styled from "styled-components";

const UList = styled.ul`
    height: 100vh;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 1rem;
    align-items: center;
`
const ListI = styled.li`
    list-style-type: none;
    padding: 0 1rem;
    font-family: Arial;
    font-size: 1.5rem;
    text-align: left;
    margin: auto;
`

const Image = styled.img`
    width: 10rem;
`




class Skills extends Component {


    render() {
        return(
            <div id="Skills" className="panel">
                <div className="content">
                    <h2>Skills</h2>
                    <UList>
                        <ListI><Image src="../../assets/img/htmlLogo.png" alt="HTML Logo"/></ListI>
                        <ListI><Image src="../../assets/img/cssLogo.png" alt="CSS Logo"/></ListI>
                        <ListI><Image src="../../assets/img/jsLogo.jpg" alt="JavaScript Logo"/></ListI>
                        <ListI><Image src="../../assets/img/GitHub-Mark-120px-plus.png" alt="Git Logo"/></ListI>
                        <ListI><Image src="../../assets/img/MongoDBLogo.png" alt="Mongo Logo"/></ListI>
                        <ListI><Image src="../../assets/img/mysql-vector1.jpg" alt="MySQL Logo"/></ListI>
                        <ListI><Image src="../../assets/img/expressLogo.png" alt="Express Logo"/></ListI>
                        <ListI><Image src="../../assets/img/React-logo.png" alt="React Logo"/></ListI>
                        <ListI><Image src="../../assets/img/nodeLogo.jpg" alt="Node Logo"/></ListI>
                        <ListI><Image src="../../assets/img/npmLogo.png" alt="npm Logo"/></ListI>
                        <ListI><Image src="../../assets/img/yarnLogo.png" alt="Yarn Logo"/></ListI>
                    </UList>
                </div>
            </div>
        );
    }
}

export default Skills;