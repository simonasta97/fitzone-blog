import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import style from './PostEdit.module.css';

import * as postService from '../../services/postService';
import { PostContext } from "../../contexts/PostContext";
import Header from "../Header";

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
            <Header />
            <section id="edit-page" className="auth">
                <form id="edit" className={style.createForm} onSubmit={onSubmit}>
                    <div>
                        <h3 className={style.editHeading}>Edit Post:</h3>
                        <label htmlFor="title">Post title:</label>
                        <input type="text" id="title" name="title" defaultValue={currentPost.title} />
                        
                        <label htmlFor="img">Image:</label>
                        <input type="text" id="img" name="img" defaultValue={currentPost.img} />
                        <label htmlFor="description">Post description:</label>
                        <textarea name="description" id="description" defaultValue={currentPost.description} />
                        <input className="btn" type="submit" value="Edit Post" />
                        <button onClick={(e)=>{e.preventDefault();navigate((`/details/${postId}`))}}>Go back</button>
                    </div>
                </form>
            </section>
        </>
    );
}