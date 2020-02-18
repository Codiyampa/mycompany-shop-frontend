import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

import './App.css'
import 'antd/dist/antd.css'

function App() {
    return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
    )
}

export default App