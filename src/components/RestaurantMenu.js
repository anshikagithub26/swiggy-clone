import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
//hi.hostinger.in for website building

let veg = 'https://2.bp.blogspot.com/-ibQIvg3n2mU/UL70a56qoII/AAAAAAAAAIY/k51XRKcaIcQ/s1600/india_veg_symbol.jpg'
let nonVeg = 'https://www.indiafilings.com/learn/wp-content/uploads/2016/01/Non-Veg-Symbol.jpg'

function RestaurantMenu() {
  const {id} = useParams();
//   console.log(id);
let mainId = id.split("-").at(-1)
      const [menuData, setMenuData] = useState([]);
      const [discountData, setDiscountData] = useState([]);
      const [topPicksData, setTopPicksData] = useState(null);
      const [resInfo, setResInfo] = useState([]);
      const [value, setValue] = useState(0);
      // const [currIndex, setCurrIndex] = useState(0);

       function handleNext(){

       }
       function handlePrev(){
        
       }

    // console.log(menuData);
    console.log(topPicksData);

   async function fetchMenu() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
      let res = await data.json();
      // console.log(res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);
      
      
      setResInfo(res?.data?.cards[2]?.card?.card?.info)
      setDiscountData(res?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers);
      let actualMenu = (res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data => data?.card?.card?.itemCards|| data?.card?.card?.categories ) 
      // console.log(actualMenu);
      setTopPicksData((res?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(data => data.card.card.title === "Top Picks")[0])
      setMenuData(actualMenu); 
   }

  useEffect(() => {
     fetchMenu();
  },[])
  // function toggleFxn(i) {
  //   setCurrIndex( i === currIndex ? null : i);
  // }
  
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
            <p>Outlet<span className='text-gray-400 font-semibold ml-3'>{resInfo.locality}</span></p> 
            <p>{resInfo.sla?.slaString}</p>
          </div>
          </div>
          {/* <hr/> */}
        </div>
        
         </div>
     </div>
     <div className='w-full overflow-hidden'>
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
            <div className='flex gap-4 mt-5'>
            {
             discountData.map((data) => (
                <Discount data={data} />
              ))
            }
            </div>

           </div>

           <h2 className='text-center mt-5'>MENU</h2>
           <div className='min-w-full mt-5 relative cursor-pointer'>
            <div className='w-full p-3 rounded-xl font-semibold text-xl bg-slate-100 text-center '>Search For Dishes</div>
            <i className=' fi-rr-search absolute  top-3 right-4'></i>
           </div>
           {
            topPicksData &&
           <div className='w-full overflow-hidden'>
     <div className='flex justify-between mt-8 '>
            <h1 className='font-bold text-xl'>{topPicksData.card.card.title}</h1>
     <div className='flex gap-3'>
              <div onClick={handlePrev} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value <=0 ? "bg-gray-100" : "bg-gray-200")}>
            <i className={`fi text-2xl mt-1 fi-rr-arrow-small-left ` + (value <=0 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
            <div onClick={handleNext} className={` cursor-pointer rounded-full w-9 h-9 flex justify-center items-center ` +(value >= 186 ? "bg-gray-100" : "bg-gray-200")} >
               <i className={`fi text-2xl mt-1 fi-rr-arrow-small-right ` + (value >= 186 ? "text-gray-300" : "text-gray-800")}></i>
            </div>
              </div>
            </div>
            <div className='flex gap-4 mt-5'>
            {
             topPicksData.card.card.carousel.map(({creativeId, dish : {info : {defaultPrice, price}}}) => (
              // console.log(data)
              
               <div className='min-w-[304px] relative h-[313px]'>
                <img className='w-full h-full' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/' + creativeId} alt=''/>
                <div className='absolute bottom-5 ml-4  text-white flex justify-between w-full'>
                  <p>₹{defaultPrice/100 || price/100}</p>
                  <button className='px-6 py-2 mr-6 bg-white text-green-800 rounded-xl font-bold'>Add</button>
                  </div>
                
                </div>
              ))
            }
            </div>

             
           </div>
           }



           <div>{
          menuData.map(({card : {card}}) => (
           
            // <div>
            //   <div className='flex justify-between'>
            // <h1>{title} ({itemCards.length})</h1>
            // <i className=" text-2xl fi fi-br-angle-small-up" ></i>
            // {/* onClick={() => toggleFxn(i)} */}
            // </div>
            // {/* { 

            // currIndex === i && */}
            // <div className='m-5'>
            // {
            //   itemCards.map(({card : {info}}) => (
            //   <h1>{info.name}</h1>
            //   ))
            // }
            // </div>
            // {/* } */}
            //  </div>
            <MenuCard card ={card}/>
          ))
        
          }       
           </div>
         </div>
         
       </div>

  );
}

