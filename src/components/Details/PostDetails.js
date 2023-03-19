import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { useAuthContext } from '../../contexts/AuthContext';
import style from './PostDetails.module.css';
import * as postService from '../../services/postService';
import Header  from '../Header';

export const PostDetails = () => {
    const navigate = useNavigate();
    const { fetchPostDetails, selectPost, postRemove } = useContext(PostContext);
    const { postId } = useParams();
    const { user } = useAuthContext();
    useEffect(()=>{document.getElementById('blog').classList.add('active')},[])
    
    const currentPost = selectPost(postId);

    useEffect(() => {
        (async () => {
            const postDetails = await postService.getOne(postId);
            fetchPostDetails(postId, { ...postDetails});
        })();
    }, [])

    const postDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            postService.remove(postId)
                .then(() => {
                    postRemove(postId);
                    navigate('/blog');
                })
        }
    }
    return (
        <>
            <Header />
            <div className={style.container}>
                <h2 className={style.title}>{currentPost.title}</h2>
                <div className={style.pointOfInterestDetails}>
                    <div className={style.pointOfInterestDetailsTop}>
                        <img src={currentPost.img} alt="Post"/>
                    </div>

                    <div className={style.pointOfInterestDetailsContent} >
                        <p>{currentPost.description}</p>
                        {user._id===currentPost._ownerId
                        ?<div className={style.buttons}>
                            <button onClick={(e)=>{e.preventDefault();navigate((`/details/${postId}/edit`))}} className="btn">Edit</button>
                            <button onClick={postDeleteHandler} className="btn">Delete</button>
                        </div>
                        :null
                        }
                    </div>
                </div>
            </div>
        </>
    );
};