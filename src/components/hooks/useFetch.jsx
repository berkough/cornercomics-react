import { useState, useEffect } from 'react';
import Axios from 'axios';

export default function useFetch(url = null, deps = []){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async (title) => {
            await Axios.get(`${url}/series/?format=json&name=${title}`)
                .catch((error)=>{
                    if (error.response){
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                        setError(error);
                        setIsLoading(false);
                    }
                })
                .then((response)=>{
                    console.log(response);
                    setData(response.data.results);
                    setIsLoading(false);
            })
          }
    }, deps);

    return {data, isLoading, error};
}