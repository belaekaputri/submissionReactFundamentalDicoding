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
            };
        });
    }

    render(){
        return(
            <form className='noteInput' onSubmit={this.onSubmitEventHandler}>
              <h1>Add Note</h1>
              <input type="text" placeholder='(untitled)' value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
              <textarea placeholder='멈추지 말고 계속 해나가기만 한다면 늦어도 상관없다.' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
              <button type='submit' className='btn-Add'>Tambah</button>
            </form>
        )
    }
}
NoteInput.propTypes = {
    addNote: PropTypes.func
  };
export default NoteInput;