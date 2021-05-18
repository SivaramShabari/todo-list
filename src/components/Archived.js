import React from 'react'
import moment from 'moment'
import Note from './Note'
function Archived(props) {
    return (
        <>
            <h3 className="container">Your archived Todo lists :</h3>
            {props.set.length > 0 ? props.set.map(data =>
                <Note name={data.name}
                    user_id={props.uid}
                    _id={data._id}
                    key={data._id}
                    content={data.notes}
                    date={moment(data.due_date).calendar()}
                    label={data.label}
                    on={data._id}
                />)
                :
                <div />
            }
        </>
    )
}

export default Archived
