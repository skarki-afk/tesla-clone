import React from "react";
import styled from "styled-components"
import Section from "./Section";
import data from "../data";

const Home =()=>{
    const section = data.map(item=>{
        return <Section 
                title = {item.title}
                description = {item.description}
                leftBtnTxt = {item.leftBtnTxt}
                rightBtnTxt = {item.rightBtnTxt}
                img = {item.image}
                key = {item.id}
        />
    })
    return (
        <Container>

                {section}

        </Container>
        )
}

export default Home

const Container =styled.div`
    height:100vh;
`