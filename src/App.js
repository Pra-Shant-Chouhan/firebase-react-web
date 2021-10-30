import react from 'react'
import Home from './component/Home'
import {Route, Switch} from 'react-router-dom'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Service from './Pages/Service'
import Error from './Pages/Error'

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path ="/" component={Home}></Route>
        <Route exact path ="/about" component={About}></Route>
        <Route exact path ="/contact" component={Contact}></Route>
        <Route exact path ="/Service" component={Service}></Route>
        <Route component={Error}></Route>
      </Switch>
      
    </>
  )
}
export default App