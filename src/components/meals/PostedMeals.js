
const PostedMeals=({name,description,image})=>{

    return (

        <div>
        <div>{name}</div>
        <div>{description}</div>
        <img src={image} alt={""} />
        </div>
    )
}
    export default PostedMeals;