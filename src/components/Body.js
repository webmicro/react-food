import CardItem from './CardItem';
import { allRecipeData } from '../config/constants';
import { useState } from 'react';

const BodyApp = () =>{
    const [searchText, setSearchText ]  = useState('KFC'); // [ 0, 1  ]
    console.log( 'in render BodyApp' )
    console.log( "searchText= ", searchText)
    /* 
    searchText
    setSearchText
    default : KFC
    CurrentValue : KFCAB
    BodyApp
    */
    return (
        <>
            <div className='serach-container'>
                <input className='serach-text' type="text" name="serach_text" value={searchText} placeholder='Serach Here ' onChange={ ( e )=>{ 
                    console.log(' key press ')
                    setSearchText(e.target.value);  // searchText = KFCAB
                } } /> 
                <button className='btn-search'>Serach</button>
            </div>
            <div className="container">
            {
                allRecipeData.map( function ( rec, index ){ 
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
