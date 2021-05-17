import React, { useState } from 'react'
import firebase from 'firebase'

function SignIn() {
    const [credentials, setCredentials] = useState({ email: "", pwd: "" })
    const [user, setUser] = useState()
    const onSignIn = (e) =>
        e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.pwd)
        .then((userCredential) => {
            // Signed in
            var user_ = userCredential.user;
            setUser(user_)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
    return (
        <>
            < div style={{
                width: "400px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "flex", flexDirection: "column",
                border: "2px solid #333",
                padding: "20px",
                borderRadius: "8px"

            }} >
                <form className="form-signin" >
                    <h3>Sign In </h3>
                    <input type="email" id="inputEmail" className="form-control mt-3 mb-3"
                        placeholder="Email address" required="" autoFocus="" />
                    <input type="password" id="inputPassword" className="form-control mt-3 mb-5"
                        placeholder="Password" required="" />
                    <button onClick={(e) => onSignIn(e)} className="btn btn-success btn-block mt-4 mb-1" type="submit">
                        Sign in
                    </button>
                    <a href='/reset-password' style={{ textAlign: 'right' }}>Forgot Password?</a>
                    <a href='/signup' className="btn btn-primary btn-block mt-5 mb-3" type="button" id="btn-signup">
                        Sign up New Account
                </a>
                </form>
            </div >
        </>
    )
}
export default SignIn

