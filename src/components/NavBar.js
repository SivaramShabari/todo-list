import React from 'react'
import { Link } from 'react-router-dom'
function NavBar() {
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
                                    <li className="nav-item">
                                        <Link to='/signin' className="nav-link"   >User</Link>
                                    </li>
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
