import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './App.scss'
// 导入页面
import Login from './pages/Login'
import Layout from './pages/Layout'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/layout'>
            <Layout />
          </Route>

          {/* 重定向要在已有规则的后面 */}
          <Redirect exact from='/' to='/login' />
          {/* 404一定要写在最后 */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
