import HeaderLogo from './HeaderLogo'
import { useState, useEffect } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

const Header = ( props ) =>{
    const [ headerText, setHeaderText] = useState('')
    
    console.log( 'in render Header' )
    console.log(props)
    useEffect ( ()=>{ 
        console.log(" in useEffect header ")
    }, [] );
    return ( 
        <div className="header">
            {headerText}
            <div><input type="text" name="headert" value={headerText} onChange={ 
                (e) => {
                    console.log("in hedaer key press")
                    setHeaderText(e.target.value)
                }
            } /></div>
            <HeaderLogo />
            {props.x}
            {props.y}
            <div className="navbar">
                <ul>
                    <li><Link to="/about">About</Link></li>                    
                    <li><a  href="">Cart</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <Login/>
                </ul>
            </div>
        </div>
    )
}
export default Header;