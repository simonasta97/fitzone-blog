// React, Hooks
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

// Context
import { withAuth } from "../../contexts/AuthContext";
import { NotificationContext } from "../../contexts/NotificationContext";

// Services
import * as authService from "../../services/authService";

// CSS
import style from './Register.module.css';


const Register = ({ auth }) => {
    const [errors, setErrors] = useState({
        emailTxt: null,
        passTxt: null,
        rePassTxt: null,
    });
    const [isCorrect, setIsCorrect] = useState(true);
    const { addNotification } = useContext(NotificationContext);
    const navigate = useNavigate();
    useEffect(() => { document.getElementById('register').classList.add('active') }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            setErrors((state) => ({
                ...state,
                rePassTxt: "Passwords do not match",
            }));
            return;
        }

        if (isCorrect) {
            authService.register(email, password)
                .then((authData) => {
                    if (authData === "409") {
                        addNotification("User already exists");
                    } else if (authData === "400") {
                        throw authData;
                    } else {
                        auth.userLogin(authData);
                        navigate('/');
                    }
                });
        }
    }

    function FormErrorVal(e) {
        const { name, value } = e.target;
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

        switch (name) {
            case "email":
                if (emailRegex.test(value)) {
                    setErrors((state) => ({ ...state, emailTxt: false }));
                    setIsCorrect(true);
                } else {
                    setErrors((state) => ({
                        ...state,
                        emailTxt: "Email address is invalid",
                    }));
                    setIsCorrect(false);
                }
                break;
            case "password":
                value.length < 6
                    ? setErrors((state) => ({
                        ...state,
                        passTxt: "Must be at least 6 characters",
                    }))
                    : setErrors((state) => ({ ...state, passTxt: false }));
                break;
            case "confirmPassword":
                !value
                    ? setErrors((state) => ({
                        ...state,
                        rePassTxt: "ConfirmPassword password is required",
                    }))
                    : setErrors((state) => ({ ...state, rePassTxt: false }));
                break;
            default:
                break;
        }
    }

    return (
        <>
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                        <img src="images/slider_img.jpg" alt="Strong Body" />
                        <div className="carousel-caption photo_overlay">
                            <div className="container">
                                <div className="carousel_caption_inner">
                                    <form className={style.authForm} onSubmit={onSubmit}>
                                        <div className={style.authFormContent}>
                                            <h1>Register</h1>
                                            <div className="form-group mt-3">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    className="form-control mt-1"
                                                    name="email"
                                                    placeholder="Enter email"
                                                    onBlur={FormErrorVal}
                                                />
                                                <p className={errors.emailTxt ? "error" : "hidden"}>
                                                    {errors.emailTxt}
                                                </p>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="pass">Password:</label>
                                                <input 
                                                    type="password" 
                                                    name="password" 
                                                    className="form-control mt-1" 
                                                    id="register-password" 
                                                    placeholder="Enter password"
                                                    onBlur={FormErrorVal}
                                                />
                                                <p className={errors.passTxt ? "error" : "hidden"}>
                                                    {errors.passTxt}
                                                </p>
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="con-pass">Confirm Password:</label>
                                                <input 
                                                    type="password" 
                                                    name="confirm-password" 
                                                    className="form-control mt-1" 
                                                    id="confirm-password" 
                                                    placeholder="Enter password"
                                                    onBlur={FormErrorVal}
                                                />
                                                <p className={errors.rePassTxt ? "error" : "hidden"}>
                                                    {errors.rePassTxt}
                                                </p>
                                            </div>
                                            <div className="d-grid gap-2 mt-3">
                                                <input className="btn btn-primary" type="submit" value="Sign up" />
                                            </div>
                                            <p className="field">
                                                <span>
                                                    If you already have profile click <Link to="/login">here</Link>
                                                </span>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export const RegisterWithAuth = withAuth(Register);