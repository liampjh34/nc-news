import { useEffect, useState } from "react"
import Comment from "./Comment"
import { getArticleComments } from "../__utils__/api"


export default function CommentsList({ setComments, comments, articleId }) {

    const [commentsLoading, setCommentsLoading] = useState(false)

    useEffect(() => {
        setCommentsLoading(true)
        getArticleComments(articleId)
        .then((response) => {
            setCommentsLoading(false)
            setComments(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [])

    return <ul>
        {comments.map((comment) => {
           return <li 
            key={comment.comment_id}
            className="comment">
               <Comment comment={comment}/>
           </li> 
        })}
    </ul>
}