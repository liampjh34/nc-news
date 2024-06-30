import { Link } from "react-router-dom"

export default function TopicCard({ topic }) {

    const renderedTopic = topic.slug ? topic.slug : topic
    
    const path = topic.slug ? `/topics/${topic.slug}` : `/topics/${topic}`
    
    return <div className='topic-card'>
        <Link to={path}>{renderedTopic}</Link>
    </div>
}