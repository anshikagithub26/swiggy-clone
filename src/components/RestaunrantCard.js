import React from 'react'
import { Link } from 'react-router-dom'
// import restaurantMenu from './RestaurantMenu'

function RestaurantCard(info) {
  // console.log(info);
  return (
    <Link to={"/restaurantMenu"}>
      <div className='min-w-[295px] h-[185px] relative '>
        <img className='w-full h-full rounded-xl object-cover' src={"https://media-assets.swiggy.com/swiggy/image/upload/" + info?.cloudinaryImageId} alt='' />
        <div className='bg-gradient-to-t from-black from-1% to-transparent to-40% rounded-2xl w-full h-full absolute top-0 '></div>
        <p className='absolute bottom-0 text-white text-2xl ml-2 mb-2 font-bold '>
          {
            info?.aggregatedDiscountInfoV3 ?  info?.aggregatedDiscountInfoV3?.header + " " + info?.aggregatedDiscountInfoV3?.subHeader : ""
             }
          </p>
      </div>


      <div className='mt-3'>
        <h2 className='text-lg font-semibold'>{info?.name}</h2>
        <p className=' flex items-center gap-1.5 text-base font-semibold'>{" "}
          <i className="fi fi-ss-circle-star mt-1 text-green-600" ></i> {info?.avgRating} . <span>{info?.sla?.slaString}</span></p>
        <p className='line-clamp-1 text-black/60 font-medium'>{info?.cuisines.join(" , ")}</p>
        <p className='line-clamp-1 text-black/60 font-medium' >{info?.locality}</p>
        
      </div>
    </Link>
  )
}

export default RestaurantCard
