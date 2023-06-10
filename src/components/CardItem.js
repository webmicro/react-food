import { IMAGE_URL } from '../config/constants'
import { Link } from 'react-router-dom'

const CardItem = ( { restaurant, username } ) =>{
    //console.log(restaurant)
    return (
        <div className="card_item">
            <div>
            <Link to={ '/restaurants-detail/'+restaurant.data.id } ><img src={ `${IMAGE_URL}${restaurant?.data?.cloudinaryImageId}` } /></Link></div>
            <h2>{restaurant?.data?.name}</h2>
            <span>{ restaurant?.data?.cuisines.join( ", " )}</span>
            <p>
                <span className="rating">{restaurant?.data?.avgRating}</span>
                <span className="distance">{restaurant?.data?.slaString}</span>
                <span className="price">{restaurant?.data?.costForTwo}</span>
                <span>Username: {username}</span>
            </p>
        </div>
    )
}
export default CardItem
