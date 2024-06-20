import { useContext, useState } from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header'
import ArticlesListView from './Views/ArticlesListView'
import HomeView from './Views/HomeView'
import ArticleView from './Views/ArticleView'
import { UserContext } from './Contexts/Contexts'

function App() {

  const { user } = useContext(UserContext)

  return (<UserContext.Provider value={user}>
      <Header/>
      <Routes>
        <Route path="/" element={<HomeView />}/>
        <Route path="/articles" element={<ArticlesListView />}/>
        <Route path="/articles/:id" element={<ArticleView/>}/>
      </Routes>
  
  </UserContext.Provider>
  )
}

export default App
