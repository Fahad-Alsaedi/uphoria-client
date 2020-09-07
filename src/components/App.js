import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import "../styles/App.css"
import BottomNav from "../components/BottomNav/BottomNav"
import SearchBar from './SearchBar'
import TopNav from '../components/TopNav/TopNav'

import Video from "./Video"
import SideBar from "./SideBar"

const App = () => {
  return (
    <div className="App">
      <TopNav/>
      {/* <SearchBar /> */}
      <header className="App-header">
        <h1>We are ready to go!</h1>
      </header>
      <Switch>
        {/* Routes to go here later */}
      </Switch>
      <SideBar/>
      <BottomNav/>
    </div>
  )
}

export default App
