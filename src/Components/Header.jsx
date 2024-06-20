import { Link } from "react-router-dom"

export default function Header() {
    return <div className="header">
        <h1>big news.</h1>
        <img src="./icons/list.svg" aria-label="Menu"></img>
        <ul>
            <Link to="/articles">Articles</Link>
            <Link to="/topics">Topics</Link>
        </ul>
    </div>
}