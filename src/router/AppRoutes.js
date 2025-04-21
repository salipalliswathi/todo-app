import {Routes, Route} from 'react-router-dom'
import { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('../pages/HomePage'))
export default function AppRoutes () {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  )
}