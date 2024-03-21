import { useState, useEffect } from 'react';
import TrendingContext from './TrendingContext';
import { handleFetch } from '../utils';

const TrendingProvider = ({ children }) => {
    const [trendingArticles, setTrendingArticles] = useState([]);
    const [error, setError] = useState(null);

    const url = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=BzrIgxaSecJBuUXeSAMRvrsAes0xrlrU'

    useEffect(() => {
        const doFetch = async () => {
            const [data, error] = await handleFetch(url);
            if (data) setTrendingArticles(data.results);
            if (error) setError(error);
            console.log(data.results);
        }
        doFetch();
    }, []);

    let contextValues = { trendingArticles, error };

    return (
        <TrendingContext.Provider value={contextValues}>
            { children }
        </TrendingContext.Provider>
    )


}

export default TrendingProvider;