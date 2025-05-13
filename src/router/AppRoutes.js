import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('../pages/HomePage'))
const Counter = lazy(() => import('../components/Counter'))
const UserDetailsForm = lazy(() => import('../components/UserDetailsForm'))
const TodoApp = lazy (() => import('../components/TodoApp'))

export default function AppRoutes () {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/count" element={<Counter/>}></Route>
          <Route path="/user-form" element={<UserDetailsForm/>}></Route>
          <Route path="/todo" element={<TodoApp/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}