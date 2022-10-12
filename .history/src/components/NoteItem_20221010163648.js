import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div>
      {note.title}
      {note.descrip}
    </div>
  )
}

export default NoteItem
