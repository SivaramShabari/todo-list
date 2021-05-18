import React, { useState } from 'react'
import firebase from 'firebase'
import { Link } from 'react-router-dom'
function SignIn() {
    const [credentials, setCredentials] = useState({ email: "", pwd: "" })
    const [user, setUser] = useState(null)
    const onSignIn = e => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.pwd)
            .then((userCredential) => {
                // Signed in
                var user_ = userCredential.user;
                setUser(user_)
                window.location.href = "/"
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
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
                    <input type="email" className="form-control mt-3 mb-3" placeholder="Email address"
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} />
                    <input type="password" className="form-control mt-3 mb-5"
                        placeholder="Password"
                        onChange={(e) => setCredentials({ ...credentials, pwd: e.target.value })} />
                    <button onClick={(e) => onSignIn(e)} className="btn btn-success btn-block mt-4 mb-1" type="submit">
                        Sign in
                    </button>
                    <a href='#' style={{ textAlign: 'right' }}>Forgot Password?</a>
                    <Link to='/signup' className="btn btn-primary btn-block mt-5 mb-3" type="button" >
                        Sign up New Account
                </Link>
                </form>
            </div >
        </>
    )
}
export default SignIn

