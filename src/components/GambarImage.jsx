// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';


function GambarImage(){
    const { locale } = React.useContext(LocaleContext);
    return(
        <div className='Gimage'>
        <div className="left">
           <p>{locale === 'id' ? ' Selamat datang di aplikasi Note App yang praktis dan efisien! Note App memungkinkan Anda untuk menuliskan pikiran, rencana, dan inspirasi. Dari catatan harian hingga ide-ide proyek, Note App kami adalah alat yang sempurna untuk menyimpan dan mengelola semua informasi penting Anda.' : 'Welcome to the practical and efficient Note App! Note App allows you to write down thoughts, plans and inspiration. From daily notes to project ideas, our Note App is the perfect tool for storing and managing all your important information.'}</p>
           <Link to="/notes/new">{locale === 'id' ? 'Tambah Catatan' : 'Add Note'}</Link>
        </div>
        <div className='right'>
            <img src="https://blush.design/api/download?shareUri=V8e10g5KT&bg=eff8c9&w=600&h=600&fm=png" alt="" />
        </div>
        </div>
    )
}

export default GambarImage