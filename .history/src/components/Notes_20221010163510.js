import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context
  return (
    <div className=''>
      <h1>Your Notes</h1>
        {notes.map((note)=>{
          return <Note; 
        })}
    </div>
  )
}

export default Notes
