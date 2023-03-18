import { useContext,useEffect } from 'react';
import { PostContext } from "../../contexts/PostContext";
import Header from "../Header";
import { LatestPosts } from './LatestPosts';
import About from "../About/About";

export default function Home(){
    const { posts } = useContext(PostContext)
    useEffect(()=>{document.getElementById('home').classList.add('active')},[])
    let postsLength = posts.length;
    let latestPosts = posts.slice(postsLength-3,postsLength)
    return (
        <>
            <Header />
            <About />
            <section id="nutrition">
                <div className="container">
                    <div className="row">
                        {latestPosts.length > 0
                            ? latestPosts.map(post => <LatestPosts key={post._id} post={post} />)
                            : <h3>THERE'S NO POSTS TO SHOW!</h3>
                        }
                    </div>
                </div>
            </section>
        </>
    );
}