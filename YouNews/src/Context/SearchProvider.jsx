import { handleFetch } from '../utils'
import SearchContext from './SearchContext'
import { useEffect , useState } from 'react'

const SearchProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const[cards, setCards] = useState([])

    let contextValues = {
        cards,
        setCards,
        articles,
        setArticles,
    }
    
    return(
    <SearchContext.Provider value={contextValues} >
        { children }
    </SearchContext.Provider>
  )
}

export default SearchProvider