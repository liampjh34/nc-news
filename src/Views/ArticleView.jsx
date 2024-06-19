import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle} from "../__utils__/api"
import CommentsView from "./CommentsView"
import Votes from "../Components/Votes"
import 'animate.css'

export default function ArticleView() {
    const { id } = useParams()
    const [article, setArticle] = useState({})
    const [articleLoading, setArticleLoading] = useState(false)

    useEffect(() => {
        setArticleLoading(true)
        getArticle(id)
        .then(({article}) => {
            setArticleLoading(false)
            setArticle(article)
        })
    }, [])

    return <>
        <h1>{article.title}</h1>
        <h6>by {article.author}</h6>
        <img 
            src={article.article_img_url} 
            alt='promo image'
            id="articleHeroImage"></img>
        <div>{article.topic}</div>
        <article>{article.body}</article>
        <Votes id={id} passedVotes={article.votes}/>
        <CommentsView articleId={id}/>
    </>
}