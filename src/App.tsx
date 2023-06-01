import { Suspense, lazy } from 'react'
import { Header } from './components/Header'
import { Route } from 'wouter'

const TopStoriesPage = lazy(() => import('./pages/TopStories'))
const DetailPage = lazy(() => import('./pages/Datail'))

export default function App() {

  return (
    <>
      <Header />

      <Suspense fallback='Loading...'>
        <Route path='/' component={TopStoriesPage} />
        <Route path='/article/:id' component={DetailPage} />
      </Suspense>
    </>
  )
}