import { useEffect, useState } from "react";
import { getArticlesByTopic } from "../__utils__/api";
import { useParams } from "react-router-dom";
import ArticlesList from "../Components/ArticlesList";

export default function ArticlesByTopicView() {

    const { slug } = useParams()

    const [articles, setArticles] = useState([])
    const [articlesLoading, setArticlesLoading] = useState(false)
    const [error, setError] = useState(null)

    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    
    const todaysDate = new Date().toLocaleDateString(undefined, dateConfig)

    useEffect(() => {
        setArticlesLoading(true)
        getArticlesByTopic(slug)
        .then(({ articles }) => {
            setArticles(articles)
            setArticlesLoading(false)
        })
        .catch((error) => {
            setArticlesLoading(false)
            setError({ error })
        })
    })

    return <>
        <h2>{todaysDate}</h2>
        <ArticlesList articles={articles}/>
    </>

}