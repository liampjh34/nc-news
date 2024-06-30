export default function ArticleHeader({ title, author }) {
    return <div className='article-header'>
        <h1>{title}</h1>
        <h4>by {author}</h4>
    </div>
}