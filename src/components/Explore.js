import React from 'react'
import Footer from './Footer';
import { posts } from './PostData';
import PostedData from './PostedData.js';

function Explore() {
  return (<>
    <div className='m-4 md:text-3xl' id='Explore'>
    {
                posts.map(post => {
                    const { description, title, imagePath} = post
                    return <PostedData 
                                description={description} 
                                title={title} 
                                path={imagePath} />
                    }
                )
            }
    </div>
    <Footer/>
  </>)
}

export default Explore;