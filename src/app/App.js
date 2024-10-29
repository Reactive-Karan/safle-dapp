import ParticlesBackground from '../components/particles-background/ParticlesBackground'
import MainLayout from '../layouts/MainLayout'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routesConsts'

const App = () => {
  return (
    <div className="app">
      <ParticlesBackground />
      <MainLayout>
        <RouterProvider router={router} />
      </MainLayout>
    </div>
  )
}

export default App
