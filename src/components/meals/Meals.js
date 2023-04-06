import React,{useState} from 'react'
import bgk from '../../images/bgk1.jpeg';
import img from '../../images/fk.jpg'
import msk from '../../images/mks1.jpg';
import left from '../../images/left2.png';
import right from '../../images/right2.png';
import { meals } from './MealsData';
import PostedMeals from './PostedMeals';
const Meals=()=>{
  const [currentMealIndex, setCurrentMealIndex ]=useState(0);
  const currentMeal = meals[currentMealIndex];


  const handleLeftArrowClick = () => {
    setCurrentMealIndex(prevIndex => (prevIndex === 0 ? meals.length - 1 : prevIndex - 1));
};

const handleRightArrowClick = () => {
    setCurrentMealIndex(prevIndex => (prevIndex === meals.length - 1 ? 0 : prevIndex + 1));
};

  return (
    <div>
    <div id='meals' style={{background:`url(${bgk})`}} className='text-sm text-marron-900 md:text-xl lg:text-3xl'>
    <div className='flex  justify-center'>
        <div className='m-6 '><img src={img} alt='' className=' md:w-16 md:h-16 rounded-full w-12 h-12 hover:cursor-pointer'></img></div>
        <div className='m-6'><img src={msk} alt='' className=' md:w-16 md:h-16 rounded-full w-12 h-12 hover:cursor-pointer'></img></div>
        </div>
      <div className='flex justify-center lg:text-4xl'>
         <div>
        <div className='flex flex-col text-center rounded justify-center'>
         <div className=''>Dish</div>
          <div className='font-sans font-thin text-black'><PostedMeals name={currentMeal.name} /></div>
       </div>
       </div>
       <div>
        <div className='flex text-lg m-2 '>
            <div className='bg-orange-300 rounded'> 
            <div>4.</div>
            <div>*</div>
            </div>
            <div>5</div>
          </div>
        </div>
        </div>
        <div className='flex m-2'>
        <div><img onClick={handleLeftArrowClick} src={left} alt='' className='rounded-full w-32 h-10 hover:cursor-pointer'></img></div>
        <div className='w-10/12 h-10/12 mx-6 mt-6 pt-6 animate-bounce lg:animate-pulse'>
        <PostedMeals image={meals[0].image}/></div>
        <div><img onClick={handleRightArrowClick} src={right} alt='' className='rounded-full w-32 h-10 hover:cursor-pointer'></img></div>
        </div>
         <div className='m-6 p-6 border bg-white rounded text-gray-600 md:mx-12 md:mt-1 lg:mx-20 lg:mt-1'>
            METHOD:
        <PostedMeals description={currentMeal.description}/>
    </div> 
<div className='m-6 p-6'></div>
             
    </div>
    </div>
  )
}

export default Meals;