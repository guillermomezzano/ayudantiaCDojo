// import { useState } from "react";
// import { GlobalProvider } from './components/context/global-contex'
import { BrowserRouter, Routes, Route } from "react-router-dom";


//componets

import FormPerson from './components/FormPerson'
import ListCharacter from './components/ListCharacter'
import Character from "./components/Character";
import SingIn from "./components/SingIn";
import PrivateRoutes from "./components/routes/PrivateRoutes";
import PublicRoutes from "./components/routes/PublicRoutes";
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

          <Route element={<PrivateRoutes />}>
            <Route path="/list" element={<ListCharacter />} />
            <Route path="/character/:id" element={<Character />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<SingIn />} />
            <Route path="/" element={<FormPerson />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>

  )
}

export default App



