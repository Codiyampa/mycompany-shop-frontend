import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Order from './Order'
import About from './About'
import Contact from './Contact'
import Error from './Error'

const Main = () => (
  <main>
	<div class="ant-row">
		<Switch>
		  <Route exact path="/" component={Home}/>
		  <Route path="/order" component={Order}/>
		  <Route path="/about/:page" component={About}/>
		  <Route path="/contact" component={Contact}/>
		  <Route component={Error} />
		</Switch>
	</div>
  </main>
)

export default Main