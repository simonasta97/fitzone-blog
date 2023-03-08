import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function Navigation(){
    const { user } = useAuthContext();
    return (
        <nav className="navbar navbar-default">
            <div className="container">

                <div className="navbar-header">
                    <Link to="/"><img src="images/fitness.png" alt="Fitness" /></Link>

                    <ul className="list-inline contact_info">
                        {user.email
                            ? 
                                <><li><span>Hello, {user.email}</span></li>
                                <li><Link to="/logout">LOGOUT</Link></li></>
                                
                            : <li><Link to="/login">SIGN IN</Link></li>
                        }
                        {/* <li><Link to="/login"><span className="fa fa-envelope"></span><p>SIGN IN</p></Link></li> */}
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