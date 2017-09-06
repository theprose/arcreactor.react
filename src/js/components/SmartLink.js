import React from "react"
import { Link } from "react-router-dom"

function SmartLink(WrappedLink) {

   return class SmarterLink extends React.Component {

      constructor(props) {
         super(props)
         this.onNavigate = this.onNavigate.bind(this)
      }

      onNavigate(e) {
         e.preventDefault()
      }

      render() {
         return <WrappedLink onClick={this.onNavigate} {...this.props} />
      }
   }
}

const component = SmartLink(Link)
export default component