import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <nav className="navbar navbar-default">
            <div className="container">

                <div className="navbar-header">
                    <a href="/"><img src="images/fitness.png" alt="Fitness" /></a>

                    <ul className="list-inline contact_info">
                        <li><a href="/login"><span className="fa fa-envelope"></span><p>SIGN IN</p></a></li>
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>					
                </div>

                <div className="collapse navbar-collapse navbar-right" id="nav" >
                    <ul className="nav">
                        <li role="presentation"><Link to="/">Home</Link></li>
                        <li role="presentation"><Link to="/features">Fitness</Link></li>
                        <li role="presentation"><Link to="/nutrition">Nutrition</Link></li>
                        <li role="presentation"><Link to="/coaches">Recent News</Link></li>
                        <li role="presentation"><Link to="/contact">Contact us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}