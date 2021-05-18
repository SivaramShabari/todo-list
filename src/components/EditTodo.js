import React, { useState, useEffect } from 'react'
import axios from 'axios'
function EditToDo(props) {
    const [name, setName] = useState(props.name)
    const [id, setId] = useState(props._id)
    const [label, setLabel] = useState(props.label)
    const [notes, setNotes] = useState(props.notes)
    const [due, setDue] = useState(props.date)
    const [archived, setarchived] = useState(false)
    const change = () => {
        console.log(props)
    }
    const onSubmit = (e) => {
        e.preventDefault();
        let userDetails = {
            name,
            label,
            notes,
            due_date: due,
            isArchived: archived
        }
        axios.put(`http://localhost:3001/note/${props._id}`, userDetails)
            .then(res => {
                console.log(userDetails)
                alert("Edited your ToDo ")
                window.location.reload()
            })
            .catch(err => alert("Posting unsuccessful"))
    }
    const printProps = () => {
        console.log(props._id)
    }
    const onDelete = (e) => {
        e.preventDefault()
        console.log(props._id)

    }
    const onArchive = e => {
        e.preventDefault()
        setarchived(!archived)
    }
    return (
        <div>
            <button type="button" className="btn btn-info " data-toggle="modal" data-target="#exampleModa2">
                Edit {props.name}
            </button>
            <div className="modal fade" id="exampleModa2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-dark">Edit Todo</h3>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-dark">
                            <form>
                                <div className="form-group">
                                    <label >Id</label>
                                    <input type="text" value={id} onChange={(e) => setId(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Label</label>
                                    <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Notes</label>
                                    <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label >Due date</label>
                                    <input type="date" value={due} onChange={(e) => setDue(e.target.value)} className="form-control mb-2" required />

                                </div>
                                <button type="button" data-toggle="modal"
                                    className="btn btn-primary mt-3 mb-4 mr-3"
                                    onClick={(e) => onSubmit(e)} >Apply Edits</button>
                                <button type="button" data-toggle="modal"
                                    className="btn btn-danger mt-3 mb-4"
                                    onClick={(e) => onDelete(e)} >Delete</button>
                                <button type="button" data-toggle="modal"
                                    className="btn btn-warning mt-3 mb-4 ml-3"
                                    onClick={(e) => onArchive(e)} >{!archived ?
                                        <span>Un</span> : <span></span>
                                    }Archive</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditToDo
