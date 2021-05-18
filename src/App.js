import NavBar from './components/NavBar';
import Note from './components/Note';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { React, useEffect, useState } from 'react'
import AddToDo from './components/AddToDo';
import firebase from 'firebase'
import SignUp from './components/SignUp';
import User from './components/User';
import moment from 'moment'
import Archived from './components/Archived';
function App() {
  const [allNotesData, setAllNotesData] = useState([])
  const [userId, setUserId] = useState("nouser")
  const [user_details, setuser] = useState('User')
  const [unarchived, setUnarchived] = useState([])
  const [archived, setArchived] = useState([])

  useEffect(() => {
    if (userId !== "nouser") {
      axios.get(`http://localhost:3001/note/${userId}`)
        .then(res => {
          setAllNotesData(res.data)
          setUnarchived(res.data.map(
            datas => {
              if (datas.isArchived === 'false' || !datas.isArchived) {
                console.log("Archives not:", datas)
                return (datas)
              } else {
                setArchived(datas);
              }
            })
          )
        }).catch(err => console.log("Error:", err))

      axios.get(`http://localhost:3001/user/${userId}`)
        .then(res => {
          setuser(res.data[0])
          console.log("user", res.data)
        }).catch(err => console.log(err))
    }
    return () => {

    }
  }, [userId])
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
  const addTodo = () => {

  }
  return (
    <div className="App">
      <Router>
        <NavBar name={user_details.name} />
        <Route exact path='/'>
          {
            userId === "nouser" ?
              <div className="h3 container"> Please Sign In to continue</div>
              :
              <div >
                <div className='container' style={{ display: "flex", flexDirection: "column" }} >
                  <AddToDo />
                  <div style={{ display: "flex" }}>
                    {allNotesData !== [] ?
                      unarchived.map(data =>
                        <Note name={data.name}
                          user_id={userId}
                          _id={data._id}
                          key={data._id}
                          content={data.notes}
                          date={moment(data.due_date).calendar()}
                          label={data.label}
                          on={data._id}
                        />)
                      :
                      <div>Nothing here to display</div>
                    }
                  </div>
                </div>
              </div>
          }
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
        <Route exact path='/archive'>
          <Archived set={archived} uid={userId} />
        </Route>
        <Route exact path='/user'>
          <User
            name={user_details.name}
            isVerified={user_details.isVerified}
            img={user_details.img}
          />
        </Route>
      </Router>
    </div>
  );
}
export default App;
