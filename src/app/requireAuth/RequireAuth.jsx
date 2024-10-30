import { useEthers } from '@usedapp/core'
import { Navigate } from 'react-router-dom'
import { RoutingConfig } from '../../consts/routeConsts'

const RequireAuth = ({ children }) => {
  const { account, library } = useEthers()
  if (account && library) return children
  else return <Navigate to={RoutingConfig.ROOT} replace />
}

export default RequireAuth
