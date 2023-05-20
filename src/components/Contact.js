import { useState, useEffect } from "react";
import { get_api_data } from '../helpers/common'
import useNews from '../utils/useNews'

const Contact = () => {
    const news_data = useNews();
    return(
        <div className="about">
            <h1>Contact Us</h1>
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

export default Contact;