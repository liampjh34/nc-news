import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle } from "../__utils__/api"

export default function ArticleView() {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getArticle(id)
        .then(({article}) => {
            setIsLoading(false)
            setArticle(article)
        })
    }, [])

    return <>
        <h1>{article.title}</h1>
        <h6>by {article.author}</h6>
        <p>{article.votes} votes, {article.comment_count} comments</p>
        <img src={article.article_img_url}></img>
        <div>{article.topic}</div>
        <article>{article.body}</article>
    </>
}