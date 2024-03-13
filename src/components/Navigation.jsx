// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IoIosLogOut } from "react-icons/io";
import ToggleTheme from './ToggleTheme';
import ToggleLocale from './ToggleLocale';
import LocaleContext from '../contexts/LocaleContext';

function Navigation({logout,name}) {
 
  const {locale} = React.useContext(LocaleContext);
  return (
    <>
    <header className='hd'>
    <nav>
      <ul>
        <li>
          <Link to="/">{locale === 'id' ? 'Aplikasi Catatan.' : 'Note App.'}</Link>
        </li>
      </ul>
    </nav>
    <div className='addNote'>
    <Link to="/notes/new">{locale === 'id' ? 'Tambah Catatan' : 'Add Note.'}</Link>
   
    </div>
    <div>
    <ToggleTheme/>
    <ToggleLocale/>
    <button className='btn-logout' onClick={logout}>{name}< IoIosLogOut style={{ fontSize:'20px',paddingTop:'8px'}}/></button>
    </div>
    </header>
    
    </>
  );
}
Navigation.propTypes = {
  logout: PropTypes.func,
  name : PropTypes.string,
};

export default Navigation;
