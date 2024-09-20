import React from 'react';
import RestaurantCard from './RestaunrantCard';


function OnlineFoodDelivery({ data }) {
  return (
    
     <div>
     <div  className='mt-4 font-bold text-2xl'> Top restaurant chains in Chandigarh</div>
     
      <div className='grid grid-cols-4 gap-28  '>
       {data.map(({ info }) => (
            <div  className='hover:scale-95 duration-300 'key={info.id}>
              <div className='w-75% h-75%'>
             <RestaurantCard {...info} />
             </div>
             </div>
         ))
        }
        </div>
      </div>
  );
}

export default OnlineFoodDelivery
// gap-28