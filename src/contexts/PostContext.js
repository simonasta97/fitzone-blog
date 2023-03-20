import { createContext, useReducer, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as postService from '../services/postService';

export const PostContext = createContext();

const postReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POSTS':
            return action.payload.map(x => ({ ...x, comments: []}));
        case 'ADD_POST':
            return [...state, action.payload];
        case 'FETCH_POST_DETAILS':
        case 'EDIT_POST':
            return state.map(x => x._id === action.postId ? action.payload : x);
        case 'ADD_COMMENT':
            return state.map(x => x._id === action.postId ? { ...x, comments: [...x.comments, action.payload] } : x);
        case 'REMOVE_POST':
            return state.filter(x => x._id !== action.postId);
        default:
            return state;
    }
};

export const PostProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [posts, dispatch] = useReducer(postReducer, []);

    useEffect(() => {
        postService.getAll()
            .then(result => {
                const action = {
                    type: 'ADD_POSTS',
                    payload: result
                };

                dispatch(action);
            });
    }, []);

    const selectPost = (postId) => {
        return posts.find(x => x._id === postId) || {};
    };

    const fetchPostDetails = (postId, postDetails) => {
        dispatch({
            type: 'FETCH_POST_DETAILS',
            payload: postDetails,
            postId,
        })
    };

    const postAdd = (postData) => {
        dispatch({
            type: 'ADD_POST',
            payload: postData,
        })

        navigate('/blog');
    };

    const postEdit = (postId, postData) => {
        dispatch({
            type: 'EDIT_POST',
            payload: postData,
            postId,
        });
    };

    const postRemove = (postId) => {
        dispatch({
            type: 'REMOVE_POST',
            postId
        })
    }

    const addComment = (postId, comment) => {
        dispatch({
            type: 'ADD_COMMENT',
            payload: comment,
            postId
        });
    }

    return (
        <PostContext.Provider value={{
            posts,
            postAdd,
            postEdit,
            addComment,
            fetchPostDetails,
            selectPost,
            postRemove
        }}>
            {children}
        </PostContext.Provider>
    );
}