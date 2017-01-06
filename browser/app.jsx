import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import EmotionsContainer from './EmotionsContainer';

ReactDOM.render (
<EmotionsContainer />,
  document.getElementById('main')
)