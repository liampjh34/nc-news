import { Button } from "react-bootstrap";
import Heart from "./Heart";
import { useEffect, useState } from "react";
import { voteForArticle } from "../__utils__/api";

export default function Votes({ id, passedVotes }) {

    const [userVoted, setUserVoted] = useState(false)
    const [userAction, setUserAction] = useState('')
    const [votesLoading, setVotesLoading] = useState(false)
    const [error, setError] = useState(Error())
    const [votes, setVotes] = useState(0)

    useEffect(() => {
        
    }, [votes])

    const addVote = (event) => {
        setVotesLoading(true)
        setUserVoted(true)
        setUserAction('add')
        setVotes(passedVotes+1)
        voteForArticle(id, 1)
        .then((response) => {})
        .catch((error) => {
            setError(error)
            setVotes(passedVotes)
        })
    }

    const minusVote = (event) => {
        setVotesLoading(true)
        setUserVoted(true)
        setUserAction('minus')
        setVotes(passedVotes-1)
        voteForArticle(id, -1)
        .then((response) => {})
        .catch((error) => {
            setError(error)
            setVotes(passedVotes)
        })
    }

    return <div>
        <p>Like this article? Support the author!</p>
        <Button 
            variant='outline-danger' 
            aria-label="minus 1 like"
            onClick={minusVote}
            disabled={userAction === 'minus' ? true : false}
        >-</Button>
        <Heart 
            aria-hidden="true"
            userVoted={userVoted}
            userAction={userAction}/>
        <Button 
            variant='outline-success' 
            aria-label="plus 1 like"
            onClick={addVote}
            disabled={userAction === 'add' ? true : false}
        >+</Button>

        <p>{userVoted ? votes : passedVotes} votes</p>
    </div>
}