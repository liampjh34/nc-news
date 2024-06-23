import './App.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/Custom.scss'
import { useContext, useState } from 'react'
import { UserContext } from './Contexts/Contexts'
import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import ArticlesListView from './Views/ArticlesListView'
import HomeView from './Views/HomeView'
import ArticleView from './Views/ArticleView'
import TopicsView from './Views/TopicsListView';
import ErrorView from './Views/ErrorView';

function App() {

  const { user } = useContext(UserContext)

  return (<UserContext.Provider value={user}>
      <Header/>
      <Routes>
        <Route path="/" element={<ArticlesListView />}/>
        <Route path="/articles" element={<ArticlesListView />}/>
        <Route path="/articles/:id" element={<ArticleView/>}/>
        <Route path="/topics" element={<TopicsView/>}/>
        <Route path="/topics/:slug" element={<ArticlesListView/>}/>
        <Route path="/error" element={<ErrorView/>}/>
      </Routes>
  
  </UserContext.Provider>
  )
}

export default App
