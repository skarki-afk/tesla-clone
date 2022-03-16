import React, {useState} from "react";
import styled from "styled-components";



const Header =(props)=>{
    
    

    
    return (
        
        <Container >
            <a>
                <img src="/images/logo.svg"/>
            </a>
            <Menu>
                {props.menus && props.menus.map((menu,index)=>(
                    <ul className="menu">
                        <li key={index}>{menu}</li>
                    </ul>
                ))}
            </Menu>
            <RightMenu >
                <ul className="right-menu">
                    <li>Shop</li>
                    <li>Account</li>
                    <li onClick={()=>{
                        props.toggleBtn();
                        props.toggle()
                    }}>Menu</li>
                </ul>
            </RightMenu>
            
                
           
        </Container>
        
    )
}

export default Header

const Container = styled.div`
    z-index: 1;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    min-height:60px;
    position: fixed;
    align-items: center;
    padding: 0 20px;
    margin-left: 25px;
    @media (max-width:1108px){
        margin-left:10px;
    }
    @media (max-width: 500px) {
        margin: 0px;
      }
    `

const Menu = styled.div`
    display:flex;
    margin-left: 105px;

    @media (max-width:1260px){
        display: none;
    }

    
`
const RightMenu = styled.div`
    
`



