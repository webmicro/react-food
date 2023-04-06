import { useEffect } from "react"

const Footer = () =>{
    console.log('in Footer render')
    useEffect ( ()=>{ 
        console.log(" in useEffect footer ")
    } );
    return (
        <div className="footer">
            This is footer
        </div>
    )
}
export default Footer