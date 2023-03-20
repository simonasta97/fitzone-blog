import { useNavigate } from "react-router-dom";

export const Post = ({ post }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="col-md-4 col-sm-6">
                <div className="service_item">
                    <div className="service_photo">
                        <img src={post.img} alt=""/>
                        <div className="photo_overlay"></div>
                    </div>
                    <div className="service_caption">
                        <h4>{post.title}</h4>
                        <button onClick={(e) => { e.preventDefault(); navigate((`/details/${post._id}`)) }} className="btn know_btn">Read More</button>
                    </div>
                </div>
            </div>
        </>
    )
}

