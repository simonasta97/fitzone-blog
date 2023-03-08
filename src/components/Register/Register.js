import { useNavigate } from 'react-router';

import * as authService from "../../services/authService";
import { withAuth } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';



const Register = ({ auth }) => {
    const navigate = useNavigate();

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
                                <section id="register-page" className="content auth">
                                    <form id="register" onSubmit={onSubmit}>
                                        <div className="container">
                                            <div className="brand-logo" />
                                            <h1>Register</h1>
                                            <label htmlFor="email">Email:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="maria@email.com"
                                            />
                                            <label htmlFor="pass">Password:</label>
                                            <input type="password" name="password" id="register-password" />
                                            <label htmlFor="con-pass">Confirm Password:</label>
                                            <input type="password" name="confirm-password" id="confirm-password" />
                                            <input className="btn submit" type="submit" defaultValue="Register" />
                                            <p className="field">
                                                <span>
                                                    If you already have profile click <Link to="/login">here</Link>
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
};

export const RegisterWithAuth = withAuth(Register);