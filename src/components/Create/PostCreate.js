import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <Header/>
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Add Post</h1>
                    <label htmlFor="title">Post title:</label>
                    <input type="text" id="title" name="title"/>
                    <label htmlFor="img">Image:</label>
                    <input type="text" id="img" name="img"/>
                    <label htmlFor="description">Post description:</label>
                    <textarea name="description" id="description" />
                    <input className="btn" type="submit" value="Add Post"/>
                    <button onClick={(e)=>{e.preventDefault();navigate((`/`))}} className="btn">Go back</button>
                </div>
            </form>
        </section>
        </>
    );
};