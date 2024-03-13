// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
function DeleteButton({ id, onDelete }){
  const { locale } = React.useContext(LocaleContext);
    return <button className='btn-delete' onClick={()=> onDelete(id)}> {locale === 'id' ? 'Hapus' : 'Delete'}</button>
}
DeleteButton.propTypes = {
    id: PropTypes.string,
    onDelete:PropTypes.func
  };
export default DeleteButton;



    