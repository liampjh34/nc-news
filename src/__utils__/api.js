import axios from 'axios'

export const getArticles = () => {
    const path = 'https://nc-news-w53u.onrender.com/api/articles'
    return axios.get(path)
        .then((response) => {
            return response.data.articles
        })
}

export const getArticle = (id) => {
    const path = `https://nc-news-w53u.onrender.com/api/articles/${id}`
    return axios.get(path)
    .then((response) => {
        return response.data
    })
}