import CardItem from './CardItem';
import { API_URL } from '../config/constants';
import { useEffect, useState } from 'react';

const filterResData = ( allRecipes, s ) => {
    const filterData = allRecipes.filter( ( res ) => { 
        return res?.data?.name.toLowerCase().includes(s.toLowerCase())
        // console.log(res);
     });
     return filterData;
}
const BodyApp = () =>{
    console.log('in Body render')
    const [ allRecipeData, setAllRecipeData ]  = useState([])    
    const [ allRecipes, setAllRecipes ]  = useState([])    
    const [serachText, setSerachText] = useState('');
    const  get_api_data = async () =>{
        const data = await fetch(API_URL);
        const data_json = await data.json();
        //data_json.data.cards[2].data.data.cards
        setAllRecipeData(data_json.data.cards[2].data.data.cards);
        setAllRecipes(data_json.data.cards[2].data.data.cards);
    }
    useEffect ( ()=>{ 
        get_api_data();
    }, [] );
    return (
        <>
            <div className='serach-container'>
                <span>{serachText}</span>
                <input className='serach-text' type="text" name="serach_text" value={serachText} placeholder='Serach Here ' onChange={ ( e )=>{ 
                    console.log(' key press ')
                    // console.log(e.target.value)
                    setSerachText(e.target.value)
                    //setSearchText(e.target.value);  // searchText = KFCAB
                    const filterData = filterResData(allRecipeData, e.target.value);
                     //console.log(filterData)
                     setAllRecipes(filterData)
                } } /> 
                <button className='btn-search' onClick={ ()=>{ 
                    const filterData = filterResData(allRecipeData, serachText);
                     //console.log(filterData)
                     setAllRecipes(filterData)
                    
                }}>Serach</button>
            </div>
            <div className="container">
            {
                allRecipes.map( function ( rec, index ){ 
                    return (
                        <CardItem restaurant = {rec} key={ rec.data.uuid } />
                    )
                })
            }            
        </div>
        </>
    )
}

export default BodyApp
