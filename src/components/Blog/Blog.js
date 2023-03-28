// React, Hooks
import { useContext, useEffect } from 'react';

// Context
import { PostContext } from '../../contexts/PostContext'

// CSS
import style from './Blog.module.css';

// Components
import Header from "../Header";
import { Post } from './Post';

export default function Blog() {
    const { posts } = useContext(PostContext)
    useEffect(() => { document.getElementById('blog').classList.add('active') }, [])
    return (
        <>
            <Header />
            <section id="nutrition">
                <div className="container">
                        <div className={style.box}>
                            <h2 className={style.title}>BLOG Posts</h2>
                        </div>
                        <div className="row">
                            {posts.length > 0
                                ? posts.map(post => <Post key={post._id} post={post} />)
                                : <h3>THERE'S NO POST TO SHOW</h3>
                            }
                        </div>
                        <div className={style.box}>
                            <h2 className={style.title}>Come back later for more!</h2>
                        </div>
                </div>
            </section>
        </>
    );
}