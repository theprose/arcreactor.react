import React from "react"
//import ReactPIXI from "react-pixi"
//import { Application, Graphics } from "pixi.js"

import pixi from "../pixi/PIXIPage"
import Navbar from "../components/Navbar"

export default class Layout extends React.Component {

   render() {
      return (
         <div>
            <Navbar />
            {this.props.children}
         </div>
      )
   }
}