import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {IMAGE_URL} from './../config/constants';

//https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5470898&lng=77.3051591&restaurantId=223411


const RestaurantsDetail = () => {
    console.log(' in RestaurantsDetail render')
    const { res_id }  = useParams();
    const [resDetail, setResDetail] = useState(null);
    const loadRestaurantDetail  = async () => {
        const url = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5470898&lng=77.3051591&restaurantId='+res_id;
        const data = await fetch(url);
        const json_data =  await data.json();
        console.log(json_data?.data?.cards[0]?.card)
        setResDetail(json_data?.data?.cards[0]?.card?.card?.info)
    }
    useEffect ( ()=>{ 
        loadRestaurantDetail();
    }, [] );
    if ( resDetail == null )
        return <Shimmer />
    
    return (
        <div>
            <img src={ `${IMAGE_URL}${resDetail?.cloudinaryImageId}` } />
            <h2>{resDetail?.name}</h2>
            <span>{resDetail?.areaName} {resDetail?.city}</span>
        </div>
    )
}

export default RestaurantsDetail;