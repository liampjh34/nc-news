import axios from 'axios'
import { useEffect, useState } from 'react'
import ArticlesList from '../Components/ArticlesList'


export default function ArticlesListView() {
    const path = 'https://nc-news-w53u.onrender.com/api/articles'
    const [articles, setArticles] = useState([])
    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    
    const todaysDate = new Date().toLocaleDateString(undefined, dateConfig)

    useEffect(() => {
        axios.get(path)
        .then((response) => {
            setArticles(response.data.articles)
        })
    }, [])

    return <>
        <h2>{todaysDate}</h2>
        <ArticlesList articles={articles}/>
    </>
}