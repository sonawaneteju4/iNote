import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []
      const [notes, setNotes] =  useState(notesInitial)
  
      
      //Add a Get all Notes
      const getNotes = async ()=>{
const response = await fetch(`$(host)/api/notes/fetchallnotes`, {
method: 'POST',
headers: {
 'Content-Type' : 'application/json',
 'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MDJkNzU1M2FmOTliMGVlZjI2NTM0In0sImlhdCI6MTY2NTE1MDMyNX0.21oCHuWw9znwAh1XjjmkspjjhwBbkDeEM_QBgueLQc0'
},
})
const json = await response.json()
console.log()





      //Add a Note
      const addNote = async (title, description,tag)=>{

             // api call
  const response = await fetch(`$(host)/api/notes/addnote`, {
    method: 'GET',
    headers: {
      'Content-Type' : 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MDJkNzU1M2FmOTliMGVlZjI2NTM0In0sImlhdCI6MTY2NTE1MDMyNX0.21oCHuWw9znwAh1XjjmkspjjhwBbkDeEM_QBgueLQc0'
    },
    body: JSON.stringify(title, description, tag)
  })
  

        const note = {
          "_id": "6343f9155e6343bed4b7ddba",
          "user": "63402d7553af99b0eef26534",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "1665390388538",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote = (id)=>{
        console.log(id)
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)
      }

      //Edit a Note
const editNote = async (id, title, description,tag)=>{
  // api call
  const response = await fetch(`$(host)/api/notes/updatenote/$(id)`, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0MDJkNzU1M2FmOTliMGVlZjI2NTM0In0sImlhdCI6MTY2NTE1MDMyNX0.21oCHuWw9znwAh1XjjmkspjjhwBbkDeEM_QBgueLQc0'
    },
    body: JSON.stringify(title, description, tag)
  })
  const json=  response.json();



    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if(element._id === id){
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
}

    return(

        <NoteContext.Provider value={{notes, notesInitial, addNote ,deleteNote ,editNote }}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
