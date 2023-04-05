// React, Hooks
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import { PostContext } from '../../contexts/PostContext';

// Services
import * as postService from '../../services/postService';

// CSS
import style from './PostCreate.module.css';

// Components
import Header from '../Header';

export const PostCreate = () => {
    const [errors, setErrors] = useState({
        titleTxt: null,
        mainImgTxt: null,
        descTxt: null,
    });
    const [isCorrect, setIsCorrect] = useState(false);
    const { postAdd } = useContext(PostContext);
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));
        if (isCorrect){
            postService.create(postData)
            .then(result => {
                postAdd(result)
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
            <Header />
            <section id="features" className="auth">
                <h2>Create Post:</h2>
                <form id="create" onSubmit={onSubmit} className={style.createForm}>
                    <label htmlFor="title">Title:</label>
                    <p className={errors.titleTxt ? style.error : style.hidden}>
                        {errors.titleTxt}
                    </p>
                    <input type="text" id="title" name="title"  placeholder="Title of the post" onBlur={FormErrorVal}/>
                    <label htmlFor="img">Image:</label>
                    <p className={errors.mainImgTxt ? style.error : style.hidden}>
                        {errors.mainImgTxt}
                    </p>
                    <input type="text" id="img" name="img" placeholder="Enter URL here" onBlur={FormErrorVal}/>
                    <label htmlFor="description">Description:</label>
                    <p className={errors.descTxt ? style.error : style.hidden}>
                        {errors.descTxt}
                    </p>
                    <textarea name="description" id="description" placeholder="Enter a description " onBlur={FormErrorVal}/>
                    <input name="Create" type="submit" value="Add Post" />
                    <button onClick={(e) => { e.preventDefault(); navigate((`/`)) }} className={style.backBtn}>Go back</button>
                </form>
            </section>
        </>
    );
};