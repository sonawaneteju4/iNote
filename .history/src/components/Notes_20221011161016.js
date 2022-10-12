import React, { useContext, useEffect } from "react";
import NoteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const [showModal, setShowModal] = React.useState(false);
 

  return (
    <div>
      

      
    </div>
  );
};

export default Notes;
