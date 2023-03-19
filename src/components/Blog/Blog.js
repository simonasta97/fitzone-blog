import Header from "../Header";
import { useContext, useEffect } from 'react';

import { PostContext } from '../../contexts/PostContext'
import { Post } from './Post';

export default function Blog(){
    const { posts } = useContext(PostContext)
    useEffect(()=>{document.getElementById('blog').classList.add('active')},[])
    return(
        <>
            <Header />
            <section id="nutrition">
                <div id="main">
                    <div id="content">
                        <div className="box">
                            <div className="head_catalog">
                                <h2>BLOG Posts</h2>
                            </div>
                            {posts.length > 0
                                ? posts.map(post => <Post key={post._id} post={post} />)
                                : <h3>THERE'S NO MOVIES TO SHOW</h3>
                            }
                            <div className="head_catalog">
                                <h2>COME BACK LATER FOR MORE!</h2>
                            </div>
                        </div>
                    </div>
                    <div className="cl">&nbsp;</div>
                </div>
            </section>
        </>
    );
}