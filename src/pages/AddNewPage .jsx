// eslint-disable-next-line no-unused-vars
import React from 'react';
import {addNote} from '../utils/local-data';
import NoteInput from '../components/NoteInput';
import {useNavigate} from 'react-router-dom';

function AddNewPage(){
    const navigate = useNavigate();

    function onAddNoteHandler(note){
        addNote(note);
        navigate('/');
    }

return(
    <section>
        <NoteInput addNote={onAddNoteHandler}/>
    </section>
)
}

export default AddNewPage;