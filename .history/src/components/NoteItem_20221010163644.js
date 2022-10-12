import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div>
      {note.title}
      {note.de}
    </div>
  )
}

export default NoteItem
