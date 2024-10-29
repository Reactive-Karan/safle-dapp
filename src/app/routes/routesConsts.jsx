import { RoutingConfig } from '../../consts/routeConsts'
import { GameTable, Home } from './lazyComponents'

const { createBrowserRouter } = require('react-router-dom')

const router = createBrowserRouter([
  {
    path: RoutingConfig.ROOT,
    element: <Home />
  },
  {
    path: RoutingConfig.GAMES,
    element: <GameTable />
  },
  {
    path: RoutingConfig[404],
    element: <h1>Page not found</h1>
  }
])

export default router
