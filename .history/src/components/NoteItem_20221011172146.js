import React, { useContext } from "react";
import NoteContext from '../context/notes/NoteContext'

const NoteItem = (props) => {
 const context = useContext(NoteContext)
  const {deleteNote} = context;
  const { note } = props;
  return (
    <div className="p-5">
      <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
        <div className="flex item-start justify-end">
          <i class="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
          <i class="fa-solid fa-file-pen mx-2"></i>
        </div>
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            {note.title}
          </h5>
        <p class="font-normal text-gray-700"> {note.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;
