import React from 'react';
import {getNote} from '../utils/local-data';
import { useParams } from 'react-router-dom';
import DetailNote from '../components/DetailNote';
import PropTypes from 'prop-types'

function  DetailNotePageWrapper(){
  const{id}=useParams();
  return <DetaiNotePage id={id}/>;
}
class DetaiNotePage extends React.Component {
  constructor(props) {
    super(props);
    //karna di class komponen tidak bisa menggunakan hooks maka tambah functional komponen
    this.state = {
      notes: getNote(props.id)
    };
  }

  render() {
    if (!this.state.notes) {
      return <p>Notes is not found!</p>;
    }
    return (
      <section>
        <DetailNote {...this.state.notes} />
      </section>
    );
  }
}
DetaiNotePage.propTypes = {
  id:PropTypes.string
};

export default DetailNotePageWrapper;


