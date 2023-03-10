import React from "react";
import ReactDom from "react-dom/client"
import logo from "./assets/img/logo.png"
// const heading = <h1>THis is Heading</h1>

//There are two ways to create component
// 1. Functional Component
// 2. Class Based Component

// const title =  <h1>This is Heading 1 created by FC 1</h1>

/*
APP Layout
    => Header
        => Logo
        => Navbar
    => Body
        => Banner
        => CardList

    => Footer

*/

const HeaderLogo = () => {
    return (
        <div className="logo">
                <img width="50" src={logo} />
        </div>            
    )
}

const Header = () =>{
    return ( 
        <div className="header">
            <HeaderLogo />
            <div className="navbar">
                <ul>
                    <li><a href="">About</a></li>                    
                    <li><a  href="">Cart</a></li>
                    <li><a  href="">Contact</a></li>
                    <li><a  href="">Login</a></li>
                </ul>
            </div>
        </div>
    )
}
const Footer = () =>{
    return (
        <div className="footer">
            This is footer
        </div>
    )
}
const BodyApp = () =>{
    return (
        <div className="container">
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
            <CardItem />
        </div>
    )
}
const CardItem = () =>{
    return (
        <div className="card_item">
            <div><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf" /></div>
            <h2>title</h2>
            <span>cuisine</span>
            <p>
                <span>Rating</span>
                <span>Distance</span>
                <span>Price</span>
            </p>
        </div>
    )
}
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header />
            <BodyApp />
            <Footer />
        </React.Fragment>
    )
} 

const root = ReactDom.createRoot( document.getElementById("root") )
root.render( <AppLayout /> )

