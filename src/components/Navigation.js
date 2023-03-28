// React, Hooks
import { Link } from "react-router-dom";

// Context
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
                            <>
                                <li><span>Hello, {user.email}</span></li>
                                <li><Link id='create' to="/create">ADD POST</Link></li>
                                {user.email === 'admin@abv.bg'
                                    ? <li><Link  id='addProgram' to="/addProgram">ADD PROGRAM</Link></li>
                                    : null
                                }
                                <li><Link to="/logout">LOGOUT</Link></li>
                            </>

                            :
                            <>
                                <li><Link id='login' to="/login">LOGIN</Link></li>
                                <li><Link id='register' to="/register">REGISTER</Link></li>
                            </>
                        }
                    </ul>

                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#nav">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>					
                </div>

                <div className="collapse navbar-collapse navbar-right" id="nav" >
                    <ul className="nav">
                        <li role="presentation"><Link id='home' to="/">Home</Link></li>
                        <li role="presentation"><Link id='blog' to="/blog">Blog</Link></li>
                        <li role="presentation"><Link id='programs' to="/programs">Fitness Programs</Link></li>
                        <li role="presentation"><Link to="/coaches">Coaching</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}