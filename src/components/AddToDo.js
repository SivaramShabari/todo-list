import React, { useState, useEffect } from 'react'
import axios from 'axios'
import firebase from 'firebase'
import moment from 'moment'
function AddToDo() {
    const [Name, setName] = useState()
    const [label, setLabel] = useState()
    const [notes, setNotes] = useState()
    const [date, setDate] = useState()
    const [userId, setUserId] = useState("nouser")

    const onSubmit = (e) => {
        e.preventDefault();
        if (userId !== "nouser") {
            let userDetails = {
                name: Name,
                label,
                notes,
                due_date: date,
                uid: userId,
                createdAt: moment().format("YYYY-MM-DD"),
                isArchived: false
            }
            axios.post(`http://localhost:3001/note/${userId}`, userDetails)
                .then(res => {
                    console.log(userDetails)
                    alert("Created a ToDo list")
                    window.location.reload()
                })
                .catch(err => alert("Posting unsuccessful"))
        }
        else {
            alert("User not signed in")
        }
    }


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
                                    <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Label</label>
                                    <input type="text" onChange={(e) => setLabel(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Notes</label>
                                    <input type="text" onChange={(e) => setNotes(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Due date</label>
                                    <input type="date" onChange={(e) => { setDate(e.target.value); console.log(e.target.value); }} className="form-control mb-2" required />

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
