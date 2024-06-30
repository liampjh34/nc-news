import TopicCard from "./TopicCard";

export default function TopicsList({ topics }) {
    return <ul>
        {topics.map((topic) => {
            return <li key={topic.slug}>
            <TopicCard topic={topic}/>
            </li>
        })}
    </ul>
}