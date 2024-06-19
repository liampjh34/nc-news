import { useEffect, useState } from "react";
import { postComment } from "../__utils__/api";
import { useContext } from "react";
import { UserContext } from "../Contexts/Contexts";

export default function CommentComposer({ articleId, comments, setComments }) {

    const [comment, setComment] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [submitAttempted, setSubmitAttempted] = useState(false)
    const [commentLoading, setCommentLoading] = useState(true)
    const [error, setError] = useState(Error())
    const user = useContext(UserContext)
    console.log(`formValid is ${formValid} inside the component`)
    console.log(`submitAttempted is ${submitAttempted}`)

    useEffect(() => {
        
    }, [formValid, submitAttempted])

    const validateForm = () => {
        console.log(` formValid ${formValid} at the start of validateForm()`)
        if (comment.trim() === '') {
            setFormValid(false)
            return false
        }
        setFormValid(true)
        return true
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log(`'${comment}' submitted`)
        event.preventDefault()
        setCommentLoading(true)
        setSubmitAttempted(true)
        if (!validateForm()) {
            return
        }
        
        setComments([{
            comment_id: 'temporaryKey',
            author: user,
            body: comment,
            votes: 0
        }, ...comments])
        setComment('')
        // postComment(user, comment, articleId)
        // .then((response) => {
        //     setCommentLoading(false)
        // })
        // .catch((error) => {
        //     setError(error)
        //     setCommentLoading(false)
        // })
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