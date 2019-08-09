import React from 'react';
import { GlobalStyle } from './style'
import { Provider } from 'react-redux'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import store from './store'

import Header from './common/header'
import Detail from './pages/Detail'
import Home from './pages/Home'
import Login from './pages/Login/index'





function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
        <Header></Header>
        <Switch> {/*只匹配其中一个*/}
          <Route path='/detail:id' component={Detail}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/' component={Home}></Route>
        </Switch>
      </BrowserRouter>
      <GlobalStyle></GlobalStyle>
    </Provider> 
  );
}

export default App;
