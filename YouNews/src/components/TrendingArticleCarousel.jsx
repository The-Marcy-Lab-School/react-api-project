// const TrendingArticleCard = ({ title, img, url }) => {

//     return (
//         <div className="trending article card">
//             <div>
//                 <div className="image">
//                     <img alt="thumbnail" src={img} />
//                 </div>
//                 <div className="content">
//                     <div className="header">{title}</div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default TrendingArticleCard;

import Carousel from 'react-bootstrap/Carousel';
import { useContext } from 'react';
import TrendingContext from "../Context/TrendingContext";
'../TrendingArticles.css'

const TrendingArticleCarousel = () => {
  
  const { trendingArticles } = useContext(TrendingContext);

  return (
    <center>
    <Carousel style={{width : '80rem'}}>{
      trendingArticles?.filter((article, index) => trendingArticles.indexOf(article) !== 10)
      .map((article, index) => (
  
          <Carousel.Item >
          <img src={article.media?.[0]?.['media-metadata']?.[2]?.url ?? ''} style={{width : '65rem', height: '40rem'}}/>
          <Carousel.Caption >
            <div >
              <h3>{article.title}</h3>
            <p>{article.abstract}</p>
            </div> 
          </Carousel.Caption>
        </Carousel.Item>

      ))
      }
     
    </Carousel>
    </center>
  );
}

export default TrendingArticleCarousel;