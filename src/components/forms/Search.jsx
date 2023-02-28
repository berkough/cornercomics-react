import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Axios from 'axios';
import ComicListItem from '../ComicListItem';

export default function Search(){
    const [comicList, setComicList] = useState([]);

    const URL = 'https://metron.cloud/api'


    

    return(
      <>
      <Form>
          <SearchInput type={searchBy} getSearch={setSearchQ}/>
          <SearchType type={searchBy} setType={setSearchBy}/>
         
          <Button onClick={handleSubmit} className='d-block mx-auto mt-4' variant='primary' type='button'>Search</Button>
      </Form>
   
  </>
    )
}