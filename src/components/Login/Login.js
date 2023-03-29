// React, Hooks
import { useContext,useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

// Context
import { AuthContext } from "../../contexts/AuthContext";
import { NotificationContext } from '../../contexts/NotificationContext';

// Services
import * as authService from "../../services/authService";

// CSS
import style from './Login.module.css';

export default function Login(){
    const [errors, setErrors] = useState({ emailTxt: null, passTxt: null });
    const { addNotification } = useContext(NotificationContext);
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(()=>{document.getElementById('login').classList.add('active')},[])

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password).then((data) => {
                if (data == "403") {
                    addNotification("Username or password don't match")
                }else{
                    userLogin(data);
                    navigate('/');
                }
            })
    };

    function formErrorVal(e) {
        const { name, value } = e.target;
        let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/gm;

        switch (name) {
            case "email":
                emailRegex.test(value)
                    ? setErrors((state) => ({ ...state, emailTxt: false }))
                    : setErrors((state) => ({
                        ...state,
                        emailTxt: "Email address is invalid",
                    }));
                break;
            case "password":
                !value
                    ? setErrors((state) => ({
                        ...state,
                        passTxt: "Password is required",
                    }))
                    : setErrors((state) => ({ ...state, passTxt: false }));
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
                                    <section id="login-page" className="auth">
                                        <form onSubmit={onSubmit} className={style.authForm}>
                                            <div className={style.authFormContent}>
                                                <h1>Login</h1>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="email">Email:</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control mt-1"
                                                        placeholder="Enter email"
                                                        onBlur={formErrorVal}
                                                        id={errors.emailTxt ? "redInput" : "normalInputEmail"}
                                                    />
                                                    <p className={errors.emailTxt ? style.error : style.hidden}>
                                                        {errors.emailTxt}
                                                    </p>
                                                </div>
                                                <div className="form-group mt-3">
                                                    <label htmlFor="login-pass">Password:</label>
                                                    <input 
                                                        type="password" 
                                                        name="password"
                                                        className="form-control mt-1"
                                                        placeholder="Enter password"
                                                        onBlur={formErrorVal}
                                                        id={errors.passTxt ? "redInput" : "normalInput"}
                                                    />
                                                    <p className={errors.passTxt ? style.error : style.hidden}>
                                                        {errors.passTxt}
                                                    </p>
                                                </div>
                                                <div className="d-grid gap-2 mt-3">
                                                    <input type="submit" className="btn btn-primary" value="Login" />
                                                </div>
                                                <p className="field">
                                                    <span>
                                                        If you don't have profile click <Link to="/register">here</Link>
                                                    </span>
                                                </p>
                                            </div>
                                        </form>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}