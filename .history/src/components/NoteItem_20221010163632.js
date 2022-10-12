import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div>
      {note.tit}
    </div>
  )
}

export default NoteItem
