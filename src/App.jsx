import { useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import ArticlesListView from './Views/ArticlesListView'
import HomeView from './Views/HomeView'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/articles" element={<ArticlesListView />}/>
      </Routes>
    </>
  )
}

export default App
