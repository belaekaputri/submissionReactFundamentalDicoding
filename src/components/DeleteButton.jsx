// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
function DeleteButton({ id, onDelete }){
    return <button className='btn-delete' onClick={()=> onDelete(id)}>Hapus</button>
}
DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete:PropTypes.func
  };
export default DeleteButton;