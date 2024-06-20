import TopicCard from "./TopicCard";

export default function TopicsList({ topics }) {
    return <>
        {topics.map((topic) => {
            return <li key={topic.slug}>
            <TopicCard topic={topic}/>
            </li>
        })}
    </>
}