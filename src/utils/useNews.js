import { useState, useEffect } from "react"
import { get_api_data } from '../helpers/common'

const useNews = () => {
    const [ news, setNews ] = useState( null );
    useEffect( ()=> {
        const api_data = get_api_data();
        api_data.then( (data ) => 
        { 
            setNews( data?.articles);
        } );

    }, [] );
    return news;
}
export default useNews;