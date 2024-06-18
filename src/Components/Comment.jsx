export default function Comment({ comment }) {
    return <>
        <p>{comment.author}</p>
        <p>{comment.body}</p>
        <p>Votes: {comment.votes}</p>
    </>
}