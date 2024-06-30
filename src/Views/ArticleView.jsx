import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getArticle} from "../__utils__/api"
import CommentsView from "./CommentsView"
import Votes from "../Components/Votes"
import ArticleHeader from "../Components/ArticleHeader"
import 'animate.css'
import { useNavigate } from "react-router-dom"
import TopicCard from "../Components/TopicCard";

export default function ArticleView() {
    const { id } = useParams()
    const [article, setArticle] = useState(null)
    const [articleLoading, setArticleLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setArticleLoading(true)
        getArticle(id)
        .then(({article}) => {
            setArticleLoading(false)
            setArticle(article)
        })
        .catch((error) => {
            const errorDetails = {
                message: error.message,
                status: error.response.status
            }
            setArticleLoading(false)
            navigate('/error', { state: errorDetails })
        })
    }, [])

    if (articleLoading) {
        return <div>Loading...</div>;
    }

    if (!article) {
        return null; // Return null or a loading state if article is not loaded
    }

    return <div className='article'>
        <ArticleHeader title={article.title} author={article.author}/>
        <img 
            src={article.article_img_url} 
            alt='promo-image'
            className="article-image"></img>
        <article>{article.body}</article>
        <div id='article-footer'>
            <Votes id={id} passedVotes={article.votes}/>
            <div id='article-topic-card'>
                <TopicCard
                    topic={article.topic}/>
                    <p>see more</p>
            </div>
        </div>
        <CommentsView articleId={id}/>
    </div>
}