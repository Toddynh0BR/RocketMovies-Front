import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { User } from '../pages/User'
import { CreateMovie } from '../pages/CreateMovie'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
  return (
    <Routes basename="/RocketMovies-Front">
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/create" element={<CreateMovie />} />
      <Route path="/preview/:id" element={<MoviePreview />} />
    </Routes>
  )
}