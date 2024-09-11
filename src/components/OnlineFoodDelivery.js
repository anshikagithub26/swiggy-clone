import React from 'react';
import RestaurantCard from './RestaunrantCard';


function OnlineFoodDelivery({ data }) {
  return (
    
     <div>
     <div  className='mt-4 font-bold text-2xl'> Top restaurant chains in Chandigarh</div>
     
      <div className='grid grid-cols-4 gap-10'>
       {data.map(({ info }) => (
            <div  className='hover:scale-95 duration-300'key={info.id}>
             <RestaurantCard {...info} />
             </div>
         ))
        }
        </div>
      </div>
  );
}

export default OnlineFoodDelivery
