import React,{ useState,useEffect} from 'react'
import OnYourMind from './OnYourMind'
import TopRestaurant from './TopRestaurant'
import OnlineFoodDelivery from './OnlineFoodDelivery'

function Body() {
  const [topRestaurantData, SetTopRestaurantData] = useState([])
  const [OnYourMindData, SetOnYourMindData] = useState([])


  async function fetchData(){
    // const url=("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await data.json() ;
    console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetTopRestaurantData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    SetOnYourMindData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  }
  useEffect(() => {
    fetchData()
  }, [])   


  return (
  
    <div className='w-full '>

        <div className='w-[75%] mx-auto mt-3 shadow-md  overflow-hidden'>
          <OnYourMind data={OnYourMindData}/>
          <TopRestaurant data={topRestaurantData}/>
          <OnlineFoodDelivery data={topRestaurantData}/> 
    </div>
    </div>
  )

}

export default Body
