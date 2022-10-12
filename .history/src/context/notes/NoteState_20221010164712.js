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
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
          "tag": "test",
          "date": "1665390388538",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)
    return(

        <NoteContext.Provider value={{notes, notesInitial}}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
