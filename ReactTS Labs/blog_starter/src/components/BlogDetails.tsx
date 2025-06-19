import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const { id } = useParams(); // useParams is a hook that allows us to access the parameters in the URL


  return (
    <div className="blog-details">
      <h2>Blog Details Place Holder for blog id: { id }</h2>
    </div>
  );
}
 
export default BlogDetails;