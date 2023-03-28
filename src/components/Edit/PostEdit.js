// React, Hooks
import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

// Context
import { PostContext } from "../../contexts/PostContext";

// CSS
import style from './PostEdit.module.css';

// Services
import * as postService from '../../services/postService';

export const PostEdit = () => {
    const [currentPost, setCurrentPost] = useState({});
    const { postEdit } = useContext(PostContext);
    const { postId } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('blog').classList.add('active')},[])

    useEffect(() => {
        postService.getOne(postId)
            .then(postData => {
                setCurrentPost(postData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        postService.edit(postId, postData)
            .then(result => {
                postEdit(postId, result);
                navigate(`/details/${postId}`)
            });
    };

    return (
        <>
            <header id="home">
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://m.netinfo.bg/media/images/47307/47307923/orig-orig-pilates.jpg" alt="Strong Body" />
                            <div className="carousel-caption photo_overlay">
                                <div className="container">
                                    <div className="carousel_caption_inner">
                                        <h3>Build Your </h3>
                                        <h1>Body Strong</h1>

                                        <p>Stop Guessing And Stressing About How To Be Healthy! You don't need more confusing information. We've been the trusted voice in fitness and nutrition. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="features" className="auth">
                <h2>Edit Post:</h2>
                <form id="edit" className={style.createForm} onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="title">Post title:</label>
                        <input type="text" id="title" name="title" defaultValue={currentPost.title} />
                        
                        <label htmlFor="img">Image:</label>
                        <input type="text" id="img" name="img" defaultValue={currentPost.img} />
                        <label htmlFor="description">Post description:</label>
                        <textarea name="description" id="description" defaultValue={currentPost.description} />
                        <input name="Edit" type="submit" value="Edit Post" />
                        <button onClick={(e)=>{e.preventDefault();navigate((`/details/${postId}`))}} className={style.backBtn}>Go back</button>
                    </div>
                </form>
            </section>
        </>
    );
}