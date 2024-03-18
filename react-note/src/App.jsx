/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Notes from "./pages/Notes"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"

import dummyNotes from "./dummy_notes"


import './App.css'
import { useState } from "react"


function App() {

  const [notes, setNotes] = useState(dummyNotes);
  
  return (
    <>
      <main id="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes}/>}/>
            <Route path="/create-note" element={<CreateNote/>}/>
            <Route path="/edit-note/:id" element={<EditNote/>}/>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  )
}

export default App
