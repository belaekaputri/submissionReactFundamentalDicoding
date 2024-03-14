import React from 'react';
import { useSearchParams } from 'react-router-dom'
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import {getActiveNotes,deleteNote} from '../utils/network-data';
import GambarImage from '../components/GambarImage';
import LocaleContext from '../contexts/LocaleContext';
import { BiLoaderCircle } from "react-icons/bi";

function HomePage(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [notes, setNotes] = React.useState([]);
    const [keyword, setKeyword] = React.useState(() => {
        return searchParams.get('keyword') || ''
    });
    const [isloading, setLoading] = React.useState(true);
    const { locale } = React.useContext(LocaleContext);
    React.useEffect(() => {
        setLoading(true);
        getActiveNotes().then(({ data }) => {
          setNotes(data);
          setLoading(false);
        });
      }, []);

      async function onDeleteHandler(id) {
        await deleteNote(id);
        const { data } = await getActiveNotes();
        setNotes(data);
    }

    function onKeywordChangeHandler(keyword) {
        setKeyword(keyword);
        setSearchParams({ keyword });
    }

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(
            keyword.toLowerCase()
        );
    });

    if (isloading) 
    return (
        <BiLoaderCircle />
    );

    return(
        <div className="noteApp">
                <GambarImage/>
                <SearchBar className='search' keyword={keyword} keywordChange={onKeywordChangeHandler}/>
                <h1 className='tl'>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h1>
                <NoteList notes={filteredNotes} onDelete={onDeleteHandler}/>
            </div>
    );

}

export default HomePage;




