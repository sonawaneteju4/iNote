import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const s1 = {
        "name":"Tejas"
    }
    const [state, setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name":"Harry",
            })
        }, 10000);
    }
    return(

        <NoteContext.Provider value={{state, update}}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
