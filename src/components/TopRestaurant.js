import React, {useState} from 'react'
import RestaurantCard from './RestaunrantCard';

function TopRestaurant({data}) {
   const [value, SetValue] = useState(0);
    // const[data, setData] = useState([]);
    
   console.log(value);

   function handleNext(){
    SetValue((prev) => prev + 50 );
   }
   
   function handlePrev(){
    SetValue((prev) => prev - 50 );
   }
  //  async function fetchData(){
  //   // const url=("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
  //   const result = await data.json() ;
  //   console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])   

  return (
    <div className="mt-14">
    <div className='flex justify-between mt-5 '>
          <h1 className='font-bold text-2xl'>Top restaurant chains in Chandigarh</h1>
          <div className='flex gap-3'>
            <div onClick={handlePrev} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value <=0 ? "bg-gray-100" : "bg-gray-200")}>
          <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0 ? "text-gray-300" : "text-gray-800")}></i>
          </div>
          <div onClick={handleNext} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value >= 186 ? "bg-gray-100" : "bg-gray-200")} >
             <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >= 186 ? "text-gray-300" : "text-gray-800")}></i>
          </div>
          </div>
        </div>
        <div className={`flex mt-4 gap-5 w-full duration-300`} style={{ translate : `-${value}%`}}>
            {
         data.map(({ info }) => (
            <div className='hover:scale-95 duration-300' key={info.id}>
              <RestaurantCard {...info} />
       
       
        </div>
        
         ))
        }
      </div>

      <hr className='border mt-10' />
  </div>
  )
}

export default TopRestaurant
