import React from "react"
import { Link } from "react-router-dom"

export default class Navbar extends React.Component {

   constructor() {
      super()
      this.onNavigate = this.onNavigate.bind(this)
   }

   onNavigate(e) {
      if(this.props.onNavigate) {
         this.props.onNavigate(e)
      }
   }

   render() {
      return (
         <div class="navbar">
            <div class="navbar-inner">
               <Link to="/" onClick={this.onNavigate} class="navbar__logo"><img src={require("../../images/arlogo_white.svg")} width="100" height="200" /></Link>
               <div class="navbar__buttons">
                  <Link to="/about" onClick={this.onNavigate} class="navbutton">About</Link>
                  <Link to="/portfolio" onClick={this.onNavigate} class="navbutton">Portfolio</Link>
                  <Link to="/team" onClick={this.onNavigate} class="navbutton">Team</Link>
               </div>
            </div>
         </div>
      )
   }
}