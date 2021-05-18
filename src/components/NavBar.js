import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import firebase from "firebase"
function NavBar(props) {
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
    return (
        <>
            <div className='' style={{ marginBottom: "10px", borderBottom: "2px solid #ddd", paddingLeft: '0', paddingRight: '50px', fontSize: '19px' }}>
                <div className='container navbar-light '>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="navbar-brand"  >Todo Lists </div>
                        <div className=' ml-auto'>
                            <button className="navbar-toggler "
                                type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <Link to='/' className="nav-link" href="/"  >Home</Link>
                                    </li>
                                    <li className="nav-item ">
                                        <Link to='/archive' className="nav-link">Archived</Link>
                                    </li>
                                    {
                                        userId === "nouser" ?
                                            <div>
                                                <li className="nav-item">
                                                    <Link to='/signin' className="nav-link"   >SignIn</Link>
                                                </li>
                                            </div> :
                                            <div>
                                                <Link to='/user' className="nav-link">{props.name}</Link>
                                            </div>
                                    }
                                    <li className="nav-item">
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div >
            </div>
        </>
    )
}

export default NavBar
