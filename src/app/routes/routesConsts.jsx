import { RoutingConfig } from '../../consts/routeConsts'
import MainLayout from '../../layouts/MainLayout'
import RequireAuth from '../requireAuth/RequireAuth'
import { GameTable, Home, PageNotFound } from './lazyComponents'

const { createBrowserRouter } = require('react-router-dom')

const router = createBrowserRouter([
  {
    path: RoutingConfig.ROOT,
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    )
  },
  {
    path: RoutingConfig.GAMES,
    element: (
      <MainLayout>
        <RequireAuth>
          <GameTable />
        </RequireAuth>
      </MainLayout>
    )
  },
  {
    path: RoutingConfig[404],
    element: <PageNotFound />
  }
])

export default router
