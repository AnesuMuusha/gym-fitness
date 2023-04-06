const PostedData = ({title, description,image})=>{
    return(
        <div className="border rounded m-2 md:flex md:text-lg  lg:text-2xl xl:text-4xl ">
           <div className="m-3 flex flex-col items-center  md:w-2/3 lg:w-2/3 xl:w-2/3">
          
            <h5 className="mb-3 font-bold font-serif">{title}</h5>
            <p className="mb-3 text-gray-600">{description}</p>
        </div>
        <div className="md:w-1/2 m-3 flex flex-col items-center">
    <div className="">
        <img src={image} alt={''} className="mb-3 animate-pulse"/>
      </div>
        </div>
        </div>
    )
}
export default PostedData;