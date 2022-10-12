import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "6343f8ff5e6343bed4b7ddb5",
          "user": "63402d7553af99b0eef26534",
          "title": "New Note Test 1 ",
          "description": "admin / admin@gmail.com admin",
          "tag": "test",
          "date": "1665390388538",
          "__v": 0
        },
        {
          "_id": "6343f90f5e6343bed4b7ddb8",
          "user": "63402d7553af99b0eef26534",
          "title": "New Note Test 2 ",
          "description": "admin / admin@gmail.com admin",
          "tag": "test",
          "date": "1665390388538",
          "__v": 0
        },
        {
          "_id": "6343f9155e6343bed4b7ddba",
          "user": "63402d7553af99b0eef26534",
          "title": "New Note Test 3 ",
          "description": "admin / admin@gmail.com admin",
          "tag": "test",
          "date": "1665390388538",
          "__v": 0
        },
        {
            "_id": "6343f9155e6343bed4b7ddba",
            "user": "63402d7553af99b0eef26534",
            "title": "New Note Test 3 ",
            "description": "admin / admin@gmail.com admin",
            "tag": "test",
            "date": "1665390388538",
            "__v": 0
          },
          {
            "_id": "6343f9155e6343bed4b7ddba",
            "user": "63402d7553af99b0eef26534",
            "title": "New Note Test 3 ",
            "description": "admin / admin@gmail.com admin",
            "tag": "test",
            "date": "1665390388538",
            "__v": 0
          },
          {
            "_id": "6343f9155e6343bed4b7ddba",
            "user": "63402d7553af99b0eef26534",
            "title": "New Note Test 3 ",
            "description": "admin / admin@gmail.com admin",
            "tag": "test",
            "date": "1665390388538",
            "__v": 0
          },
          {
            "_id": "6343f9155e6343bed4b7ddba",
            "user": "63402d7553af99b0eef26534",
            "title": "New Note Test 3 ",
            "description": "admin / admin@gmail.com admin",
            "tag": "test",
            "date": "1665390388538",
            "__v": 0
          },
          {
            "_id": "6343f9155e6343bed4b7ddba",
            "user": "63402d7553af99b0eef26534",
            "title": "New Note Test 3 ",
            "description": "admin / admin@gmail.com admin",
            "tag": "test",
            "date": "1665390388538",
            "__v": 0
          }
      ]
      const [notes, setNotes] = useState(notesInitial)
      
      //Add a Note
      const addNote = ()=>{
        
      }

      // Delete a Note


      //Edit a Note


    return(

        <NoteContext.Provider value={{notes, notesInitial}}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
