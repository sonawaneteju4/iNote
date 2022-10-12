import React, { useContext, useState } from "react";
import NoteContext from "../context/notes/NoteContext";

const AddNote = (closeModal) => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
           
            {/*body*/}
            <div className="m-5 p-5">
              <div className="text-black">
                <div className="mx-10">
                  <h1 className="py-5 text-4xl">Add a Note</h1>
                  <form className="">
                    <form className="container mx-20">
                      <div className="relative z-0 mb-6 w-full group">
                        <label
                          for="title"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          Title
                        </label>
                        <input
                          onChange={onChange}
                          type="text"
                          name="title"
                          id="title"
                          className="block p-2 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Enter Your Title"
                          required=""
                        />
                      </div>
                      <div className="relative z-0 mb-6 w-full group">
                        <label
                          for="description"
                          className="block mb-2 text-sm font-medium text-gray-900"
                        >
                          description
                        </label>
                        <input
                          onChange={onChange}
                          type="desc"
                          name="description"
                          id="description"
                          className="block p-4 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                          placeholder="description"
                          required=""
                        />
                      </div>
                      <button onClick={() => closeModal(false)} type="submit">
                        Submit
                      </button>
                    </form>
                  </form>
                </div>
              </div>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddNote;
