import { useEffect, useState } from "react";
import { postComment } from "../__utils__/api";
import { useContext } from "react";
import { UserContext } from "../Contexts/Contexts";

export default function CommentComposer({ articleId, comments, setComments, setError, setToastToggle }) {

    const [comment, setComment] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [commentLoading, setCommentLoading] = useState(false)
    const user = useContext(UserContext)

    useEffect(() => {
    }, [formValid, submitAttempted])

    const validateForm = async () => {
        if (comment.trim() === '') {
            setFormValid(false)
            return Promise.reject({
                message: 'You need to write a comment',
                status: 400
            })
        }
        setFormValid(true)
        return Promise.resolve(true)
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setCommentLoading(true)
        setSubmitAttempted(true)

        validateForm()
        .then((response) => {
            const temporaryKey = `temporaryKey${Date.now()}`
            setComments([{
                comment_id: String(temporaryKey),
                author: user,
                body: comment,
                votes: 0
            }, ...comments])
            setComment('')
            return postComment(user, comment, articleId)
        })
        .then(({ comment }) => {
            setCommentLoading(false)
            setComments((originalComments) => {
                const newComments = originalComments.map((originalComment) => {
                    if (String(originalComment.comment_id).startsWith('temporaryKey')) {
                        return comment
                    } else {
                        return originalComment
                    }
                })
                return newComments
            })
        })
        .catch((error) => {
            setCommentLoading(false)
            setComments((originalComments) => {
                const newComments = originalComments.filter((originalComment) => {
                    if (typeof originalComment.comment_id === 'number') {
                        return originalComment
                    }
                })
                return newComments
            })
            if (error.response) {
                const userFacingError = {
                    message: error.response.data.msg,
                    status: error.response.status
                }
                setError(userFacingError)
                setToastToggle(true)
            } else {
                const userFacingError = {
                    message: error.message,
                    status: error.status
                }
                setError(userFacingError)
                setToastToggle(true)
            }
        })
    }

    return <form>
        <label htmlFor='comment'>Tell us what you think</label>
        <input 
            id='comment' 
            name='comment' 
            placeholder='Your comment' 
            aria-placeholder="Type your comment" 
            value={comment} 
            onChange={handleChange}
            className={!formValid && submitAttempted ? 'invalidInput' : ''}></input>
        {!formValid && submitAttempted && <p>You need to write a comment</p>}
        <button className='postCommentButton' type='submit' onClick={handleSubmit}>Post</button>
    </form>
}