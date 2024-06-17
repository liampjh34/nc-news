export default function Promo({ title, img, timestamp, comments, votes }) {
    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    const formattedTimestamp = new Date(timestamp).toLocaleDateString(undefined, dateConfig)
    
    return <>
        <img src={img} />
        <h3>{title}</h3>
        <p>{formattedTimestamp}</p>
        <p>{comments} comments</p>
        <p>{votes} votes</p>
    </>
}