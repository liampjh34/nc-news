import { useEffect, useState } from "react";
import CommentsList from "../Components/CommentsList";
import { getArticleComments } from "../__utils__/api";

export default function CommentsView({ articleId }) {

    const [comments, setComments] = useState([])
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

    return <>
        <CommentsList comments={comments}/>
    </>
}