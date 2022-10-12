import React, {useContext, useState}from 'react'
import NoteContext from '../context/notes/NoteContext';

const AddNote = () => {
    const context = useContext(NoteContext);
    const {addNote} = context;
    const [note, setnote] = useState({title:"", description:"", tag:""})
    const handleClick = ()=>{
 
    }
    const onChange = (e)=>{
      setnote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div> 
    <div className='text-black'>
      <div className='mx-10'>
        <h1 className='py-5 text-4xl'>Add a Note</h1>
        <form className=''>

        <form className='container mx-20'>
  <div className="relative z-0 mb-6 w-full group">
      <label for="" className="">Title</label>
      <input  onChange={onChange} type="text" name="title" id="title" className="block p-2 w-96 text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="Enter Your Title" required=""/>
  </div>
  <div className="relative z-0 mb-6 w-full group">
      <label for="floating_password" className="">description</label>
      <input onChange={onChange} type="desc" name="desc" id="description" className="block py-2.5 px-0 w-96 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="description" required=""/>
  </div>
  <button onClick={handleClick} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </form>
      </div>
    </div>
    </div>
  )
}

export default AddNote