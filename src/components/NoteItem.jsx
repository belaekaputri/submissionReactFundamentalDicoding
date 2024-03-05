// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import DeleteButton from './DeleteButton';
import {showFormattedDate} from '../utils/index';

function NoteItem({ title, body, createdAt, id, onDelete }){
   return(
    <div className='noteItem'>
       <NoteItemTitle title ={title} createdAt=  {showFormattedDate(createdAt)} id={id}/>
       <NoteItemBody body={body}/>
       <DeleteButton id={id} onDelete={onDelete}/>
    </div>
   ) 
}
NoteItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    createdAt: PropTypes.string,
    id:PropTypes.string,
    onDelete:PropTypes.func
  };

export default NoteItem;