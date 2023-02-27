export default function Navigation(){
    return (
        <nav className="navbar navbar-default">
            <div className="container">

                <div className="navbar-header">
                    <a href="#"><img src="images/fitness.png" alt="Fitness" /></a>

                    <ul className="list-inline contact_info">
                        <li><a href=""><span className="fa fa-envelope"></span><p>hello@PSDFreebies.com</p></a></li>
                        <li><a href=""><span className="fa fa-phone"></span><p>85 26 37 48 59</p></a></li>
                        <li><a href=""><span className="fa fa-clock-o"></span><p>Mon - Sat : 9AM - 6PM</p></a></li>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>					
                </div>

                <div className="collapse navbar-collapse navbar-right" id="nav" >
                    <ul className="nav">
                        <li role="presentation"><a href="#home">Home</a></li>
                        <li role="presentation"><a href="#about">About</a></li>
                        <li role="presentation"><a href="#features">Company</a></li>
                        <li role="presentation"><a href="#service">Our Services</a></li>
                        <li role="presentation"><a href="#coaches">Recent News</a></li>
                        <li role="presentation"><a href="#contact">Contact us</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}