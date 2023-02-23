import { useState } from 'react';
import Axios from 'axios';
import ComicListItem from './ComicListItem';

export default function Search(){
    const [comicList, setComicList] = useState([]);

    const URL = 'https://metron.cloud/api'

    const getComicList = (title) => {
      Axios.get(`${URL}/series/?format=json&name=${title}`).then((response)=>{
        console.log(response);
        setComicList(response.data.results);
      })
    }
    

    return(
        <>
          <input className='rounded' type='search' placeholder='Search for a Comic Title or Superhero' id='searchInp' />
          <button className='btn btn-primary rounded' type='button' id='searchBtn' onClick={()=>{getComicList(document.getElementById('searchInp').value)}}>Search</button>
          <br />
          <div className='justify-content-center'>
            { 
              comicList.length > 0 ? comicList.map((comic)=>(<ComicListItem comic={comic} key={comic.id} URL={URL} />)) 
              : <h2>Try searching for a comic book title...</h2>
            } 
        </div>
        </>
    )
}