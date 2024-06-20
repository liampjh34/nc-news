import { useEffect, useState } from 'react'
import ArticlesList from '../Components/ArticlesList'
import { getArticles } from '../__utils__/api'
import ListHeader from '../Components/ListHeader'
import { useParams } from 'react-router-dom'


export default function ArticlesListView() {

    const { slug } = useParams()
    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(false)
    const [error, setError] = useState(null)
    const [params, setParams] = useState({})

    useEffect(() => {
        setArticlesLoading(true)
        getArticles(slug, params)
        .then((response) => {
            setArticles(response)
            setArticlesLoading(false)
        })
        .catch((error) => {
            setArticlesLoading(false)
            setError({ error })
        })
    }, [params, slug])

    return <>
        <ListHeader setParams={setParams}/>
        <ArticlesList articles={articles}/>
    </>
}