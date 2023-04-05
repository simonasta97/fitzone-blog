// React, Hooks
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Context
import { ProgramContext } from '../../contexts/ProgramContext';

// CSS
import style from './ProgramAdd.module.css';

// Services
import * as programService from '../../services/programService';

// Components
import Header from '../Header';

export const ProgramAdd = () => {
    const [errors, setErrors] = useState({
        titleTxt: null,
        mainImgTxt: null,
        descTxt: null,
    });
    const [isCorrect, setIsCorrect] = useState(false);
    const { programsAdd } = useContext(ProgramContext);
    const navigate=useNavigate()

    const onSubmit = (e) => {
        e.preventDefault();

        const programsData = Object.fromEntries(new FormData(e.target));

        if (isCorrect) {
            programService.create(programsData)
                .then(result => {
                    programsAdd(result)
                    navigate('/programs')
                });
        }
    };

    function FormErrorVal(e) {
        const { name, value } = e.target;
        switch (name) {
            case "title":
                if (!value) {
                    setErrors((state) => ({
                        ...state,
                        titleTxt: "Title is required",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, titleTxt: false }));
                    setIsCorrect(true);
                }
                break;
            case "videoUrl":
                let videoRegex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$/gmi;
                if (!videoRegex.test(value)) {
                    setErrors((state) => ({
                        ...state,
                        videoTxt: "Video URL is invalid!",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, videoTxt: false }));
                    setIsCorrect(true);
                }
                break;
            case "description":
                if (value.length < 10) {
                    setErrors((state) => ({
                        ...state,
                        descTxt: "Description must be at least 10 characters long",
                    }));
                    setIsCorrect(false);
                } else {
                    setErrors((state) => ({ ...state, descTxt: false }));
                    setIsCorrect(true);
                }
                break;
            default:
                break;
        }
    }

    return (
        <>
            <Header />
            <section id="features">
                <form id="create" onSubmit={onSubmit} className={style.createForm}>
                    <h2>Add NEW PROGRAM</h2>
                    <label htmlFor="title">Program Title:</label>
                    <p className={errors.titleTxt ? style.error : style.hidden}>
                        {errors.titleTxt}
                    </p>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        placeholder="Title of the program" 
                        onBlur={FormErrorVal}
                    />
                    <label htmlFor="videoUrl">VideoUrl:</label>
                    <p className={errors.videoTxt ? style.error : style.hidden}>
                        {errors.videoTxt}
                    </p>
                    <input 
                        type="text" 
                        id="videoUrl" 
                        name="videoUrl" 
                        placeholder="Enter youtube video url" 
                        onBlur={FormErrorVal}
                    />
                    <label htmlFor="description">Program description:</label>
                    <p className={errors.descTxt ? style.error : style.hidden}>
                        {errors.descTxt}
                    </p>
                    <textarea 
                        name="description" 
                        id="description" 
                        placeholder="Enter a description" 
                        onBlur={FormErrorVal}
                    />
                    <input name="Create" type="submit" value="Add Program" />
                </form>
            </section>
        </>
    );
};