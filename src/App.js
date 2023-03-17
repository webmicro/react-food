import React from "react";
import ReactDom from "react-dom/client"
import Header from './components/Header'
import Footer from "./components/Footer";
import BodyApp from './components/Body'
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