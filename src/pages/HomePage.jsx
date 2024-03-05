import React from 'react';
import PropTypes from 'prop-types'
import { useSearchParams } from 'react-router-dom'
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';
import {getAllNotes,deleteNote} from '../utils/local-data';
import GambarImage from '../components/GambarImage';

function HomePageWrapper(){
    const [searchParams,setSearchParams]=useSearchParams();
    
    const keyword =searchParams.get('keyword');
    
    function changeSearchParams(keyword){
        setSearchParams({keyword});
    }

    return <HomePage dafultKeyword={keyword} keywordChange={changeSearchParams}/>
}



class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            notes:getAllNotes(),
            keyword:props.dafultKeyword || '',
        }
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler= this.onKeywordChangeHandler.bind(this);
    }
   onDeleteHandler(id){
       deleteNote(id);
       this.setState(()=>{
        return{
            notes:getAllNotes()
        }
       })
    }
    

    onKeywordChangeHandler(keyword){
        this.setState(()=>{
            return{
                keyword,
            }
        });

        this.props.keywordChange(keyword); //menyalaraskan url jika kita isika nama di pencarian makan di url akan berubah
      }

    render(){
        const notes= this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            );
          });
        return(
            <div className="noteApp">
                <GambarImage/>
                 <SearchBar className='search' keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler}/>
                <h1 className='tl'>Daftar Catatan</h1>
                <NoteList notes={notes} onDelete={this.onDeleteHandler}/>
            </div>
        )
    }
}
HomePage.propTypes = {
    dafultKeyword: PropTypes.string,
    keywordChange :PropTypes.func.isRequired
  };
  export default HomePageWrapper;