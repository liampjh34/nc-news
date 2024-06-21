import { useEffect, useState } from 'react'
import ArticlesList from '../Components/ArticlesList'
import { getArticles } from '../__utils__/api'
import ListHeader from '../Components/ListHeader'
import { useNavigate, useParams } from 'react-router-dom'


export default function ArticlesListView() {

    const { slug } = useParams()
    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(false)
    const [params, setParams] = useState({})
    const navigate = useNavigate()

    
    useEffect(() => {
        setArticlesLoading(true)
        getArticles(slug, params)
        .then((response) => {
            setArticles(response)
            setArticlesLoading(false)
        })
        .catch((error) => {
            const errorDetails = {
                message: error.message,
                status: error.response.status
            }
            setArticlesLoading(false)
            navigate('/error', { state: errorDetails })
        })
    }, [params, slug])

    return <>
        <ListHeader setParams={setParams}/>
        <ArticlesList articles={articles}/>
    </>
}