import { useEffect, useState } from "react"
import { getTopics } from "../__utils__/api"
import TopicsList from "../Components/TopicsList"
import { useNavigate } from "react-router-dom"

export default function TopicsListView() {

    const navigate = useNavigate()
    const [topics, setTopics] = useState([])
    const [topicsLoading, setTopicsLoading] = useState(false)

    useEffect(() => {
        setTopicsLoading(true)
        getTopics()
        .then(({ topics }) => {
            setTopicsLoading(false)
            setTopics(topics)
        })
        .catch((error) => {
            const errorDetails = {
                message: error.message,
                status: error.response.status
            }
            setTopicsLoading(false)
            navigate('/error', { state: errorDetails })
        })
    }, [])

    return <div id='topics-list'>
        <TopicsList topics={topics}/>
    </div>
}