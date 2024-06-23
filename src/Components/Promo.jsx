import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Promo({ id, title, img, timestamp, comments, votes }) {
    const dateConfig = {
        year: '2-digit',
        month: 'long',
        day: '2-digit'
    }
    const formattedTimestamp = new Date(timestamp).toLocaleDateString(undefined, dateConfig)

    const path = `/articles/${id}`
    
    return <Link to={path} id='card-container'>
            <Card style={{width: '18rem'}}>
            <Card.Img variant='top' src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{formattedTimestamp}</Card.Text>
            </Card.Body>
            <Card.Footer className='text-muted'>
                {comments} comments, {votes} votes
            </Card.Footer>
        </Card>
    </Link>
}