import React from 'react'
function SignUp() {
    return (
        <div className="sign-up-form-container">
            <div id="sign-up-form-class" >
                <form className="form-signup xwqa">
                    <input type="text" className="form-control mt-4 mb-3 " placeholder="User name for link share" required autofocus="" />
                    <input type="text" className="form-control mt-4 mb-3 " placeholder="Full name" required autofocus="" />
                    <input type="email" className="form-control mb-3" placeholder="Email address" required autofocus="" />
                    <input type="password" className="form-control mb-3" placeholder="Password" required autofocus="" />
                    <input type="password" className="form-control mb-3" placeholder="Repeat Password" required autofocus="" />
                    <button className="btn btn-primary btn-block" type="submit"><i className="fas fa-user-plus"></i> Sign Up</button>
                    <a href="#" id="cancel_signup"><i className="fas fa-angle-left"></i> Back</a>
                </form>
            </div >
        </div>
    )
}
export default SignUp
