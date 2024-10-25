import React from 'react';
import RestaurantCard from './RestaunrantCard';

function OnlineFoodDelivery({ data }) {
  return (
    
     <div>
     <div  className='mt-4 font-bold text-2xl'> Top restaurant chains in Chandigarh</div>
     
      <div className='grid grid-cols-4 gap-28  '>
       {data.map(({ info, cta : {link}  }) => (
            <div  className='hover:scale-95 duration-300 'key={info.id}>
             <RestaurantCard {...info} link={link}/>
             </div>
         ))
        }
        </div>
      </div>
  );
}

export default OnlineFoodDelivery
