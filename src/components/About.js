export default function About(){
    return(
        <section id="about">
            <div className="container">
                <div className="row">

                    <div className="col-md-9">
                        <div className="about_content">
                            <img src="images/about_img.jpg" alt="" className="about_img" />
                            <h2>Ut enim ad minima veniam</h2>

                            <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque. Massa sit sociis sapien. Rhoncus eu adipiscing integer laoreet a ante metus vidi massa. Aenean eleifend. Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum neque.</p>

                            <a href="#about" className="btn know_btn">SIGN UP</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="yoga_content">
                            <div className="yoga">
                                <h3>Yoga <span>&xlarr;</span></h3>
                                <p>Vici nisi etiam orci faucibus felis justo sem cras viverra sociis rutrum</p>

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
    );
}