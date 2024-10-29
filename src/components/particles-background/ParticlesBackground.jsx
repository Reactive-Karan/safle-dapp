import { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim' // Make sure to install this package
import { useTheme } from '../../contexts/ThemeProvider'

const ParticlesBackground = () => {
  const [init, setInit] = useState(false)

  const { isDarkMode } = useTheme()

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = (container) => {
    console.log(container)
  }

  const particleOptions = {
    background: {
      color: {
        value: isDarkMode ? '#071838' : '#f8f8f8' // Background color
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: isDarkMode ? '#dddddd' : '#808080' // Particle color
      },
      links: {
        color: isDarkMode ? '#dddddd' : '#808080',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'bounce'
        },
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'square'
      },
      size: {
        value: { min: 1, max: 8 }
      }
    },
    detectRetina: true
  }
  return (
    <>
      {init && (
        <Particles
          className="app-particles-background"
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={particleOptions}
        />
      )}
    </>
  )
}

export default ParticlesBackground
