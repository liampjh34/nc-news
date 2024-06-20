import { useEffect, useState } from "react"
import { getTopics } from "../__utils__/api"
import TopicsList from "../Components/TopicsList"

export default function TopicsListView() {

    const [topics, setTopics] = useState([])
    const [topicsLoading, setTopicsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setTopicsLoading(true)
        getTopics()
        .then(({ topics }) => {
            setTopicsLoading(false)
            setTopics(topics)
        })
        .catch((error) => {
            setTopicsLoading(false)
            setError({ error })
        })
    }, [])

    return <>
    <TopicsList topics={topics}/>
    </>
}