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

const Header = ( props ) =>{
    console.log(props)
    return ( 
        <div className="header">
            <HeaderLogo />
            {props.x}
            {props.y}
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
const recipeData = [
        {
            'name' : 'Res 1',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 120,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 2',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 120,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 3',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 60,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 4',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 150,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 5',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 130,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 6',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 220,
            'distance' : '2 km'
        },        
        {
            'name' : 'Res 7',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 220,
            'distance' : '2 km'
        },
        {
            'name' : 'Res 8',
            'cuisines': [
                "Biryani", "Nihari"
            ],
            'image' : 'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g4cejzlwduywntl0hrrf',
            'rating' : '3.8',
            'price' : 220,
            'distance' : '2 km'
        },
        
]
const BodyApp = () =>{
    return (
        <div className="container">
            {
                recipeData.map( function ( rec, index ){ 
                    return (
                        <CardItem data = {rec} key={index} />
                    )
                })
            }            
        </div>
    )
}

const CardItem = ( props ) =>{
    return (
        <div className="card_item">
            <div><img src={props?.data?.image} /></div>
            <h2>{props?.data?.name}</h2>
            <span>{ props?.data?.cuisines.join( ", " )}</span>
            <p>
                <span className="rating">{props?.data?.rating}</span>
                <span className="distance">{props?.data?.distance}</span>
                <span className="price">{props?.data?.price}</span>
            </p>
        </div>
    )
}
const AppLayout = () => {
    return (
        <React.Fragment>
            <Header x ="Hello" y ="Js" z =" Enjoy" />
            <BodyApp />
            <Footer />
        </React.Fragment>
    )
} 

const root = ReactDom.createRoot( document.getElementById("root") )
root.render( <AppLayout /> )

