import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//hi.hostinger.in for website building
function RestaurantMenu() {
  const {id} = useParams();
//   console.log(id);
let mainId = id.split("-").at(-1)
      const [menuData, setMenuData] = useState([ ])
      const [discountData, setDiscountData] = useState([ ])
      const [resInfo, setResInfo] = useState([ ])
   async function fetchMenu() {
      let data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.7333148&lng=76.7794179&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`);
      let res = await data.json();
      console.log(res?.data?.cards);
      // setMenuData(res?.data?.cards[2]?.card?.card?.info)
   }

  useEffect(() => {
     fetchMenu();
  },[])
  
  return (
    <div className='font-bold font-2xl font-serif'>
       RestaurantMenu : Anshika ---- {mainId} {menuData}
       
    </div>
  )
}

export default RestaurantMenu
