import React,{ useState,useEffect} from 'react'
import OnYourMind from './OnYourMind'
import TopRestaurant from './TopRestaurant'

function Body() {
 
  return (
    <div className='w-full '>

        <div className='w-[75%] mx-auto mt-3 shadow-md  overflow-hidden'>
          <OnYourMind/>
          <TopRestaurant/>
    </div>
    </div>
  )

}

export default Body
