import React, { useState } from 'react';
import { getNote } from '../utils/network-data';
import { useParams} from 'react-router-dom';
import DetailNote from '../components/DetailNote';
import PropTypes from 'prop-types'

function DetailNotePage(){
  const { id } = useParams();
  const [note, setNote] = useState({});




  React.useEffect(() => {
    getNote(id).then(({ data }) => {
        setNote(data);
    })
}, [id]);
return (
  <section>
    <DetailNote {...note} />
  </section>
);

}

DetailNotePage.propTypes = {
  id:PropTypes.string
};

export default DetailNotePage;


