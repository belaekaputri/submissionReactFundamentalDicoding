// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';


function GambarImage(){
    return(
        <div className='Gimage'>
        <div className="left">
           <p>Selamat datang di aplikasi Note App yang praktis dan efisien! Note App memungkinkan Anda untuk menuliskan pikiran, rencana, dan inspirasi kapan pun dan di mana pun Anda berada. Dari catatan harian hingga ide-ide proyek, Note App kami adalah alat yang sempurna untuk menyimpan dan mengelola semua informasi penting Anda.</p>
           <Link to="/notes/new">Add Note</Link>
        </div>
        <div className='right'>
            <img src="https://blush.design/api/download?shareUri=V8e10g5KT&bg=eff8c9&w=600&h=600&fm=png" alt="" />
        </div>
        </div>
    )
}

export default GambarImage