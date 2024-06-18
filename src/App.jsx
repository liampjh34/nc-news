import { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesListView from './Views/ArticlesListView'
import HomeView from './Views/HomeView'
import ArticleView from './Views/ArticleView'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/articles" element={<ArticlesListView />}/>
        <Route path="/articles/:id" element={<ArticleView/>}/>
      </Routes>
    </>
  )
}

export default App
