import { useEffect, useState } from "react";
import { get_api_data } from '../helpers/common'
import useNews from '../utils/useNews'
import useOffline from '../utils/useOffline';

const About = ( { name, capital } ) => {
    const news_data = useNews()
    const isOffline = useOffline ();
    if ( isOffline ){
        return <h1>Error! You are offline</h1>
    }
    return(
        <div className="about">
            <h1>About Us</h1>
            {
                news_data?  news_data.map( ( d, index )=>{
                    return (
                        <h3 key={index}>{d.title}</h3>
                    )
                }) : 'Loading..'
            }
        </div>
    )
}

export default About;