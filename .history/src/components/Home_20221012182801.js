import React from 'react'
// import NoteState from '../context/notes/NoteState';
import Notes from './AllNotes';

const Home = (props) => {
  {showAlert}= props
  return (
    <div className='mx-10'>
      <Notes showAlert={showAlert} />
    </div>

  )
}

export default Home
