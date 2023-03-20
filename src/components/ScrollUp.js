import { Link } from "react-router-dom";

export default function ScrollUp(){
    return(
        <div className="scrollup">
            <Link to="/"><i className="fa fa-chevron-up"></i></Link>
        </div>
    );
}