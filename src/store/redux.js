import { combineReducers } from 'redux'
import  headerReducer from '../common/header/store/redux'
import  homeReducer from '../pages/Home/store/reducer'
import  loginReducer from '../pages/Login/store/reducer'



export default combineReducers({
  header:headerReducer,
  home:homeReducer,
  login:loginReducer
})