function MenuCard({card}) {
   
  let hello = false;
  if(card["@type"]){
    hello = true
  }

  const[isOpen, setIsOpen] = useState(hello)


  function toggleDropDown() {
    setIsOpen((prev) => !prev)
  }

  if(card.itemCards){
    const {title , itemCards} = card;
  return(
    <>
    <div className='m-7'>
       <div className='  flex justify-between'> 
       <h1 className={'font-bold text-' + (card["@type"] ? "xl" : "base")}> {title}({itemCards.length})</h1>
        <i className={"fi fi-rr-angle-small-" + (isOpen ? "up" : "down")} onClick={toggleDropDown}></i>
      </div>
      {
         isOpen && <DetailMenu itemCards={itemCards}/>
      }
  </div>
  <hr className={'my-3  bg-slate-800 border-' + (card["@type"] ? "[10px]" : "[6px]")}/>
  </>
  )

  }else {
    const {title, categories} = card;
  return(
      <div>
      <h1 className={'font-bold text-' + (card["@type"] ? "xl" : "base")} >{title}</h1>
      {
      categories.map( (data) => (
        <MenuCard card={data}/>
      ))
      }

    </div>
  )
}
}


function DetailMenu({itemCards}) {
  
  return (
    <div className='my-5'>
      {
      itemCards.map(({card : {info}}) => (
        <DetailMenuCard info = {info}/>
      ))
    }
    </div>
  )
}
  function DetailMenuCard({info : {
    name,
    defaultPrice,
    price, 
    itemAttribute : {vegClassifier} , 
    ratings : {aggregatedRating : 
      {rating, ratingCountV2}
    }, description = " ", 
    imageId
  }}){

    const [isMore , setIsMore] = useState(false)

    let trimDes = description.substring(0, 138) + "..."
   return(

  <>

 <div className='flex w-full justify-between min-h-[182px]'>
  <div className='w-[70%]'>
    
     <img className='w-5 rounded-sm' src= {(vegClassifier === "VEG" ? veg : nonVeg )} alt=''/>
    <h1 className='font-bold text-lg text-slate-600'>{name}</h1>
    <p className='font-bold text-lg'>₹{defaultPrice/100 || price/100 }</p>
    <div className='flex items-center gap-1'><i className="fi fi-ss-star"></i><span>{rating} ({ratingCountV2})</span></div>
   
      {description.length > 140 ? <div>
      <span className=''>{trimDes}</span>
         <button className='font-bold' onClick={() => setIsMore(!isMore)}>{isMore ? "less" : "more"}</button> 
       </div> : <span>{isMore ? description : trimDes}</span>
        }
    </div>
      <div className='w-[25%] relative h-full'>
       <img className='rounded-xl' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/' + imageId} alt=''/>
       <button className='bg-white border absolute bottom-[-20px] left-8 text-xl text-green-500 rounded-xl font-bold px-10 py-2 drop-shadow-md '>ADD</button>
      </div>
      {/* line-clamp-2 -kitni line m likhna h but hm isme add more ni kr skte  */}
  </div>
  <hr className='my-7'/> 
 </>
)}


 function Discount({ 
  data : {
    info : {header, offerLogo, couponCode },
  },
}) {
  // console.log(info);
  return (
   <div className='flex gap-2 min-w-[328px] border p-3 h-[76px] rounded-2xl'>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/" + offerLogo} alt="" />
    <div>
      <h2 className='font-bold text-xl'>{header}</h2>
      <p className='text-gray-500'>{couponCode}</p>
      </div>
      
   </div>

   
  )
 }
export default RestaurantMenu
