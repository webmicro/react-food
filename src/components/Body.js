import CardItem from './CardItem';
import { allRecipeData } from '../config/constants';

const BodyApp = () =>{
    return (
        <div className="container">
            {
                allRecipeData.map( function ( rec, index ){ 
                    return (
                        <CardItem restaurant = {rec} key={ rec.data.uuid } />
                    )
                })
            }            
        </div>
    )
}

export default BodyApp
