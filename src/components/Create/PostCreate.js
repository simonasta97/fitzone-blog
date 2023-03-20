import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './PostCreate.module.css';
import { PostContext } from '../../contexts/PostContext';
import * as postService from '../../services/postService';
import Header from '../Header';

export const PostCreate = () => {
    const { postAdd } = useContext(PostContext);
    const navigate=useNavigate()
    useEffect(()=>{document.getElementById('create').classList.add('active')},[])

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
                    <input className={style.submitBtn} type="submit" value="Add Post" />
                    <button onClick={(e) => { e.preventDefault(); navigate((`/`)) }} className="btn">Go back</button>
                </form>
            </section>
        </>
    );
};