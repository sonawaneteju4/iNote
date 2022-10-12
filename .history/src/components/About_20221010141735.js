import React, {useContext}from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)
  
  return (
    <div>
      This is about {a.name} He is in class {a.class}
    </div>
  )
}

export default About
