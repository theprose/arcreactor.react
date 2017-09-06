import React from "react"
import { Link } from "react-router-dom"

export default class Navbar extends React.Component {

   constructor() {
      super()
      //this.onNavigate = this.onNavigate.bind(this)
   }

   render() {
      return (
         <div class="navbar">
            <div class="navbar-inner">
               <Link to="/" class="navbar__logo"><img src={require("../../images/arlogo_white.svg")} width="100" height="200" /></Link>
               <div class="navbar__buttons">
                  <Link to="/about" class="navbutton">About</Link>
                  <Link to="/portfolio" class="navbutton">Portfolio</Link>
                  <Link to="/team"class="navbutton">Team</Link>
               </div>
            </div>
         </div>
      )
   }
}