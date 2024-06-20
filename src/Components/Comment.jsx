import { useContext, useState } from "react"
import { UserContext } from "../Contexts/Contexts"
import { deleteComment } from "../__utils__/api"

export default function Comment({ comment, id }) {

    const user = useContext(UserContext)
    const [commentVisible, setCommentVisible] = useState(true)
    const [error, setError] = useState(null)

    const handleClick = (event) => {
        setCommentVisible(false)
        deleteComment(id)
        .then((response) => {})
        .catch((error) => {
            setCommentVisible(true)
            setError({ error })
        })
    }

    if (commentVisible) {
        return <div className='comment'>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {comment.author === user ? <button 
            className='delete-button'
            onClick={handleClick}>Delete</button> : null}
        </div>
    } else {
        null
    }
}