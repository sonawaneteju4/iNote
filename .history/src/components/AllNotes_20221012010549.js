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
      <div className="flex justify-between items-center">
        <h1 className="py-5 text-4xl">Your Notes</h1>
        <Button variant="outlined" className="border-2" startIcon={<AddIcon />} onClick={() => setShowModal(true)} autoCapitalize>
          Add Note
        </Button>
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
