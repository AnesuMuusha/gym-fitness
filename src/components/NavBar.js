import React from 'react'

function NavBar() {
  return (
<header className='flex text-sm mx-8 mt-1 bg-gray-100 md:text-3xl'>
   
   <a href='#Home'>
    <div  className='ml-2'>Home</div>
    </a>
   
   <a href='#Book'>
   <div className='ml-2'>Book</div>
   </a>    
   <a href='#Explore'>
    <div className='ml-2'>Explore</div>
    </a>
    <a href='#Contact'>
    <div className='ml-2'>Contact</div>
    </a>
   
</header>
    )
}

export default NavBar;