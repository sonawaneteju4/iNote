import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div className='p-5'>
      
     
      
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{note.title}</h5>
    <p class="font-normal text-gray-700"> {note.description}</p>
    <i class="fa-solid fa-trash"></i>
</div>

    </div>
  )
}

export default NoteItem
