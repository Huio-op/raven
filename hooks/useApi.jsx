import {useEffect, useState} from "react";

export const useGetApi = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(r => setData(r.json()))
    },[])

    return {data}
}

export const usePostApi = (url, params) => {
    const [result, setResult] = useState({});

    useEffect(() => {
        fetch(url, {
            method: 'POST',
            ...params
        }).then(r => setResult(r))
    })

    return {result}
}