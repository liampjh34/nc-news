# Big News

## Background

### Overview

Big News is a portfolio app. It's a news sharing platform, where users can comment and vote on the news that means the most to them.

### Link

This app can be accessed [here](https://chimerical-croquembouche-a66afe.netlify.app/).

The app provides the frontend to the API available [here](https://github.com/liampjh34/nc-news-backend).

### App inactivity will spin down the backend

The backend is hosted on Render's free tier, so will spin down after a short period of inactivity. 

If the pages /articles, /articles/:id, /topics, /topics/:slug appear not to be serving content, it's most likely related to the above. 

Returning to these pages after a minute or so will prompt the backend to serve content again.

## Getting started

### Pre-requisites
You need at least following module versions for this project:

- Node: v22.0.0
- Node-postgres: v8.7.3

### Installing
Create your desired directory, then clone this repo using the following command:

````
git clone https://github.com/liampjh34/nc-news.git
````

Install all dependencies, including dev dependencies, using the following command:

````
npm install
````
You can run the app locally with the following command:

````
npm run dev
````

Further instructures for testing locally can be found [here](https://vitejs.dev/guide/static-deploy.html#building-the-app).

## Bugs to fix

[] If user votes for an article, they can only undo their vote and cannot then vote the other way.
[x] Optimistic rendering of newly posted comments is not reversed, if posting the comment errors.

---------
This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)