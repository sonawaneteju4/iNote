import React from 'react'

const Notes = () => {
  return (
    <div className=''>
      <h1>Your Notes</h1>
        {notes.map((note)=>{
          return note.title; 
        })}
    </div>
  )
}

export default Notes
