import { useEffect, useState } from "react";
import { postComment } from "../__utils__/api";
import { useContext } from "react";
import { UserContext } from "../Contexts/Contexts";

export default function CommentComposer({ articleId, comments, setComments }) {

    const [comment, setComment] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [commentLoading, setCommentLoading] = useState(false)
    const [error, setError] = useState(Error())
    const user = useContext(UserContext)
    console.log(`form is ${formValid} inside the component`)

    useEffect(() => {
        
    }, [formValid])

    const validateForm = () => {
        console.log(` form is ${formValid} at the start of validateForm()`)
        if (comment !== '') {
            setFormValid(true)
        }
    }

    const handleChange = (event) => {
        setComment(event.target.value)
    }

    const handleSubmit = (event) => {
        console.log(`'${comment}' submitted`)
        event.preventDefault()
        setCommentLoading(true)
        validateForm()
        if (formValid) {
            setComments([{
                comment_id: 'temporaryKey',
                author: user,
                body: comment,
                votes: 0
            }, ...comments])
            setComment('')
        }
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
        <input id='comment' name='comment' placeholder='Your comment' aria-placeholder="Type your comment" value={comment} onChange={handleChange}></input>
        {formValid ? null : <p>You need to write a comment</p>}
        <button className='postCommentButton' type='submit' onClick={handleSubmit}>Post</button>
    </form>
}