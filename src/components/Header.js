import HeaderLogo from './HeaderLogo'
import { useState } from 'react'

const Header = ( props ) =>{
    const [ headerText, setHeaderText] = useState('')
    console.log( 'in render Header' )
    console.log(props)
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
                    <li><a href="">About</a></li>                    
                    <li><a  href="">Cart</a></li>
                    <li><a  href="">Contact</a></li>
                    <li><a  href="">Login</a></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;