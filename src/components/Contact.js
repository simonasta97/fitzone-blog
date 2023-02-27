export default function Contact(){
    return(
        <footer id="contact">
            <div className="white_shape"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about_us">
                            <div className="about_us_content">
                                <img src="images/footer_logo.png" alt="Fitness" />
                                <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quasoa molestias excepturi sintal occaecati cupiditate non provident similique sunt.</p>						
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right quick_link">
                            <h3>Quick Links</h3>
                            <ul className="list-unstyled footer_menu">
                                <li role="presentation"><a href="#">Home</a></li>
                                <li role="presentation"><a href="#about">About</a></li>
                                <li role="presentation"><a href="#company">Company</a></li>
                                <li role="presentation"><a href="#services">Our Services</a></li>
                                <li role="presentation"><a href="#service">Service</a></li>
                                <li role="presentation"><a href="#location">Location</a></li>
                                <li role="presentation"><a href="#news">Recent News</a></li>
                                <li role="presentation"><a href="#contact">Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="footer_right">
                            <h3>Contact Us</h3>
                            <ul className="list-unstyled footer_contact_info">
                                <li><a href=""><span className="fa fa-map-marker"></span><p>hello@PSDFreebies.com</p></a></li>
                                <li><a href=""><span className="fa fa-phone"></span><p>85 26 37 48 59</p></a></li>
                                <li><a href=""><span className="fa fa-envelope"></span><p>Mon - Sat : 9AM - 6PM</p></a></li>
                            </ul>

                            <ul className="list-inline social">
                                <li><a href="" className="fa fa-facebook"></a></li>
                                <li><a href="" className="fa fa-twitter"></a></li>
                                <li><a href="" className="fa fa-linkedin"></a></li>
                                <li><a href="" className="fa fa-youtube"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center">
                    <p className="wow fadeInRight" data-wow-duration="1s">
                        Made with 
                        <i className="fa fa-heart"></i>
                        by 
                        <a target="_blank" href="http://bootstrapthemes.co">Bootstrap Themes</a> 
                        2016. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
}