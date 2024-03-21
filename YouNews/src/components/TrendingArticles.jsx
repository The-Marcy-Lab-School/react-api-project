import { useContext } from 'react';
import TrendingContext from "../Context/TrendingContext";
// import TrendingArticleCard from './TrendingArticleCard';
import TrendingArticleCarousel from './TrendingArticleCarousel';

const TrendingArticles = () => {

    const { trendingArticles } = useContext(TrendingContext);

    return (
        <div className="carousel">{
            trendingArticles?.map(article => (<TrendingArticleCarousel 
                // key={trendingArticles.id} 
                title={article.title}
                img={article.media?.[0]?.['media-metadata']?.[2]?.url ?? ''}
                link={article.url}
              />)
            )
        }</div>
    )
}

export default TrendingArticles;