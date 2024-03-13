import React from 'react';
import LocaleContext from '../contexts/LocaleContext';

function ToggleLocale(){
    const {locale,toggleLocale} = React.useContext(LocaleContext);
    return <button className='btn-bahasa' onClick={toggleLocale}>{locale === 'id' ? 'En' : 'In'}</button>
}
export default ToggleLocale;