import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { PostContext } from '../../contexts/PostContext';
import { useAuthContext } from '../../contexts/AuthContext';
import style from './PostDetails.module.css';
import * as commentService from'../../services/commentService'
import * as postService from '../../services/postService';
import Header from "../Header";

export const PostDetails = () => {
    const navigate = useNavigate();
    const { addComment, fetchPostDetails, selectPost, postRemove} = useContext(PostContext);
    const { postId } = useParams();
    const { user } = useAuthContext();
    useEffect(()=>{document.getElementById('blog').classList.add('active')},[])
    
    const currentPost = selectPost(postId);

    useEffect(() => {
        (async () => {
            const postDetails = await postService.getOne(postId);
            const postComments = await commentService.getByPostId(postId)
            fetchPostDetails(postId, { ...postDetails, comments: postComments.map(x=> `${x.user.email}: ${x.text}` )});
        })();
    }, [])

    const addCommentHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const comment = formData.get('comment');

        if (comment!=="") {
            commentService.create(postId, comment)
            .then(result => {
                addComment(postId, comment);
            });
            e.target.reset();
        }
    };

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
            <section id="features">
                <div className={style.container}>
                    <h2 className={style.title}>{currentPost.title}</h2>
                    {user._id === currentPost._ownerId
                        ? <div className={style.buttons}>
                            <button onClick={(e) => { e.preventDefault(); navigate((`/details/${postId}/edit`)) }} className={style.editBtn}>Edit</button>
                            <button onClick={postDeleteHandler} className={style.deleteBtn}>Delete</button>
                        </div>
                        : null
                    }
                    <div className={style.pointOfInterestDetails}>
                        <div className={style.pointOfInterestDetailsTop}>
                            <img src={currentPost.img} alt="Post" />
                        </div>

                        <div className={style.comments} >
                            <p>{currentPost.description}</p>
                            
                        </div>
                    </div>
                    <h2 className={style.title}>Comments:</h2>
                        {currentPost.comments
                            ? currentPost.comments.map(x =>
                                <div key={x} className={style.pointOfInterestDetailsContent}>
                                    <p>{x}</p>
                                </div>
                            )
                            : <div className={style.noComments}><p>No comments yet.</p></div>
                        }
                    {user.email
                        ?
                        <form className={style.commentForm} onSubmit={addCommentHandler}>
                            <textarea name="comment" placeholder="Write your comment..." />
                            <input name="Submit" type="submit" value="Add Comment" />
                        </form>
                        : null
                    }
                </div>
            </section>
        </>
    );
};