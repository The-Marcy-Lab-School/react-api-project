import { useContext , useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../style/Form.css'
import SearchContext from '../Context/SearchContext';

const ArticleCards = () =>{
const {articles } = useContext(SearchContext)
console.log(articles[0])
 return(
        <>
        <center>
        <div id="container"> 
        <div id="flex-container">
        {articles && articles.map((article, index) => (
          <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={`https://nyt.com/${article.multimedia[22]?.url}`} /> 
            <Card.Body>
              <Card.Title>{article.headline.main}</Card.Title> 
              <Card.Text>
                {article.abstract}
              </Card.Text>
              <Button variant="primary" href={article.web_url} target="_blank">Read More</Button> {/* Assuming each article has a URL property */}
            </Card.Body>
          </Card>
        ))}
        </div>
        </div>
        </center>
        
      </>
      );
}


export default ArticleCards