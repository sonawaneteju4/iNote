import React, { useState, useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import NoteModal from "./NoteModal";
import NoteItem from "./NoteCard";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const Notes = () => {
  const context = useContext(NoteContext);
  const [showModal, setShowModal] = useState(false);
  const [showModalForUpdate, setShowModalForUpdate] = useState(false);
  const { notes, getNotes } = context;

  const [noteForUpdate, setNoteForUpdate] = useState();
  const forUpdate = true;
  useEffect(() => {
    getNotes();
  }, []);

  const updateNote = (n) => {
    setShowModalForUpdate(true);
    setNoteForUpdate(n);
  };

  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="flex mx-20">
          <h1 className="py-5 text-4xl">Your Notes</h1>
          <button
            className="bg-blue-100  text-black active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add New Note
          </button>
          <Button variant="outlined" startIcon={<AddIcon />}>
            A
          </Button>
        </div>
        {showModal && <NoteModal closeModal={setShowModal} />}
        {showModalForUpdate && (
          <NoteModal
            closeModal={setShowModalForUpdate}
            noteForUpdate={noteForUpdate}
            forUpdate={forUpdate}
          />
        )}
      </div>

      <div className="flex flex-wrap">
        {notes.map((note) => {
          return (
            <div key={note._id} onClick={() => updateNote(note)}>
              <NoteItem note={note} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
