import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './ProgramAdd.module.css';
import { ProgramContext } from '../../contexts/ProgramContext';
import * as programService from '../../services/programService';
import Header from '../Header';

export const ProgramAdd = () => {
    const { programsAdd } = useContext(ProgramContext);
    const navigate=useNavigate()
    useEffect(()=>{document.getElementById('addProgram').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const programsData = Object.fromEntries(new FormData(e.target));

        programService.create(programsData)
            .then(result => {
                programsAdd(result)
                navigate('/programs')
            });
    };

    return (
        <>
            <Header />
            <section id="features">
                <form id="create" onSubmit={onSubmit} className={style.createForm}>
                    <h2>Add NEW PROGRAM</h2>
                    <label htmlFor="title">Program Title:</label>
                    <input type="text" id="title" name="title" />
                    <label htmlFor="videoUrl">VideoUrl:</label>
                    <input type="text" id="videoUrl" name="videoUrl" />
                    <label htmlFor="description">Program description:</label>
                    <textarea name="description" id="description" />
                    <input name="Create" type="submit" value="Add Program" />
                </form>
            </section>
        </>
    );
};