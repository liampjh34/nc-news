import { useContext, useEffect, useState } from "react"
import { UserContext } from "../Contexts/Contexts"
import { deleteComment } from "../__utils__/api"

export default function Comment({ comment, id, setComments, comments, setToastToggle, setError }) {

    const user = useContext(UserContext)

    useEffect(() => {
    }, [])

    const handleClick = (event) => {
        const removedComment = comments.find(comment => comment.comment_id === id)

        setComments((previousComments) => {
            const newComments = previousComments.filter((comment) => {
                return comment.comment_id !== id
            })
            return newComments
        })

        deleteComment(id)
        .then((response) => {})
        .catch((error) => {
            const userFacingError = {
                message: error.message,
                status: error.response.status
            }
            setToastToggle(true)
            setComments((previousComments) => {
                return [...previousComments, removedComment].sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
            })
            setError(userFacingError)
        })
    }

        return <div className='comment'>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>Votes: {comment.votes}</p>
            {comment.author === user ? <button 
            className='delete-button'
            onClick={handleClick}>Delete</button> : null}
        </div>
}