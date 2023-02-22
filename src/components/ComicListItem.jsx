export default function ComicListItem({comic, URL}){
    
    async function getComicIssues(id){
        await fetch(`${URL}/series/${id}/issue_list`)
        .then((response)=>response.json())
        .then((data)=>{
            console.log(data);

        });
    }

    return(
        <p><a onClick={getComicIssues(comic.id)}>{comic.series}</a></p>
    )
}