import { useState, useEffect } from "react";
import { get_api_data } from '../helpers/common'
import useNews from '../utils/useNews'

const Faq = ( { title, description, visible, dovisible } ) => {
    return (
        <div className="faq_top">
                    <div>{title}  
                    { visible && (<button onClick={ () => { dovisible() } }>Hide</button>)
                    }
                    { !visible && <button onClick={ () => { dovisible() } }>Show</button>
                    }</div>
                    { visible && 
                    <p>{description}</p>
                    }
        </div>
    )
}
const Contact = () => {
    const news_data = useNews();
    const [ isvisible, setIsvisible ] = useState( "faq1" );
    return(
        <div className="about">
            <h1>Contact Us</h1>
            <div>
                <Faq visible={ isvisible == "faq1" } dovisible={ ()=>{
                    setIsvisible('faq1')
                }} title= {"Faq 1 "} description = { "Faq 1 Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                <Faq visible={ isvisible == "faq2" } dovisible={ ()=>{
                    setIsvisible('faq2')
                }} title= {"Faq 2 "} description = { "Faq 2 Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />

                <Faq visible={ isvisible == "faq3" }  dovisible={ ()=>{
                    setIsvisible('faq3')
                }}  title= {"Faq 3 "} description = { "Faq 3 Description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />

            </div>
            
            {/* {
                news_data?  news_data.map( ( d, index )=>{
                    return (
                        <h3 key={index}>{d.title}</h3>
                    )
                }) : 'Loading..'
            } */}
        </div>
    )
}

export default Contact;