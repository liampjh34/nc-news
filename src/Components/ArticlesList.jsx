import Promo from "./Promo"

export default function ArticlesList({ articles }) {
    console.log(articles)
    return <ul>
        {articles.map((article) => {
            return <li className='promo' key={article.article_id}>
                <Promo 
                    img={article.article_img_url}
                    title={article.title} 
                    timestamp={article.created_at} 
                    comments={article.comments} 
                    votes={article.votes}> </Promo>
                </li>
        })}
    </ul>
}