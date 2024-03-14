import React, { useState } from 'react';
import { getNote } from '../utils/network-data';
import { useParams} from 'react-router-dom';
import DetailNote from '../components/DetailNote';

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
export default DetailNotePage;


