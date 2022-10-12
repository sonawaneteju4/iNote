import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const state = {
        "name":"Tejas"
    }
    const [state, setState] = useState(s1);
    const update = ()=
    return(

        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
