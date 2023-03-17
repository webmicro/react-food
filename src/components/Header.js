import HeaderLogo from './HeaderLogo'

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
export default Header;