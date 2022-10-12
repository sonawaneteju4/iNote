import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div>
      
     
      
<div class="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 flex felx-ro">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{note.title}</h5>
    <p class="font-normal text-gray-700"> {note.description}</p>
</div>

    </div>
  )
}

export default NoteItem
