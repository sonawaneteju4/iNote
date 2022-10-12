import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, addNote} = context
  return (
    <div>
        <AddNote
      <h1 className='py-5 text-4xl'>Your Notes</h1>

    <div className='flex flex-wrap'>
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>; 
        })}
    </div>
        </div>
  )
}

export default Notes
