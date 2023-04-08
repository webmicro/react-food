import { useState } from "react"

const Welcome = ( { login } ) => {
    console.log(' in welcome render ')
    return (
       <>
        { login ? 'Welcome User' : 'No User' }
       </>
    );
}
export default Welcome