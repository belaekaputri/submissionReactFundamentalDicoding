// eslint-disable-next-line no-unused-vars
import React from 'react';
import {addNote} from '../utils/network-data';
import NoteInput from '../components/NoteInput';
import {useNavigate} from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';

function AddNewPage(){
    const navigate = useNavigate();
    const {locale} = React.useContext(LocaleContext);
    
    function onAddNoteHandler(note){
        addNote(note);
        navigate('/');
    }

return(
    <section>
        <NoteInput addNote={onAddNoteHandler}  lang={locale}/>
    </section>
)
}

export default AddNewPage;