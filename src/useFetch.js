import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // make API call
        setLoading(true);
        axios
        .get(url)
        .then((response) => {
            setData(response.data);
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [url]);

    return { data, loading, error}
}

export default useFetch;