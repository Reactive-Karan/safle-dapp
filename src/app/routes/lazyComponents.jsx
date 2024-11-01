const { lazy } = require('react')

export const Home = lazy(() => import('../../pages/Home'))
export const GameTable = lazy(() => import('../../pages/GameTable'))
export const PageNotFound = lazy(() => import('../../pages/PageNotFound'))
