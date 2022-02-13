import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
import { CssBaseline } from '@mui/material'
const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  )
}

export default App