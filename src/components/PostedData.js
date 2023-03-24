const PostedData = ({title, description, path})=>{
    return(
        <div className="border rounded m-2">
           <div className="m-3 flex flex-col items-center">
            <h5 className="mb-3 font-bold font-serif">{title}</h5>
            <p className="mb-3">{description}</p>
            <a href={path} ><button className="bg-gray-800 hover:bg-gray-600 p-1 border rounded b text-white cursor-pointer">View</button></a>
        </div>
        </div>
    )
}
export default PostedData;