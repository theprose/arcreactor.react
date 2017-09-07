import React from "react"
import { Link } from "react-router-dom"
import { TransitionGroup } from "react-transition-group"

import { BalloonTransition, FloatTransition } from "../util/Transitions"
import Projects from "../util/Projects"
import ContentLayout from "../components/ContentLayout"

export default class Portfolio extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         title: null,
         projects: null
      }
   }

   componentDidMount() {
      this.setState({
         title: this.renderTitle(),
         projects: Projects.projects
      })
   }

   renderTitle() {
      return (
         <FloatTransition class="float-transition">
            <div>
               <h1 class="content-about-title content-about-title--center">
                  We love ideas.
               </h1>
            </div>
         </FloatTransition>
      )
   }

   render() {
      const projects = this.state.projects ? this.state.projects.map((project, i) => {
         const projectClass = "project-tile--"+project.name
         return (
            <FloatTransition key={i} class={`float-transition--delay-${(i+1)*1000} project-tile ${projectClass}`}>
               <Link to={"/project/"+project.name}  class={"project-tile "+projectClass}>
                  <div class="project-tile__image" />
                  <div class="project-tile__name">{project.title}</div>
               </Link>
            </FloatTransition>
         )
      }) : null

      return (
         <ContentLayout>
            <TransitionGroup>
               {this.state.title}
            </TransitionGroup>
            <TransitionGroup class="project-container">
               {projects}
            </TransitionGroup>
         </ContentLayout>
      )
   }
}