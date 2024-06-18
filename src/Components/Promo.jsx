import { Link } from "react-router-dom"

export default function Promo({ id, title, img, timestamp, comments, votes }) {
    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    const formattedTimestamp = new Date(timestamp).toLocaleDateString(undefined, dateConfig)

    const path = `/articles/${id}`
    
    return <>
        <img src={img} alt='promo image'/>
        <Link to={path}><h4>{title}</h4></Link>
        <p>{formattedTimestamp}</p>
        <p>{comments} comments</p>
        <p>{votes} votes</p>
    </>
}