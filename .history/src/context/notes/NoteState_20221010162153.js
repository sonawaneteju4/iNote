import { useState } from 'react';
import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const notes =
    return(

        <NoteContext.Provider >
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
