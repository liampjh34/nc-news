import axios from 'axios'
import { useEffect, useState } from 'react'
import ArticlesList from '../Components/ArticlesList'
import { getArticles } from '../__utils__/api'


export default function ArticlesListView() {
    
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    console.log(isLoading)

    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    
    const todaysDate = new Date().toLocaleDateString(undefined, dateConfig)

    useEffect(() => {
        setIsLoading(true)
        getArticles()
        .then((response) => {
            setArticles(response)
            setIsLoading(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return <>
        <h2>{todaysDate}</h2>
        <ArticlesList articles={articles}/>
    </>
}