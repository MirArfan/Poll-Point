import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './pages/Auth/LoginForm'
import SignUpForm from './pages/Auth/SignUpForm'
import Home from './pages/Deshboard/Home'
import CreatePoll from './pages/Deshboard/CreatePoll'
import MyPolls from './pages/Deshboard/MyPolls'
import VotedPolls from './pages/Deshboard/VotedPolls'
import Bookmarks from './pages/Deshboard/Bookmarks'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root/>} />
          <Route path='/login' exact element={<LoginForm/>} />
          <Route path='/signUp' exact element={<SignUpForm/>} />
          <Route path='/deshboard' exact element={<Home/>} />
          <Route path='/create-poll' exact element={<CreatePoll/>} />
          <Route path='/my-poll' exact element={<MyPolls/>} />
          <Route path='/voted-polls' exact element={<VotedPolls/>} />
          <Route path='/bookmarked-polls' exact element={<Bookmarks/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root=()=>{
  // check if token exists in localStorage
  const isAuthenticated =!!localStorage.getItem("token");
  // Redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ?(
    <Navigate to="/deshboard" />
  ):(
    <Navigate to="/login" />
  );
};