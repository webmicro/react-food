import { useEffect, useState } from "react";

const About = ( { name, capital} ) => {
    const [ count, setCount ] = useState(0);
    const [ count2, setCount2 ] = useState(0);
    
    useEffect( ()=> {
        const clear_i = setInterval ( ()=>{ console.log('in About useEffect call setInterval') }, 1000 );
        
        return ( ) => {
            clearInterval( clear_i );
            console.log('This is useEffect return')
        }
    }, [] );
    
    return(
        <div className="about">
            <h1>About Us</h1>
            Count:  {count}<br></br>
            Count2: {count2}<br></br>
            { name } and { capital }
            <br></br>
            <button onClick={ () => { setCount( count + 1 )  }}>Count++</button>
            <button onClick={ () => { setCount2( count2 + 1 )  }}>Count2++</button>

            <p>THis is about page example. THis is about page example. 
            THis is about page example. THis is about page example. 
            THis is about page example. THis is about page example. 
            THis is about page example. THis is about page example. 
            THis is about page example. THis is about page example. 
            THis is about page example. THis is about page example. 
            </p>
        </div>
    )
}

export default About;