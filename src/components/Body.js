import CardItem from './CardItem';
import { allRecipeData } from '../config/constants';
import { useState } from 'react';

const filterResData = ( s ) => {
    const filterData = allRecipeData.filter( ( res ) => { 
        return res?.data?.name.includes(s)
        // console.log(res);
     });
     return filterData;
}
const BodyApp = () =>{
    console.log('in Body render')
    const [ allRecipes, setAllRecipes ]  = useState(allRecipeData)
    const [serachText, setSerachText] = useState('');
    return (
        <>
            <div className='serach-container'>
                <input className='serach-text' type="text" name="serach_text" value={serachText} placeholder='Serach Here ' onChange={ ( e )=>{ 
                    console.log(' key press ')
                    // console.log(e.target.value)
                    setSerachText(e.target.value)
                    //setSearchText(e.target.value);  // searchText = KFCAB
                } } /> 
                <button className='btn-search' onClick={ ()=>{ 
                    const filterData = filterResData(serachText);
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
