import React from "react"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import { FloatTransition } from "../util/Transitions"
import ContentLayout from "../components/ContentLayout"

export default class Team extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         content: null
      }
   }

   componentDidMount() {
      this.setState({
         content: this.renderContent()
      })
   }

   renderContent() {
      return (
         <FloatTransition class="float-transition">
            <div>
               <h1 class="content-about-title">OUR TEAM</h1>
               <p>Our team is a mix of software engineers, designers, growth hackers 
               and industry leaders.
               <br /><br />
               We prefer discretion.
               <br /><br />
               If you'd like to know more about us, or pitch us on your idea, send us
               an email at <a href="mailto:hello@arcreactor.com">hello@arcreactor.com</a></p>
            </div>
         </FloatTransition>
      )
   }

   render() {
      return (
         <ContentLayout>
            <div class="content-about">
               <TransitionGroup>
                  {this.state.content}
               </TransitionGroup>
            </div>
         </ContentLayout>
      )
   }
}