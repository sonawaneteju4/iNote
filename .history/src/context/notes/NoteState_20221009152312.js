import NoteContext from './NoteContext';


const NoteState = (props) =>{
    const state = {
        "namee":"Tejas"
    }
    return(

        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
            )
}

export default NoteState;
