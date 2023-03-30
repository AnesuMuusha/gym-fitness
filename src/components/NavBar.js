import React from 'react';
function NavBar() {
  return (
 
<header className='fixed flex text-sm bg-gray-100 md:text-3xl text-gray-500 w-full top-0'>
   <a href='#Home'>
    <div  className='ml-8'>Home</div>
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
)}
export default NavBar;