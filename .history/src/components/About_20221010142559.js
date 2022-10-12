import React, {useContext, useEffect}from 'react'
import noteContext from '../context/notes/NoteContext'

const About = () => {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update();
  },[])
  return (
    <div>
      This is about 
    </div>
  )
}

export default About
