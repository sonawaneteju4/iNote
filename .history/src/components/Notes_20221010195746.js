import React, {useContext } from 'react'
import NoteContext from '../context/notes/NoteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(NoteContext);
    const {notes} = context
  return (
    <div>
        <AddNote/>
      <h1 className='py-5 text-4xl'>Your Notes</h1>
      <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
  Toggle modal
</button>
    <div className='flex flex-wrap'>
        {notes.map((note)=>{
            return <NoteItem key={note._id} note={note}/>; 
        })}
    </div>
        </div>
  )
}

export default Notes
