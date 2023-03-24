import imagePath from "./images/gym.jpg";
const PostedData = ({title, description})=>{
    return(
        <div className="border rounded m-2">
           <div className="m-3 flex flex-col items-center">
            <h5 className="mb-3 font-bold font-serif">{title}</h5>
            <p className="mb-3">{description}</p>
        <div>
        <img src={imagePath} alt={title} className="mb-3" />
      </div>
        </div>
        </div>
    )
}
export default PostedData;