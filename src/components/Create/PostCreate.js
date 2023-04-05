// React, Hooks
import { useContext } from 'react';
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
    const { postAdd } = useContext(PostContext);
    const navigate=useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        const postData = Object.fromEntries(new FormData(e.target));

        postService.create(postData)
            .then(result => {
                postAdd(result)
            });
    };

    return (
        <>
            <Header />
            <section id="features" className="auth">
                <h2>Create Post:</h2>
                <form id="create" onSubmit={onSubmit} className={style.createForm}>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title"  placeholder="Title of the post"/>
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="imgUrl" placeholder="Enter URL here"/>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" placeholder="Enter a description " />
                    <input name="Create" type="submit" value="Add Post" />
                    <button onClick={(e) => { e.preventDefault(); navigate((`/`)) }} className={style.backBtn}>Go back</button>
                </form>
            </section>
        </>
    );
};