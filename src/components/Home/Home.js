import { Link } from "react-router-dom";
import { useContext } from 'react';
import { PostContext } from "../../contexts/PostContext";
import Header from "../Header";
import { LatestPosts } from './LatestPosts';

export default function Home(){
    const { posts } = useContext(PostContext)
    return(
        <>
            <Header/>
            <section id="about">
                <div className="container">
                    <div className="row">

                        <div className="col-md-9">
                            <div className="about_content">
                                <img src="images/about_img.jpg" alt="" className="about_img" />
                                <h2>We help people all over the world live a healthier Life!</h2>

                                <p>The hardest part of improving your fitness and nutrition is finding someone that understands why you struggle. Get our science-backed tips on how to live a healthier life.</p>

                                <Link to="/register" className="btn know_btn">SIGN UP</Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="yoga_content">
                                <div className="yoga">
                                    <h3>Fitzone BLOG</h3>
                                    <p>REAL talk, recipes, & more!</p>
                                    <a href="#about" className="btn know_btn">READ THE BLOG</a>
                                </div>
                                <div className="yoga_banner">
                                    <img src="images/yoga_img.jpg" alt="Yoga" className="yoga_img" />
                                    <div className="photo_overlay"></div>
                                </div>					
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="nutrition">
                <div className="container">
                    <div className="row">
                        {posts.map(post => <LatestPosts key={post._id} post={post} />)}
                    </div>
                </div>
            </section>
        </>
    );
}