import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div className='p-5'>
      
     
      
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{note.title}</h5>
    <p class="font-normal text-gray-700"> {note.description}  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum </p>
</div>

    </div>
  )
}

export default NoteItem
