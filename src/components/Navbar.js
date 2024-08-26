import React from 'react'

function Navbar() {
  const navItems = [
    {
      name: "Swiggy corporate",
      image: <i className="fi fi-rr-briefcase-blank"></i>
    },
    {
      name: "Search",
      image: <i className=" fi-rr-search"></i>
    },
    {
      name: "Offers",
      image: <i className="fi fi-rs-badge-percent"></i>
    },
    {
      name: "Help",
      image: <i className="fi fi-rs-parachute-box"></i>
    },
    {
      name: "Sign in",
      image: <i className="fi fi-ss-user"></i>
    },
    {
      name: "Cart",
      image: <i className="fi fi-ss-shopping-cart-add"></i>
    }
  ]

  return (

    <div className="text-3xl w-full shadow-md h-20 flex justify-center items-center">
      <div className=' w-[70%] flex justify-between'>
        <div className='flex items-center'>
          <img className='w-10' src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png" alt="" />
          {/* <img className='w-20' src="https://logos-world.net/wp-content/uploads/2020/11/Swiggy-Emblem.png" alt="" /> */}
          <div className='flex items-center gap-1'>
            <p className='text-base font-bold  border-b-2 ml-11 border-black'>Other</p>
            <i className="fi mt-1 ml-2 text-orange-600 text-2xl  fi-rr-angle-small-down"></i>
          </div>
        </div>
        <div className='flex items-center'>
          {
            navItems.map((data,i) => (
              <div className='flex mt-2 ml-12 text-2xl  ' key={i}>
               {data.image}
                <p className='text-base font-medium text-gray-600 ml-1 '>{data.name}</p>
                </div>
            ))
          }
          {/* <div className='flex mt-2 text-2xl'><i className="fi fi-rr-briefcase-blank"></i>
            <p className='text-base ml-1 '>Swiggy Corporate</p></div>
          <div className='flex mt-2 ml-12 text-2xl '><i className=" fi-rr-search"></i>
            <p className='text-base ml-1 '>Search</p></div>
          <div className='flex mt-1 ml-12 text-2xl '><i className="fi fi-rs-badge-percent"></i>
            <p className='text-base ml-1 '>Offers</p></div>
          <div className='flex mt-2  ml-12 text-2xl'><i className="fi fi-rs-parachute-box"></i>
            <p className='text-base ml-1 '>Help</p></div>
          <div className='flex mt-2 ml-12 text-2xl'><i className="fi fi-ss-user"></i>
            <p className='text-base ml-1 '>Sign in</p></div>
          <div className='flex mt-2 ml-12 text-2xl'><i className="fi fi-ss-shopping-cart-add"></i>
            <p className='text-base ml-1 '>Cart</p></div> */}

        </div>
      </div>
    </div>
  )
}
export default Navbar