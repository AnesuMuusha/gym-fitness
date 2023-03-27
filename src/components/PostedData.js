import imagePath from "./images/gym.jpg";
const PostedData = ({title, description})=>{
    return(
        <div className="border rounded m-2 md:flex md:text-lg  lg:text-2xl xl:text-4xl">
           <div className="m-3 flex flex-col items-center w-2/3">
          
            <h5 className="mb-3 font-bold font-serif">{title}</h5>
            <p className="mb-3 text-gray-600">{description}</p>
        </div>
        <div className="m-3 flex flex-col items-center">
    <div>
        <img src={imagePath} alt={title} className="mb-3" />
      </div>
        </div>
        </div>
    )
}
export default PostedData;