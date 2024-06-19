import { Routes, Route, Router } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes() {
  return (
    <Router basename="/RocketMovies-Front">
      <Route path="/RocketMovies-Front/" element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Router>
  )
}