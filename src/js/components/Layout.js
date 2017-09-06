import React from "react"
//import ReactPIXI from "react-pixi"
//import { Application, Graphics } from "pixi.js"

import pixi from "../pixi/PIXIPage"
import Navbar from "../components/Navbar"

export default class Layout extends React.Component {

   // componentWillMount() {
   //    pixi.create()
   // }

   // componentDidMount() {
   //    pixi.render()
   // }

   // componentWillUnmount() {
   //    pixi.destroy()
   // }

   onNavigate() {
      
   }

   render() {
      return (
         <div>
            <Navbar onNavigate={this.onNavigate.bind(this)} />
            {this.props.children}
         </div>
      )
   }
}