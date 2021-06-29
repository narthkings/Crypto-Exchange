import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import CryptoDetails from './pages/CryptoDetails'
import HeaderComponent from './components/Header/HeaderComponent'
const App = () => {
  return (
    <Router>
      <HeaderComponent title="CryptoManiac 🇳🇬 🦅" />
      <Switch>
        <Route exact path="/">
          <div className="relative container mx-auto px-4">
            <HomePage />
          </div>
        </Route>

        <Route exact path="/CryptoDetails/:id">
          <div className="mt-10 container mx-auto px-4">
            <CryptoDetails />
          </div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
