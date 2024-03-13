// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import { Link } from 'react-router-dom';
import {showFormattedDate} from '../utils/index';
import LocaleContext from '../contexts/LocaleContext';

function DetailNote({ title, body, createdAt,id }){
   const {locale} = React.useContext(LocaleContext);
   return(
    <div className='noteItemDetail'>
       <NoteItemTitle title ={title} createdAt=  {showFormattedDate(createdAt)} id={id}/>
       <NoteItemBody body={body}/>
       <h4 style={{marginTop:'10px'}}><Link to={"/"}>{locale === 'id' ?'Kembali': 'Back'} </Link> </h4>
    </div>
   ) 
}
DetailNote.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    id:PropTypes.string,
  };
 

export default DetailNote;