import React from "react"
import { Redirect } from "react-router-dom"
import { TransitionGroup } from "react-transition-group"

import pixi from "../pixi/PIXIPage"
import { FloatTransition } from "../util/Transitions"
import Projects from "../util/Projects"
import ContentLayout from "../components/ContentLayout"

export default class Project extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         project: Projects.findByName(props.match.params.name),
         image: null,
         title: null,
         summary: null,
         links: null
      }
   }

   componentWillMount() {
      if(this.state.project.color) {
         pixi.setTargetColor(this.state.project.color)
      }
   }

   componentDidMount() {
      this.setState({
         image: this.renderImage(),
         title: this.renderTitle(),
         summary: this.renderSummary(),
         links: this.renderLinks(),
      })
   }

   renderLinks() {
      if(this.state.project.ios || this.state.project.website) {
         return (
            <FloatTransition class="float-transition--delay-600 project-link-container">
               <div>
                  {(this.state.project.website !== undefined) && 
                     <a href={this.state.project.website} target="_new" class={"project-link project-link--website project-link--"+this.state.project.name} />}
                  {(this.state.project.ios !== undefined) && 
                     <a href={this.state.project.ios} target="_new" class={"project-link project-link--apple project-link--"+this.state.project.name} />}
               </div>
            </FloatTransition>
         )
      }
   }

   renderImage() {
      return (
         <FloatTransition class="float-transition--delay-300">
            <div>
               <div class={"float-transition project-banner project-banner--"+this.state.project.name} />
            </div>
         </FloatTransition>
      )
   }

   renderTitle() {
      return (
         <FloatTransition class="float-transition--delay-400">
            <div>
               <h1 class="content-about-title">{this.state.project.title}</h1>
            </div>
         </FloatTransition>
      )
   }

   renderSummary() {
      return (
         <FloatTransition class="float-transition--delay-500">
            <div>
               <p>{this.state.project.summary}</p>
            </div>
         </FloatTransition>
      )
   }

   render() {
      if(!this.state.project) {
         return <Redirect to="/" />
      }

      return (
         <ContentLayout>
            <TransitionGroup>
               {this.state.image}
            </TransitionGroup>
            <div class="content-about">
               <TransitionGroup>
                  {this.state.title}
                  {this.state.summary}
                  {this.state.links}
               </TransitionGroup>
            </div>
         </ContentLayout>
      )
   }
}