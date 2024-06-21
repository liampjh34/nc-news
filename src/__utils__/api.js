import axios from 'axios'

const request = axios.create({
    baseURL: `https://nc-news-w53u.onrender.com/api`
})

export const getArticles = (topic=undefined, params) => {
    const path = '/articles'
    const requestParams = { params: {
        'topic': topic,
        sort_by: params.sortBy,
        order: params.orderBy
    } }
    return request.get(path, requestParams)
        .then((response) => {
            return response.data.articles
        })
        .catch((error) => {
            return Promise.reject(error)
        })
}

export const getArticle = (id) => {
    const path = `/articles/${id}`
    return request.get(path)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return Promise.reject(error)
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
    .catch((error) => {
        return Promise.reject(error)
    })
}

export const deleteComment = (commentId) => {
    const path = `/comments/${commentId}`
    return request.delete(path)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}

export const getTopics = () => {
    const path = '/topics'
    return request.get(path)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
        return Promise.reject(error)
    })
}