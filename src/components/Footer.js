// React, Hooks
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer id="contact">
            <div className="white_shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_us">
                            <div className="about_us_content">
                                <img src="images/fitness.png" alt="Fitness" />
                                <p>Whether you're just starting your journey or already crushin' it - the FITZONE community is here to sweat with you, support you, and celebrate you through it all.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right quick_link">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled footer_menu">
                                <li role="presentation"><Link to="/">Home</Link></li>
                                <li role="presentation"><Link id='blog' to="/blog">Blog</Link></li>
                                <li role="presentation"><Link to="/programs">Fitness Programs</Link></li>
                                <li role="presentation"><Link to="/coaches">Coaching</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right">
                            <h3>Contact Us</h3>
                            <ul className="list-unstyled footer_contact_info">
                                <li><Link to="/"><span className="fa fa-envelope"></span><p>fitzone_blog@abv.bg</p></Link></li>
                            </ul>

                            <ul className="list-inline social">
                                <li><Link to="/" className="fa fa-facebook"></Link></li>
                                <li><Link to="/" className="fa fa-twitter"></Link></li>
                                <li><Link to="/" className="fa fa-linkedin"></Link></li>
                                <li><Link to="/" className="fa fa-youtube"></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center">
                    <p className="wow fadeInRight" data-wow-duration="1s">
                        Made with
                        <i className="fa fa-heart"></i>
                        by
                        <a target="_blank" rel="noreferrer" href="http://bootstrapthemes.co">Bootstrap Themes</a>
                        2016. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}