import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const s1 = {
        "name":"Tejas",
        "class":"5B"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Harry",
                "class":"7B"
            })
        }, 1000);
    }
    return(

        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
