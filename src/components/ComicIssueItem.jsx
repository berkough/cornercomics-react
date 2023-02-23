import Axios from 'axios';

export default function ComicIssueItem ({comic, URL}){
    let cover;
    const getCover = async (id) => {
        await Axios.get(`${URL}/issue/${id}`).then((response)=>{
            console.log(response)
            cover = response.data.image;
        })
        return <img src={cover} />
    }   
    return(
        <>
            <div>{comic.issue}</div>
            <div>{getCover(comic.id)}</div>
        </>
    )
}