// import { useState } from "react";
// import { GlobalProvider } from './components/context/global-contex'
import { BrowserRouter, Routes, Route } from "react-router-dom";


//componets

// import FormStudent from './components/FormStudent'
import ListCharacter from './components/ListCharacter'
import Character from "./components/Character";
// import ListStudent from "./components/ListStudent";
// import TableStudent from "./components/TableStudent";
// import NoteForm from "./components/NoteForm";
// import NoteList from './components/NoteList'
// import NoteFilter from './components/NoteFilter'
// import Bienvenida from './components/Bienvenida'

function App() {

  // const [notes, setNotes] = useState([])

  // const [filterPriority, setFilterPriority] = useState('Todas')

  // const notesFilter = filterPriority === 'Todas'
  //   ? notes
  //   : notes.filter(unNotes => unNotes.priority === filterPriority)

  return (
    <>
      {/* <FormStudent /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/list" element={<ListCharacter />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App



