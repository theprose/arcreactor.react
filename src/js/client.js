import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"

import '../css/fonts.less'
import '../css/styles.less'
import Index from "./pages/Index"
import Portfolio from "./pages/Portfolio"
import Project from "./pages/Project"
import About from "./pages/About"
import Team from "./pages/Team"
import pixi from "./pixi/PIXIPage"
import withTracker from './components/withTracker'

const app = document.getElementById('app')

const Main = () => (
   <Switch>
      <Route exact path='/' component={Index} />
      <Route exact path='/about' component={About} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/project/:name' component={Project} />
      <Route path="*" component={RedirectIndex} />
   </Switch>
);

const RedirectIndex = () => {
   return <Redirect to="/" />
}

pixi.create()
pixi.render()

ReactDOM.render(
   <BrowserRouter>
      <Route component={withTracker(Main)} />
   </BrowserRouter>
, app);