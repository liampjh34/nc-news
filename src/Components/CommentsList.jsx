import Comment from "./Comment"

export default function CommentsList({ comments }) {
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