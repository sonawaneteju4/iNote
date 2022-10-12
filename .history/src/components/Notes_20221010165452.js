import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes, setNotes} = context
  return (
    <div>
      <h1 c>Your Notes</h1>

    <div className='flex flex-wrap'>
        {notes.map((note)=>{
            return <NoteItem note={note}/>; 
        })}
    </div>
        </div>
  )
}

export default Notes
