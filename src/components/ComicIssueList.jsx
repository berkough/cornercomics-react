import React, { useState } from 'react';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ComicIssueItem from './ComicIssueItem';

export default function ComicIssueList({comic, URL}) {
    const [issues, setIssues] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        Axios.get(`${URL}/series/${comic.id}/issue_list/`).then((response)=>{
            console.log(response);
            setIssues(response.data.results);
        })
};

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See Issues
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{comic.series}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { 
            issues.length > 0 ? issues.map((comic)=>(<ComicIssueItem comic={comic} key={comic.id} URL={URL} />)) : null
        }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}