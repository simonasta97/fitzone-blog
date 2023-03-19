import { useNavigate } from 'react-router';

import style from './Register.module.css';
import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Register = ({ auth }) => {
    const navigate = useNavigate();
    useEffect(() => { document.getElementById('register').classList.add('active') }, [])

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const email = formData.get('email');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        if (password !== confirmPassword) {
            return;
        }

        authService.register(email, password)
            .then(authData => {
                auth.userLogin(authData);
                navigate('/');
            });
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
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="pass">Password:</label>
                                                <input type="password" name="password" className="form-control mt-1" id="register-password" placeholder="Enter password" />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="con-pass">Confirm Password:</label>
                                                <input type="password" name="confirm-password" className="form-control mt-1" id="confirm-password" placeholder="Enter password" />
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