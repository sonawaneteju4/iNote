import React from 'react'

const NoteItem = (props) => {
   const {note} = props;
  return (
    <div className='p-5'>
      
     
      
<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{note.title}</h5>
    <p class="font-normal text-gray-700"> {note.description} {
          "_id": "6343f9155e6343bed4b7ddba",
          "user": "63402d7553af99b0eef26534",
          "title": "New Note Test 3 ",
          "description": "admin / admin@gmail.com admin",
          "tag": "test",
          "date": "1665390388538",
          "__v": 0
        }, </p>
</div>

    </div>
  )
}

export default NoteItem
