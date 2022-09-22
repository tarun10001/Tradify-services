import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";
import { useState } from "react";
import './App.css'

function App() {

  const [show, setShow] = useState(true);
  return (

    <div className="App">
        <button onClick={() => {
        setShow(!show)
      }} className="togglebtn">{show ? "Add a new student" : "Go to students list"} </button>
      {show ? <ShowStudents /> : <AddStudent /> }
    
    </div>
  );
}

export default App;