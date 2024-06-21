import { useEffect, useState, useContext } from "react";
import CommentsList from "../Components/CommentsList";
import CommentComposer from "../Components/CommentComposer";
import ErrorToast from "../Components/ErrorToast";

export default function CommentsView({ articleId }) {

    const [comments, setComments] = useState([])
    const [toastToggle, setToastToggle] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
    }, [])

    return <>
        <h1>Comments</h1>
        <CommentComposer 
            articleId={ articleId } 
            comments={comments} 
            setComments={setComments}
            setError={setError}
            setToastToggle={setToastToggle}/>
        <CommentsList 
            setComments={setComments} 
            comments={comments} 
            articleId={articleId}
            setError={setError}
            setToastToggle={setToastToggle}/>
        {toastToggle ? <ErrorToast error={error} setToastToggle={setToastToggle}/> : null}
    </>
}