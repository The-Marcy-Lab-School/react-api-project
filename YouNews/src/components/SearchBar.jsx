import { useContext, useEffect, useState } from "react"
import { handleFetch } from "../utils"
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../style/Form.css'
import SearchContext from "../Context/SearchContext";


const SearchBar = () => {
  const {articles, setArticles} = useContext(SearchContext)
  const [selectedOption, setSelectedOption] = useState('')
  
 const handleClick = async(e) => {
       try {
        const [data, error] = await handleFetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e.target.value}&api-key=BzrIgxaSecJBuUXeSAMRvrsAes0xrlrU`)
         if(data) setArticles(data.response.docs)
         
       } catch (error) {
        console.error('Error fetching data:', error); console.error('Error fetching data:', error);
       }
        
  }

  
 
 
 const handleSelectChange = (e) => {
    setSelectedOption(e.target.value); 
    handleClick(e); 
  };
  return (
    <>
    <div className="searchForm"> 
    <div className="w-50 p-3">
    <Row className="g-2">
      <Col md>
      <FloatingLabel
          controlId="floatingSelectGrid"
          label="Works with selects"
        >
          <Form.Select aria-label="Floating label select example" value={selectedOption} onChange={handleClick}>
            <option>Open this select menu</option>
            <option value="world">World</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
            <option value="Lifestyles">Lifestyles</option>
            <option value="Opinion">Opinion</option>
            <option value="Audio">Audio</option>
            <option value="Games">Games</option>
            <option value="Cooking">Cooking</option>
            <option value="Wire Cutter">Wire Cutter</option>
            <option value="Athletic">Athletic</option>
          </Form.Select>
        </FloatingLabel>
      </Col>
      <Col md>
        <FloatingLabel controlId="floatingInputGrid" label="Seacrh Up Your Topic">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
      </Col>
    </Row>
  </div>

 </div>
 
</>
);
  
}

export default SearchBar