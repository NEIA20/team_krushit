import { Provider } from 'react-redux'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import AppContainer from './AppContainer'

console.log("IN APP")

render (
  <AppContainer />,
  document.getElementById("main")
)