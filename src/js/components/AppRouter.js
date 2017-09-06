import React from "react"
import { withRouter } from "react-router-dom"

class AppRouter extends React.Component {

   constructor(props) {
      super(props)
      console.log("APP ROUTER CREATED")
      //this.onNavigate = this.onNavigate.bind(this)
   }

   render() {
      return {this.props.children}
   }
}

const component = withRouter(AppRouter)
export default component