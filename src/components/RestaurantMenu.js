import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//hi.hostinger.in for website building
function RestaurantMenu() {
  const {id} = useParams();
//   console.log(id);
let mainId = id.split("-").at(-1)
      const [menuData, setMenuData] = useState([ ])
      const [discountData, setDiscountData] = useState([ ])
      const [resInfo, setResInfo] = useState([ ])
      const [value, setValue] = useState(0);

       function handleNext(){

       }
       function handlePrev(){
        
       }

    console.log(resInfo);
    

   async function fetchMenu() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
      let res = await data.json();
      // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
      setResInfo(res?.data?.cards[2]?.card?.card?.info)
      setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offer)
      setMenuData(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card)
   }

  useEffect(() => {
     fetchMenu();
  },[])
  
  return (
    <div className='w-full'>
     <div className='w-[800px] mx-auto pt-10'>
      <p className='text-[12px] text-slate-500'> <Link to={"/"}> <span className='hover:text-slate-700 hover:cursor-pointer'>Home</span> </Link>/ <Link to={"/"}><span className='hover:text-slate-700 hover:cursor-pointer'>{resInfo.city}</span></Link> / <span className='text-slate-700'>{resInfo.name}</span></p>
     <h1 className='font-bold pt-6 text-2xl'>{resInfo.name}</h1>
     <div className='w-full h-[160px] bg-gradient-to-t px-4 pb-4 from-slate-300/70  mt-3 rounded-[30px]'>
         <div className='w-full h-full rounded-[30px] bg-white border border-slate-200/70  '>

         <div className='p-4 w-full'>
        <div className='flex item-centre gap-1 font-semibold'>
         <i className="fi fi-ss-circle-star mt-1 text-green-600 text-lg " ></i>
         <span>{resInfo.avgRating}</span>
         <span>({resInfo.totalRatingsString})</span>
        <span>{resInfo.costForTwoMessage}</span>
        </div>
        <p className='underline font-semibold text-orange-600'>{resInfo?.cuisines?.join(" , ")}</p>
        <div className='flex gap-2'>
          <div className='w-[7px] flex flex-col justify-center items-center mt-3'>
            <div className='w-[7px] h-[7px] bg-slate-400 rounded-full'> </div>
            <div className='w-[1.5px] h-[25px] bg-slate-400 rounded-full'></div>
            <div className='w-[7px] h-[7px] bg-slate-400 rounded-full'> </div>
          </div>
          <div className='flex flex-col gap-1 font-semibold text-sm mt-2'>
            <p>Outlet<span className='text-gray-400 font-semibold'>{resInfo.locality}</span></p> 
            <p>{resInfo.sla?.slaString}</p>
          </div>
          </div>
          {/* <hr/> */}
        </div>
        
         </div>
     </div>
     <div className='w-full'>
     <div className='flex justify-between mt-8 '>
            <h1 className='font-bold text-xl'>Deals for you</h1>
     <div className='flex gap-3'>
              <div onClick={handlePrev} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value <=0 ? "bg-gray-100" : "bg-gray-200")}>
            <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
            <div onClick={handleNext} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value >= 186 ? "bg-gray-100" : "bg-gray-200")} >
               <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >= 186 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
            </div>
            </div>
            {
              discountData.map((data) => (
             <Discount data={data}/>
              ))
       
            }
     </div>
       </div>
    </div>

  )
}
  
 function Discount({data : {info : {header, offerLogo, couponCode}}}){
  // console.log(info);
  return (
   <div> aj sb kuch theek h</div>

   
  )
 }
export default RestaurantMenu
