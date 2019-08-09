import { constatns } from './index.js'
import axios from 'axios'
import * as actionsTypes from './actionTypes'
let url ="https://www.easy-mock.com/mock/5cd68a0256d2704f0aaf17a2"

export const isLogin  = (bool)=> ({
  type: actionsTypes.ISLOGIN,
  bool
})

