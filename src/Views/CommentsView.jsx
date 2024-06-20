import { useEffect, useState, useContext } from "react";
import CommentsList from "../Components/CommentsList";
import CommentComposer from "../Components/CommentComposer";

export default function CommentsView({ articleId }) {

    const [comments, setComments] = useState([])

    useEffect(() => {}, [comments])

    return <>
        <h1>Comments</h1>
        <CommentComposer articleId={ articleId } comments={comments} setComments={setComments}/>
        <CommentsList setComments={setComments} comments={comments} articleId={articleId}/>
    </>
}