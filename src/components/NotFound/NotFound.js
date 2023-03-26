export const NotFound = () => {
    return (
        <header id="home">
        <div id="carousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="item active">
                    <img src="images/coaches_bg.jpg" alt="Strong Body" />
                    <div className="carousel-caption photo_overlay">
                        <div className="container">
                            <div className="carousel_caption_inner">
                                <h3>Page Not Found</h3>
                                <h1>404</h1>

                                <p>The page you are looking for is temporarily unavailable.</p>						
                            </div>						
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
}