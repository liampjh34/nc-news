import { Link } from "react-router-dom"

export default function TopicCard({ topic }) {

    const path = `/topics/${topic.slug}`
    return <div className='topic-card'>
        <Link to={path}>{topic.slug}</Link>
    </div>
}