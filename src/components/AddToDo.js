import React, { useState } from 'react'
import axios from 'axios'
function AddToDo() {
    const [userDetails, setUserDetails] = useState({ name: "sivaram", img: "img" })

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/note', userDetails)
            .then(res => {
                console.log(userDetails)
                alert("Created a ToDo list")
                window.location.reload()
            })
            .catch(err => alert("Posting unsuccessful"))
    }
    return (
        <div>
            <button type="button" className="btn btn-dark m-2" data-toggle="modal" data-target="#exampleModal">
                Add something that you have "TODO"
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Create Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input type="text" onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Label</label>
                                    <input type="text" onChange={(e) => setUserDetails({ ...userDetails, label: e.target.value })} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Notes</label>
                                    <input type="text" onChange={(e) => setUserDetails({ ...userDetails, notes: e.target.value })} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Due date</label>
                                    <input type="date" onChange={(e) => setUserDetails({ ...userDetails, date: e.target.value })} className="form-control mb-2" required />
                                    <input type="time" className="form-control" required />

                                </div>
                                <button type="submit" data-toggle="modal" data-target="#exampleModal"
                                    className="btn btn-primary mt-3 mb-4" onClick={(e) => onSubmit(e)} >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddToDo
