import React, { useState, useEffect } from 'react'
import firebase from "firebase"
import axios from 'axios'
import moment from 'moment'
function SignUp() {
    const [credentials, setCredentials] = useState({ email: "", pwd: "", name: "", pwd2: " " })
    const [creds, setCreds] = useState(null)
    const [isUserCreated, setIsUserCreated] = useState(false)
    const [isNotesCreated, setIsNotesCreated] = useState(false)

    const onSignUp = (e) => {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.pwd)
            .then((userCredential) => {
                setCreds(userCredential.user)
                console.log("UID:::", userCredential.user.uid)
                setIsUserCreated(true)
                alert("User Created")
                return axios.all([
                    axios.post('htttp://localhost:3001/note', {
                        "uid": userCredential.user.uid.trim().toString(),
                    }),
                    axios.post('http://localhost:3001/user', {
                        "uid": userCredential.user.uid.trim().toString(),
                        "name": credentials.name.trim().toString(),
                        "email": credentials.email.trim().toString(),
                        "createdAt": moment().format("YYYY-MM-DD").toString()
                    })
                ]).then(axios.spread((data1, data2) => {
                    // output of req.
                    console.log('data1:', data1, 'data2:', data2)
                    console.log("Success", data1, data2)
                    alert("User created succcessfully")
                    window.location.href = '/'
                })).catch(axios.spread((d1, d2) => { console.log("Error", d1, d2); alert("Error") }));
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert(errorMessage)
            });
    }





    const isValidCredentials = () => {
        if (credentials.pwd === credentials.pwd2 && credentials.pwd > 7 && credentials.name.length > 3 && validateEmail(credentials.email)) {
            return (true)
        }
        else {
            return (false)
        }
    }
    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return (
        <div className="sign-up-form col-6 container p-3" style={{ border: "2px solid #ccc", borderRadius: "10px" }} >
            <h3>Signup</h3>
            <div id="sign-up-form-class" >
                <form className="form-signup xwqa">
                    <input type="text" onChange={(e) => setCredentials({ ...credentials, name: e.target.value })} className="form-control mt-4 mb-3 " placeholder="Full name" required autoFocus="" />
                    <input type="email" onChange={(e) => setCredentials({ ...credentials, email: e.target.value })} className="form-control mb-3" placeholder="Email address" required autoFocus="" />
                    <input type="password" onChange={(e) => setCredentials({ ...credentials, pwd: e.target.value })} className="form-control mb-3" placeholder="Password" required autoFocus="" />
                    <input type="password" onChange={(e) => setCredentials({ ...credentials, pwd2: e.target.value })} className="form-control mb-3" placeholder="Repeat Password" required autoFocus="" />
                    {isValidCredentials() ?
                        <button className="btn btn-primary btn-block" onClick={(e) => onSignUp(e)} >
                            <i className="fas fa-user-plus"></i> Sign Up</button>
                        :
                        <div>
                            <button className="btn btn-primary disabled btn-block" > Sign Up</button>
                            <small className=" text-danger">
                                Please fill all the fields with correct formatting. Password should be longer than 7 characters. Name should be longer than 3 characters.
                            </small>
                        </div>
                    }

                </form>
            </div >
        </div>
    )
}
export default SignUp
