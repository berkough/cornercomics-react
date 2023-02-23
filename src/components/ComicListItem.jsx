import { useState } from 'react';
import ComicIssueList from './ComicIssueList';

export default function ComicListItem({comic, URL}){
    const [modalShow, setModalShow] = useState(false);
    
    return(
        <p>
            {comic.series} <br />
            <ComicIssueList show={modalShow} comic={comic} URL={URL} onHide={() => setModalShow(false)} />
        </p>
    )
}