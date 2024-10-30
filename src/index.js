import ReactDOM from 'react-dom/client'
import App from './app/App'
import reportWebVitals from './reportWebVitals'
import DappProvider from './contexts/DappProvider'
import { ThemeProvider } from './contexts/ThemeProvider'
import { Suspense } from 'react'
import './index.scss'
import { Spin } from 'antd'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Suspense fallback={<Spin />}>
    <ThemeProvider>
      <DappProvider>
        <App />
      </DappProvider>
    </ThemeProvider>
  </Suspense>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
