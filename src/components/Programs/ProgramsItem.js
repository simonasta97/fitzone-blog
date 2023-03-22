import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ProgramContext } from "../../contexts/ProgramContext"
import * as programService from '../../services/programService'

export const ProgramsItem = ({ programs }) => {
    const { user } = useContext(AuthContext);
    const { programsRemove } = useContext(ProgramContext);
    const navigate = useNavigate();

    const programsDeleteHandler = () => {
        const confirmation = window.confirm('Are you sure you want to delete this program?');
        if (confirmation) {
            programService.remove(programs._id)
                .then(() => {
                    programsRemove(programs._id);
                    navigate('/programs');
                })
        }
    }
    return (
        <div className="col-sm-4">
            <div className="feature_item">
                <span className="flaticon flaticon-weightlifting"></span>
                <h3>{programs.title}</h3>
                <p>{programs.description}</p>
                <a href={programs.videoUrl} className="btn know_btn">Know More</a>
                {user.email === 'admin@abv.bg'
                    ? <div className="programs_btn">
                        <button onClick={(e) => { e.preventDefault(); navigate((`/programs/${programs._id}/edit`)) }} className="btn btn-warning">Edit</button>
                        <button onClick={programsDeleteHandler} className="btn btn-danger">Delete</button>
                    </div>
                    : null
                }
            </div>
        </div>
    )
}
