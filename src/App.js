import NavBar from './components/NavBar';
import Note from './components/Note';
import SignIn from './components/SignIn';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import axios from 'axios'
import { React, useEffect, useState } from 'react'
import AddToDo from './components/AddToDo';
import { Alert } from 'bootstrap';
import SignUp from './components/SignUp';
function App() {
  const [allNotesData, setAllNotesData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/note")
      .then(res => {
        setAllNotesData(res.data)

        console.log(res.data)
      }).catch(err => console.log("Error:", err))
    return () => {

    }
  }, [])
  const addTodo = () => {

  }
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Route exact path='/'>
          <div className='container' style={{ display: "flex", flexDirection: "column" }} >
            <AddToDo />
            <div style={{ display: "flex" }}>
              {allNotesData !== [] ?
                allNotesData.map(data => <Note name={data.name}
                  key={data._id}
                  content={data.notes}
                  date={data.date}
                  label={data.label}
                  on={data.img}
                />) :
                <div>Nothing here to display</div>
              }
            </div>
          </div>
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
        <Route exact path='/signup'>
          <SignUp />
        </Route>
      </Router>
    </div>
  );
}

export default App;
