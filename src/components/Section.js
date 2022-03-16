import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade"


const Section =(props)=>{
    return(
        <Wrap bgImage = {props.img}>
            <Fade bottom>
                <ItemText>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </ItemText>
                </Fade>
                <Buttons>     
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>
                            {props.leftBtnTxt}
                        </LeftButton>
                        {props.rightBtnTxt &&
                            <RightButton>                   
                                {props.rightBtnTxt}
                            </RightButton>
                        }
                    </ButtonGroup>
                </Fade>
                    <DownArrow src = {"/images/down-arrow.svg"}/>
                </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props=> `url(/images/${props.bgImage})`};
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items:center;
    `
const ItemText = styled.div`
    padding-top: 15vh;
    text-align:center;
`
const Buttons =styled.div``

const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:30px;
    @media (max-width:768px){
        flex-direction:column;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color: #ffffff;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:100px;
    opacity:0.85;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    font-size: 12px;
    margin:8px;
`

const RightButton = styled(LeftButton)`
    background-color:#fff;
    color: rgba(23,26,32,0.8);
    opacity: 0.65;
`

const DownArrow = styled.img`
    height:40px;
    animation : animateDown infinite 1.5s;
    overflow: hidden;
`