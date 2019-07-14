import React, {useEffect, useState, useReducer} from 'react';
import axios from 'axios';

const dataFetch = (state, action) => {
    switch(action.type){
        case 'FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case 'FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                hasError: false,
                data: action.payload
            }
        case 'FETCH_ERROR':
            return {
                ...state,
                isLoading: false,
                hasError: true,
            }
        default:
            throw new Error();
    }
}

const FetchAPIData = (initalData) => {
    const API_KEY = '4a3b711b'
    const [url, setUrl] = useState(`https://www.omdbapi.com/?s=${"batman"}&apikey=${API_KEY}`);
    const [state, dispatch] = useReducer(dataFetch, {
        isLoading: false, 
        hasError: false,
        data: initalData
    })

    useEffect(() => {
    const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' });
        try {
            const result = await axios(url)
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data.Search })
        } catch(err) {
            dispatch({ type: 'FETCH_ERROR' })
        }
    }
    fetchData()

  }, [url]);

  return [state, setUrl]
}

export default FetchAPIData