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
    const [errors, setErrors] = useState({
        titleTxt: null,
        mainImgTxt: null,
        descTxt: null,
    });
    const [isCorrect, setIsCorrect] = useState(false);
    const [currentPost, setCurrentPost] = useState({});
    const { postEdit } = useContext(PostContext);
    const { postId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        postService.getOne(postId)
            .then(postData => {
                setCurrentPost(postData);
            })
    }, [postId])

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));
        if (isCorrect){
            postService.edit(postId, postData)
            .then(result => {
                postEdit(postId, result);
                navigate(`/details/${postId}`)
            });
        }
    };

    function FormErrorVal(e) {
        const { name, value } = e.target;
        switch (name) {
            case "title":
                if (!value) {
                    setErrors((state) => ({
                        ...state,
                        titleTxt: "Title is required",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, titleTxt: false }));
                    setIsCorrect(true);
                }
                break;
            case "img":
                let imgRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi;
                if (!imgRegex.test(value)) {
                    setErrors((state) => ({
                        ...state,
                        mainImgTxt: "Image URL is invalid",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, mainImgTxt: false }));
                    setIsCorrect(true);
                }
                break;
            case "description":
                if (value.length < 10) {
                    setErrors((state) => ({
                        ...state,
                        descTxt: "Description must be at least 10 characters long",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, descTxt: false }));
                    setIsCorrect(true);
                }
                break;
            default:
                break;
        }
    }

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
                        <p className={errors.titleTxt ? style.error : style.hidden}>
                            {errors.titleTxt}
                        </p>
                        <input type="text" id="title" name="title" defaultValue={currentPost.title} onBlur={FormErrorVal}/>
                        <label htmlFor="img">Image:</label>
                        <p className={errors.mainImgTxt ? style.error : style.hidden}>
                            {errors.mainImgTxt}
                        </p>
                        <input type="text" id="img" name="img" defaultValue={currentPost.img} onBlur={FormErrorVal}/>
                        <label htmlFor="description">Post description:</label>
                        <p className={errors.descTxt ? style.error : style.hidden}>
                            {errors.descTxt}
                        </p>
                        <textarea name="description" id="description" defaultValue={currentPost.description} onBlur={FormErrorVal}/>
                        <input name="Edit" type="submit" value="Edit Post" />
                        <button onClick={(e)=>{e.preventDefault();navigate((`/details/${postId}`))}} className={style.backBtn}>Go back</button>
                    </div>
                </form>
            </section>
        </>
    );
}