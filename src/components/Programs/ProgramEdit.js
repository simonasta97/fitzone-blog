import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';

import style from './ProgramAdd.module.css';
import { ProgramContext } from '../../contexts/ProgramContext';
import * as programService from '../../services/programService';
import Header from '../Header';

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
            <Header />
            <section id="features">
                <form id="edit" onSubmit={onSubmit} className={style.createForm}>
                    <h2>Edit Programs</h2>
                    <label htmlFor="title">Program title:</label>
                    <input type="text" id="title" name="title" defaultValue={currentProgram.title} />

                    <label htmlFor="videoUrl">VideoUrl:</label>
                    <input type="text" id="videoUrl" name="videoUrl" defaultValue={currentProgram.videoUrl} />
                    <label htmlFor="description">Program Description:</label>
                    <textarea name="description" id="description" defaultValue={currentProgram.description} />
                    <input  name="Create" type="submit" value="Edit News" />
                </form>
            </section>
        </>
    );
}