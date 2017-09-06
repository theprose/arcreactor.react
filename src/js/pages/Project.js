import React from "react"
import { Redirect } from "react-router-dom"

import Projects from "../util/Projects"
import ContentLayout from "../components/ContentLayout"

export default class Project extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         project: Projects.findByName(props.match.params.name)
      }
   }

   renderLinks() {
      if(this.state.project.ios || this.state.project.website) {
         return (
            <div class="project-link-container">
               {(this.state.project.website !== undefined) && 
                  <a href={this.state.project.website} target="_new" class={"project-link project-link--website project-link--"+this.state.project.name} />}
               {(this.state.project.ios !== undefined) && 
                  <a href={this.state.project.ios} target="_new" class={"project-link project-link--apple project-link--"+this.state.project.name} />}
            </div>
         )
      }
   }

   render() {
      if(!this.state.project) {
         return <Redirect to="/" />
      }

      return (
         <ContentLayout>
            <div class={"project-banner project-banner--"+this.state.project.name} />
            <div class="content-about">
               <h1 class="content-about-title">{this.state.project.title}</h1>
               <p>{this.state.project.summary}</p>
               {this.renderLinks()}
            </div>
         </ContentLayout>
      )
   }
}