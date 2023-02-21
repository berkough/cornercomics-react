import { useState } from 'react';
import Comic from './Comic';

export default function Search(){
    const [comicList, setComicList] = useState([]);
    const URL = 'http://metron.cloud/api/series/?format=json&name='

    async function search(title){
        await fetch(URL+title)
          .then((response)=>response.json())
          .then((data)=>{
            let comics = data.results;
            console.log(comics);
            for (const comic of comics){
              localStorage.setItem(comic.id,JSON.stringify(comic));
            }
            pullLocalStorage();
          });
      }
      
    function pullLocalStorage(){
        let temp = [];
        console.log("pulling from localStorage... "+comicList);
        Object.keys(localStorage).forEach(key=>temp.push(JSON.parse(localStorage.getItem(key))))
        setComicList(temp);
        temp = [];
        }

    return(
        <>
          <input className='rounded' type='search' placeholder='Search for a Comic Title or Superhero' id='searchInp' />
          <button className='btn btn-primary rounded' type='button' id='searchBtn' onClick={()=>{search(document.getElementById('searchInp').value)}}>Search</button>
          <br />
          <div className='d-inline-flex flex-wrap justify-content-center'>
            { 
              comicList.length > 0 ? comicList.map((comic)=>(<Comic {...comic} key={comic.id} />)) 
              : <h2>Try searching for a comic book title...</h2>
            } 
        </div>
        </>
    )
}