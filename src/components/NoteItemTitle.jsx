// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function NoteItemTitle({ title, createdAt ,id }){
    return(
        <div className="nTitle">
            <h3><Link to={`/notes/${id}`}>{title}</Link> </h3>
            <p>{ createdAt }</p>
        </div>
    )
}

NoteItemTitle.propTypes = {
    title: PropTypes.string,
    createdAt:PropTypes.string,
    id:PropTypes.string
  };
export default NoteItemTitle;