import React from 'react';
import PropTypes from 'prop-types';


class NoteInput extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title : '',
            body  : '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler= this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler= this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title : event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState(() => {
            return {
                title:"",
                body: "",
                lang: this.props.lang
            };
        });
    }

    render(){
        return(
            <form className='noteInput' onSubmit={this.onSubmitEventHandler}>
              <h1>{this.props.lang === 'id' ? 'Tambah Catatan' : 'Add Note'}</h1>
              <input type="text" placeholder={this.props.lang === 'id' ? 'Judul Catatan' : 'Title Note'} value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
              <textarea placeholder={this.props.lang === 'id' ? 'Isi Catatan' : 'Body Note'} value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
              <button type='submit' className='btn-Add'>{this.props.lang === 'id' ? 'Tambah' : 'Add'}</button>
            </form>
        )
    }
}
NoteInput.propTypes = {
    addNote: PropTypes.func,
    lang : PropTypes.string
  };
export default NoteInput;