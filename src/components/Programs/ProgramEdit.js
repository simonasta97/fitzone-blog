import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import style from './ProgramAdd.module.css';
import { ProgramContext } from '../../contexts/ProgramContext';
import * as programService from '../../services/programService';

export const ProgramEdit = () => {
    const [currentProgram, setCurrentPrograms] = useState({});
    const { programsEdit } = useContext(ProgramContext);
    const { programId } = useParams();
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('programs').classList.add('active')},[])

    useEffect(() => {
        programService.getOne(programId)
            .then(programsData => {
                setCurrentPrograms(programsData);
            })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const programsData = Object.fromEntries(new FormData(e.target));

        programService.edit(programId, programsData)
            .then(result => {
                programsEdit(programId, result);
                navigate(`/programs`)
            });
    };

    return (
        <>
            <header id="home">
                <div id="carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <img src="https://m.netinfo.bg/media/images/47307/47307923/orig-orig-pilates.jpg" alt="Strong Body" />
                            <div className="carousel-caption photo_overlay">
                                <div className="container">
                                    <div className="carousel_caption_inner">
                                        <h3>Build Your </h3>
                                        <h1>Body Strong</h1>

                                        <p>Stop Guessing And Stressing About How To Be Healthy! You don't need more confusing information. We've been the trusted voice in fitness and nutrition. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section id="features">
                <form id="edit" onSubmit={onSubmit} className={style.createForm}>
                    <h2>Edit Programs</h2>
                    <label htmlFor="title">Program title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentProgram.title} />

                    <label htmlFor="videoUrl">VideoUrl:</label>
                    <input type="text" id="videoUrl" name="videoUrl" defaultValue={currentProgram.videoUrl} />
                    <label htmlFor="description">Program Description:</label>
                    <textarea name="description" id="description" defaultValue={currentProgram.description} />
                    <input name="Create" type="submit" value="Edit News" />
                </form>
            </section>
        </>
    );
}