import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import MarketingApp from './components/MarketingApp'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <MarketingApp />
    </BrowserRouter>
  )
}

export default App