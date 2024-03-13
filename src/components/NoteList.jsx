// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';
import LocaleContext from '../contexts/LocaleContext';

function NoteList({ notes, onDelete }){
    const {locale} = React.useContext(LocaleContext);
    if(notes.length===0){
        return(
            <div className='noteEmpty'>
                <h3 className="hrf">{locale === 'id' ?'Tidak Ada Catatan!': 'No Note!'}</h3>
            </div>
        )
    }
    return(
        <div className="notesList">
            {
                notes.map((note)=>(
                    <NoteItem key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    {...note}
                     />
                ))
            }
        </div>
    )
}

NoteList.propTypes = {
    notes: PropTypes.array,
    onDelete:PropTypes.func
  };
export default NoteList;