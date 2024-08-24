import React, { useEffect,useState} from 'react'

function Body() {
  const[data, SetData] = useState([]);
  const[value, SetValue] = useState(0);
   async function fetchData(){
    // const url=("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9690247&lng=72.8205292&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const result = await data.json() ;
    console.log(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    SetData(result?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  }
  useEffect(() => {
    fetchData()
  }, [])

  console.log(value);
    function handleNext(){
      if (value <= 155) {
        SetValue(prev => prev + 31);}
  }

  function handlePrev(){
    if (value >= 0) {
      SetValue(prev => prev - 31);}
  }

  return (
    <div className='w-full '>

        <div className='w-[75%] mx-auto mt-3 shadow-md  overflow-hidden'>
          <div className='flex justify-between mt-5 '>
            <h1 className='font-bold text-2xl'>What's on your mind?</h1>
            <div className='flex gap-3'>
              <div onClick={handlePrev} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value <=0 ? "bg-gray-100" : "bg-gray-200")}>
            <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
            <div onClick={handleNext} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value >= 186 ? "bg-gray-100" : "bg-gray-200")} >
               <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >= 186 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
            </div>
          </div>
          <div 
          style={{translate : `-${value}%`}}
          className={`flex mt-4  duration-300`}>
        {
          data.map((item) => (
            <img className='w-40' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`} alt=""/>
          ) )
         
        }
        </div>

        <hr/>
    </div>
    </div>
  )

}

export default Body
