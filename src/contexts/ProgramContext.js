import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as programService from '../services/programService';

export const ProgramContext = createContext();

const programsReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PROGRAMS':
            return action.payload.map(x => ({ ...x}));
        case 'ADD_PROGRAM':
            return [...state, action.payload];
        case 'FETCH_PROGRAM_DETAILS':
        case 'EDIT_PROGRAM':
            return state.map(x => x._id === action.programId ? action.payload : x);
        case 'REMOVE_PROGRAM':
            return state.filter(x => x._id !== action.programId);
        default:
            return state;
    }
};

export const ProgramsProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [programs, dispatch] = useReducer(programsReducer, []);

    useEffect(() => {
        programService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_PROGRAMS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectPrograms = (programId) => {
        return programs.find(x => x._id === programId) || {};
    };

    const fetchProgramsDetails = (programId, programsDetails) => {
        dispatch({
            type: 'FETCH_PROGRAM_DETAILS',
            payload: programsDetails,
            programId,
        })
    };
    const programsAdd = (programData) => {
        dispatch({
            type: 'ADD_PROGRAM',
            payload: programData,
        })

        navigate('/programs');
    };

    const programsEdit = (programId, programData) => {
        dispatch({
            type: 'EDIT_PROGRAM',
            payload: programData,
            programId,
        });
    };

    const programsRemove = (programId) => {
        dispatch({
            type: 'REMOVE_PROGRAM',
            programId
        })
    }
    return (
        <ProgramContext.Provider value={{
            programs,
            programsAdd,
            programsEdit,
            fetchProgramsDetails,
            selectPrograms,
            programsRemove
        }}>
            {children}
        </ProgramContext.Provider>
    );
}