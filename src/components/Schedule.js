import React from 'react'
const imageAbs = require ("./images/abs.jpg");
const imageBack = require ("./images/back.jpg");
const imageChest = require("./images/chest.jpeg");
const imageShoulders = require("./images/shoulders.jpg");
const imageArms = require("./images/arm.jpg");
const imageLeg = require("./images/leg.jpg");
const imageGlutes = require("./images/glutes.jpg");

const Schedule=()=> {
  return (
    <div className=" my-24 p-1 md:flex items-center justify-center h-screen  rounded md:text-l lg:text-1xl xl:text-4xl">
    <table  id='Schedule' className='border border-blue-900 max-h-screen'>
        <tr className='border border-blue-900'>
            <th className='p-2'>Monday</th>
            <td className='p-2'>Chest</td>
            <td className='p-2'><textarea className=''>You shall gain, but you shall pay with sweat, blood, and vomit</textarea></td>
            <td className='p-2'><img src={imageChest} alt='' className='w-64 h-36 rounded animate-pulse'></img></td>
          </tr>
    <tr className='border border-blue-900'>
            <th className='p-2'>Tuesday</th>
            <td className='p-2'>Shoulders</td>
            <td className='p-2'><textarea>There is no magic pill</textarea></td>
            <td className='p-2'><img src={imageShoulders} alt='' className='w-64 h-36 rounded '></img></td>
           </tr>
    <tr className='border border-blue-900'>
       <th className='p-2'>Wednesday</th>
            <td className='p-2'>Back</td>
            <td className='p-2'><textarea>I will sacrifice whatever is necessary to be the best</textarea></td>
            <td className='p-2'><img src={imageBack} alt='' className='w-64 h-36 rounded  animate-pulse'></img></td>
          </tr>
    <tr className='border border-blue-900'>
            <th className='p-2'>Thursday</th>
            <td className='p-2'>Abs</td>
            <td className='p-2'><textarea>To keep winning, I have to keep improving</textarea></td>
            <td className='p-2'><img src={imageAbs} alt='' className='w-64 h-36 rounded '></img></td>
          </tr>
    <tr className='border border-blue-900'>
      <th className='p-6'>Friday</th>
            <td className='p-2' >Arms</td>
            <td className='p-2'><textarea>It's hard to beat a person who never gives up</textarea></td>
            <td className='p-2'><img src={imageArms} alt='' className='w-64 h-36 rounded  animate-pulse'></img></td>
          </tr>
    <tr className='border border-blue-900'>
    <th className='p-2'>Saturday</th>
            <td className='p-2'>Legs</td>
            <td className='p-2'><textarea>I cant feel my legs</textarea></td>
            <td className='p-2'><img src={imageLeg} alt='' className='w-64 h-36 rounded '></img></td>
          </tr>
   
        <tr className='border border-blue-900'>
    <th className='p-2'>Sunday</th>
            <td className='p-2'>Glutes</td>
            <td className='p-2'><textarea>I am the greatest, I said that even before I knew I was</textarea></td>
            <td className='p-2'><img src={imageGlutes} alt=''  className='w-64 h-36 rounded animate-pulse'></img></td>
          </tr>
    </table>
  
    </div>
  )
}
export default Schedule;