import { Link } from "react-router-dom";

export const LatestPosts = ({post}) =>{
    return(
                        <div className="col-sm">
                            <div className="service_item">
                                <div className="service_photo">
                                <Link to={`/blog/${post._id}`}>
                                    <img src={post.img} alt="" />
                                </Link>
                                </div>
                                <div className="service_caption">
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    <Link to={`/blog/${post._id}`} className="btn know_btn">Read More</Link>
                                </div>
                            </div>
                        </div>
                        
    )
}