import { Button } from "react-bootstrap";
import Heart from "./Heart";
import { useEffect, useState } from "react";
import { voteForArticle } from "../__utils__/api";

export default function Votes({ id, passedVotes }) {

    console.log(passedVotes, 'votes')

    const [userVoted, setUserVoted] = useState(false)
    const [votesLoading, setVotesLoading] = useState(false)
    const [error, setError] = useState(Error())
    const [votes, setVotes] = useState(passedVotes)
    
    useEffect(() => {
        console.log(votesLoading, 'loading');
        console.log(votes, 'votes from use Effect');
    }, [votes, votesLoading]);

    const handleVote = async (event) => {
        setVotesLoading(true)

        try {
            if (userVoted) {
                await voteForArticle(id, -1);
                setVotes(votes - 1)
            } else {
                await voteForArticle(id, 1);
                setVotes(votes + 1)
            }
            setUserVoted(!userVoted);
        } catch (error) {
            setError(error);
            setVotes(passedVotes);
        } finally {
            setVotesLoading(false);
        }

    }

    return <div className='like-button-container'>
        <button
            aria-hidden="true"
            onClick={handleVote}
            className='like-button'>
            <Heart 
                userVoted={userVoted}/>
        </button>
        <p id='like-button-votes'>{votes}</p>
    </div>
}