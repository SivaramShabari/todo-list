import { React, useEffect, useState } from 'react'
import firebase from 'firebase'
import axios from "axios"
function User(props) {
    const [userId, setUserId] = useState("nouser")
    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                setUserId("nouser")
            }
        });
        return () => { }
    })
    const signOutUser = () => {
        firebase.auth().signOut()
            .then(
                () => {
                    alert("Logged out successfully!")
                    window.location.href = "/"
                }
            ).catch(err => alert("Failed"))
    }
    return (
        <div>
            {
                userId === "nouser" ?
                    <div>
                        SignIn to continue
                </div>
                    :
                    <div className="container">
                        <h2>Hello {props.name}</h2>
                        <div>Please verify you mail id <a href="#">here</a></div>
                        <button className="btn btn-dark" onClick={signOutUser}>Logout</button>
                    </div>
            }
        </div>
    )
}

export default User
