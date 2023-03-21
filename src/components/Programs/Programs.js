import Header from "../Header";

export default function Programs(){
    return(
        <>
            <Header />
            <section id="features">
                <div className="container">
                    <h2>Our fitness programs</h2>
                    <p className="lead">workout programs for every body</p>

                    <div className="row">
                        <div className="col-sm-4">
                            <div className="feature_item">
                                <span className="flaticon flaticon-running"></span>
                                <h3>Weight Programs</h3>
                                <p>Family Healthy Weight Programs are one way to address childhood obesity. The programs focus on nutrition, physical activity, and behavior ...</p>

                                <a href="#about" className="btn know_btn">Know More</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="feature_item">
                                <span className="flaticon flaticon-yoga-mat"></span>
                                <h3>For beginners</h3>
                                <p>For a beginner's workout to be effective, the full-body program should incorporate high-volume training, increased intensity.</p>

                                <a href="#about" className="btn know_btn">Know More</a>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="feature_item">
                                <span className="flaticon flaticon-weightlifting"></span>
                                <h3>Building Muscles</h3>
                                <p>Building muscle means more than going to the gym. It means lifting the right way, eating the right way, and resting the right way.</p>

                                <a href="#about" className="btn know_btn">Know More</a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}