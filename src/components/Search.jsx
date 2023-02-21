import { useState } from 'react'

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
              localStorage.setItem(`${comic.id}`,JSON.stringify(comic));
            }
            pullLocalStorage();
          });
      }
      
    function pullLocalStorage(){
        let temp = [];
        console.log("pushing to localStorage "+comicList);
        Object.keys(localStorage).forEach(key=>temp.push(JSON.parse(localStorage.getItem(key))))
        setComicList(temp);
        temp = [];
        }

    return(
        <>
        
        </>
    )
}