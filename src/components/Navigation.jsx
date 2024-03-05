// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import {FiPlusCircle} from 'react-icons/fi';

function Navigation() {
  return (
    <>
    <header className='hd'>
    <nav>
      <ul>
        <li>
          <Link to="/">Note App.</Link>
        </li>
      </ul>
    </nav>
    <div className='addNote'>
    <Link to="/notes/new"><FiPlusCircle /></Link>
    </div>
    </header>
    
    </>
  );
}

export default Navigation;
