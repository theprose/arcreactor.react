import React from "react"
import { Link } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

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
         <FloatTransition class="float-transition projects-title">
            <div>
               We love ideas.
               <br />
               Here are some of ours...
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

      // return (
      //    <Layout>
      //       <div class="content-container">
      //          <TransitionGroup class="content-fill flex-center">
      //             {this.state.stage}
      //          </TransitionGroup>
      //       </div>
      //    </Layout>
      // )
   }
}

// export default class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {items: ['hello', 'world', 'click', 'me']};
//     this.handleAdd = this.handleAdd.bind(this);
//   }

//   handleAdd() {
//     const newItems = this.state.items.concat([
//       prompt('Enter some text')
//     ]);
//     this.setState({items: newItems});
//   }

//   handleRemove(i) {
//     let newItems = this.state.items.slice();
//     newItems.splice(i, 1);
//     this.setState({items: newItems});
//   }

//   render() {
//     const items = this.state.items.map((item, i) => (
//       <FadeTransition key={i} >
//       <h1 onClick={() => this.handleRemove(i)}>
//         {item}
//       </h1>
//       </FadeTransition>
//     ));

//     return (
//       <Layout>
//          <div class="content-container">
//            <button onClick={this.handleAdd}>Add Item</button>
//            <TransitionGroup>
//              {items}
//            </TransitionGroup>
//         </div>
//       </Layout>
//     );
//   }
// }