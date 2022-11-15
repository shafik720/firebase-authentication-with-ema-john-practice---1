import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        
                        <div className=" form-div ">
                        <h2>Log In</h2>
                            <form action="">
                                <div className="email-field">
                                    <p>Email :</p>
                                    <input type="email" name="" id=""/>
                                </div>
                                <div className="password-field">
                                    <p>Password :</p>
                                    <input type="password" name="" id=""/>
                                </div>
                                <button>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;