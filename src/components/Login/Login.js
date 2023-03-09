import { useContext } from "react";
import { useNavigate } from "react-router";

import "./Login.css";
import { AuthContext } from "../../contexts/AuthContext";
import * as authService from "../../services/authService";
import { Link } from "react-router-dom";

export default function Login(){
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            email,
            password,
        } = Object.fromEntries(new FormData(e.target));

        authService.login(email, password)
            .then(authData => {
                userLogin(authData);
                navigate('/');
            })
            .catch(() => {
                navigate('/404');
            });
    };

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
                                    <form id="login" onSubmit={onSubmit} className="Auth-form">
                                        <div className="Auth-form-content">
                                            <h1>Login</h1>
                                            <div className="form-group mt-3">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    className="form-control mt-1"
                                                    placeholder="Enter email"
                                                />
                                            </div>
                                            <div className="form-group mt-3">
                                                <label htmlFor="login-pass">Password:</label>
                                                <input type="password" id="login-password" className="form-control mt-1" name="password"  placeholder="Enter password"/>
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