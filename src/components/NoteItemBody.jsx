// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function NoteItemBody({ body }){
    return(
        <div className="nBody">
            <p>{body}</p>
        </div>
    )
}

NoteItemBody.propTypes = {
    body: PropTypes.string,
  };
export default NoteItemBody;