import React, {useState, useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteModal from "./NoteModal";
import NoteItem from "./NoteCard";

const Notes = () => {
  const context = useContext(NoteContext);
  const [showModal, setShowModal] = useState(false);
  const [showModalForUpdate, setShowModalForUpdate] = useState(false);
  const { notes, getNotes } = context;

  const [title, setTitle] = useState("")
  const [description, setdescription] = useState("")
  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (note) =>{
    console.log(`ID ${note._id} title ${note.title}`)
    setTitle(note.title)
    setdescription()
  }

  return (
    <div>
      <div className="flex flex-row justify-between">
        <h1 className="py-5 text-4xl">Your Notes</h1>
        <div className="mx-20">
          <button
            className="bg-blue-100  text-black active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add New Note
          </button>
        </div>
        {showModal && <NoteModal closeModal = {setShowModal}/>}
        {showModalForUpdate && <NoteModal closeModal = {setShowModalForUpdate} />}
      </div>

      <div className="flex flex-wrap">
        {notes.map((note) => {
          return (<div  key={note._id} onClick ={()=> updateNote(note)} >
          <NoteItem note={note} />
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default Notes;
