import logo from "../../assets/img/logo.png"

const HeaderLogo = () => {
    console.log('in headerLogo render')
    return (
        <div className="logo">
                <img width="50" src={logo} />
        </div>            
    )
}
export default HeaderLogo;