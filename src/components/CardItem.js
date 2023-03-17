import { IMAGE_URL } from '../config/constants'

const CardItem = ( { restaurant } ) =>{
    return (
        <div className="card_item">
            <div><img src={ `${IMAGE_URL}${restaurant?.data?.cloudinaryImageId}` } /></div>
            <h2>{restaurant?.data?.name}</h2>
            <span>{ restaurant?.data?.cuisines.join( ", " )}</span>
            <p>
                <span className="rating">{restaurant?.data?.avgRating}</span>
                <span className="distance">{restaurant?.data?.slaString}</span>
                <span className="price">{restaurant?.data?.costForTwo}</span>
            </p>
        </div>
    )
}
export default CardItem
