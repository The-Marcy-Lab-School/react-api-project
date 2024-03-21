import { useState } from 'react'
import SearchBar from '../components/SearchBar'
import ArticleCards from '../components/ArticleCards';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/Navbar'
import '../App.css'
import TrendingArticleCarousel from '../components/TrendingArticleCarousel';
'../TrendingArticles.css' 

function Home(){
    return(
        <>
        <NavBar />
        <br />
        <TrendingArticleCarousel />
        <br />
        <SearchBar />
        <br />
        <ArticleCards />
        </>
      )
}

export default Home 