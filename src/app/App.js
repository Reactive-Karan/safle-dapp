import ParticlesBackground from '../components/particles-background/ParticlesBackground'

import { RouterProvider } from 'react-router-dom'
import router from './routes/routesConsts'
import Footer from '../components/footer/Footer'

const App = () => {
  return (
    <div className="app">
      <ParticlesBackground />
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
