import './App.css'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import SignInandSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'

function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path ='/' component={HomePage}/>
          <Route path ='/shop' component={ShopPage}/>
          <Route path='/signin' component={SignInandSignUpPage}/>
        </Switch>
    </div>
  )
}

export default App;
