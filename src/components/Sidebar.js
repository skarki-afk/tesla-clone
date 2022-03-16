import React from "react";
import styled from "styled-components";

const Sidebar =(props)=>{
    

    return(
    <HiddenMenu show={props.menuOpen} id="box-shadow" className={props.menuOpen? "active-shadow":""}>
        <CustomClose onClick={()=>{
                        props.toggleBtn();
                        props.toggle()
                    }}>
                        X</CustomClose>
        <ul>
            {props.menus && props.menus.map((menu,index)=>(
            <li key={index}><a href="#">{menu}</a></li>
        ))}
            <li><a href="#">Custom Order</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">CyberTruck</a></li>
            <li><a href="#">Trade-In</a></li>
            <li><a href="#">Test Drive</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Powerwall</a></li>
            <li><a href="#">Commercial Energy</a></li>
        </ul>
    </HiddenMenu>
    )
}
const HiddenMenu = styled.div`
    position: fixed;
    top: 0;
    right:0;
    background: #fff;
    width: 300px;
    height: 100vh;
    z-index: 100;
    transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};
    transition: all 0.3s ease-in;
    overflow-y:scroll;
    

    ul{
        padding: 3vh 35px;
    }
    li{
        padding: 15px 0;
        text-align:start;
        border-bottom: 1px solid rgba(0,0,0,.2);
    }
    a{
        font-weight: 600;
    }
   
    

    @media (max-width:1050px){
        width: 200px;
        li{
            font-size:14px;
        }
    }
    @media (max-width:560px){
        width: 170px;
        li{
            font-size:12px;
        }
    }
`

const CustomClose = styled.div`
    padding-top: 25px;
    text-align: end;
    margin:0 15px;
    cursor: pointer;
    font-size: 14px;
    font-weight:600;
`

export default Sidebar;