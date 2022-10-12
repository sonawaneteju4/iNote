import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";
import TextField from "@mui/material/TextField";
import Stack from '@mui/material/Stack';



const AddNote = ({ closeModal, noteForUpdate, forUpdate}) => {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const {deleteNote} = context;

  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    console.log(addNote)
    closeModal(false);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  console.log(noteForUpdate)

  const modalOperation = (forUpdate) =>{
    if(forUpdate){
      deleteNote(noteForUpdate._id)
      closeModal(false)

    }
    else{
      console.log("notforUpdate")

      closeModal(false)
    }
  }
  
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-2 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="m-2 p-2">
              <div className="text-black">
                <div className="mx-10">
                  <div className="container ">
                    <div className="flex justify-between items-center">
                      <h1 className="py-5 text-2xl font-medium">Add a Note</h1>
                      <button
                        onClick={() => closeModal(false)}
                        className="fa-solid fa-xmark flex justify-end text-red-700 text-2xl"
                      ></button>
                    </div>
                    <Stack
                      component="form"
                      sx={{
                        width: "50ch",
                        p:1
                      }}
                      spacing={2}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="outlined-basic"
                        label="Title"
                        variant="outlined"
                        onChange={onChange}
                        name="title"
                        helperText="Title should have 4 charactor"
                        defaultValue={noteForUpdate ? noteForUpdate.title : ""}
                      />
                      <TextField
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        onChange={onChange}
                        rows={4}
                        name="description"
                        defaultValue = {noteForUpdate ? noteForUpdate.description : ""}
                        helperText="Description should have 5 charactor"
                      />
                    </Stack>
                    <div className="flex justify-end">
                      <button
                        onClick={handleClick}
                        type="submit"
                        disabled = {note.title.length < 5 || }
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mx-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        {forUpdate ? "Update" : "Save"}
                      </button>

                      <button
                        onClick={() => modalOperation(forUpdate)}
                        type="close"
                        className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                      >
                        {forUpdate ? "Delete" : "Close"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddNote;
