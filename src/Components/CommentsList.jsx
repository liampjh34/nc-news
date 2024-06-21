import { useEffect, useState } from "react"
import Comment from "./Comment"
import { getArticleComments } from "../__utils__/api"


export default function CommentsList({ setComments, comments, articleId, setToastToggle, setError }) {

    const [commentsLoading, setCommentsLoading] = useState(false)

    useEffect(() => {
        setCommentsLoading(true)
        getArticleComments(articleId)
        .then((response) => {
            setCommentsLoading(false)
            setComments(response)
        })
        .catch((error) => {
            setCommentsLoading(false)
        })
    }, [])

    return <ul>
        {comments.map((comment) => {
           return <li key={comment.comment_id}>
               <Comment 
                comment={comment} 
                id={comment.comment_id} 
                comments={comments} 
                setComments={setComments}
                setToastToggle={setToastToggle}
                setError={setError}/>
           </li> 
        })}
    </ul>
}