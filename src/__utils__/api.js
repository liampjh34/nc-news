import axios from 'axios'

const request = axios.create({
    baseURL: `https://nc-news-w53u.onrender.com/api`
})

export const getArticles = () => {
    const path = '/articles'
    return request.get(path)
        .then((response) => {
            return response.data.articles
        })
}

export const getArticle = (id) => {
    const path = `/articles/${id}`
    return request.get(path)
    .then((response) => {
        return response.data
    })
}

export const getArticleComments = (id) => {
    const path = `/articles/${id}/comments`
    return request.get(path)
    .then((response) => {
        return response.data.comments
    })
}

export const voteForArticle = (id, numVotes) => {
    const path = `/articles/${id}`
    const voteChange = {
        inc_votes: numVotes
    }

    return request.patch(path, voteChange)
    .then((response) => {
        return response.data
    })
}

export const postComment = (user, comment, articleId) => {
    const path = `/articles/${articleId}/comments`
    const input = {
        "username": user,
        "body": comment
    }
    return request.post(path, input)
    .then((response) => {
        return response.data
    })
}