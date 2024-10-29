import { GameTable } from './lazyComponents'

const { createBrowserRouter } = require('react-router-dom')

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>
  },
  {
    path: '/games',
    element: <GameTable />
  }
])

export default router
