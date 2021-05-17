import React from 'react'
import '../App.css'
import EditToDo from './EditTodo'
function Note(props) {
    return (
        <>
            <div className="col-4 m-2 cards">
                <div className="card text-light bg-dark crdss" style={{ width: "20rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.content}</p>
                    </div>
                    <ul className="list-group list-group-flush text-dark bg-light">
                        <li className="list-group-item text-light bg-secondary">{props.date}</li>
                        <li className="list-group-item text-light bg-secondary">Label : {props.label}</li>
                        <li className="list-group-item text-light bg-secondary" >Reminder : {props.on}</li>
                    </ul>
                    <div className="card-body">
                        <div className="card-link">
                            <EditToDo
                                name={props.name}
                                label={props.label}
                                date={props.date}
                                notes={props.notes}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Note
