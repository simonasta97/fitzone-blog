import Header from "./Header";

export default function Coaches(){
    return(
        <>
            <Header />
            <div id="coaches" className="coaches">
                <div className="container">
                    <div className="coaches_content">
                        <div className="size_120 no_photo coach_item">
                            <h3>Yoga</h3>
                        </div>
                        <div className="size_180 coach_item">
                            <img src="images/coach_img1.png" alt="Coach" />
                        </div>
                        <div className="size_270 coach_item">
                            <img src="images/coach_img2.png" alt="Coach" />
                        </div>
                        <div className="size_110 coach_item">
                            <img src="images/coach_img3.png" alt="Coach" />
                        </div>
                        <div className="size_195 coach_item">
                            <img src="images/coach_img4.png" alt="Coach" />
                        </div>
                        <div className="size_110 no_photo coach_item">
                            <h3>Yoga</h3>
                        </div>
                        <div className="size_135 coach_item">
                            <img src="images/coach_img5.png" alt="Coach" />
                        </div>
                        <div className="size_195 coach_item">
                            <img src="images/coach_img6.png" alt="Coach" />
                        </div>
                        <div className="size_180 coach_item">
                            <img src="images/coach_img7.png" alt="Coach" />
                        </div>
                        <div className="size_180 no_photo coach_item">
                            <h3>Gym</h3>
                        </div>
                        <div className="size_135 coach_item">
                            <img src="images/coach_img8.png" alt="Coach" />
                        </div>
                        <div className="size_195 coach_item">
                            <img src="images/coach_img9.png" alt="Coach" />
                        </div>
                        <div className="size_195 coach_item">
                            <img src="images/coach_img10.png" alt="Coach" />
                        </div>			
                    </div>
                </div>
            </div>
        </>
    );
}