import React from "react"
import { Link } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Projects from "../util/Projects"
import ContentLayout from "../components/ContentLayout"

const BalloonTransition = (props) => {
   return <CSSTransition
      {...props}
      classNames="balloon-transition"
      timeout={{ enter: 500, exit: 500 }}
   />
}

export default class Portfolio extends React.Component {

   constructor(props) {
      super(props)
      this.state = {
         stage: null,
         content: null,
         projects: Projects.projects
      }
   }

   componentDidMount() {
      this.setState({stage: this.renderStage()})
   }

   renderContent() {

      const projects = this.state.projects.map((project, i) => {
         const projectClass = "project-tile--"+project.name
         return (
            <Link to={"/project/"+project.name} key={i} class={"project-tile "+projectClass}>
               <div class="project-tile__image" />
               <div class="project-tile__name">{project.title}</div>
            </Link>
         )
      })

      return (
         <div class="project-container">
            {projects}
         </div>
      )
   }

   // renderStage() {
   //    return (
   //       <BalloonTransition>
   //          <div class="content-stage">
   //             <div class="content-inner">
                  
   //             </div>
   //          </div>
   //       </BalloonTransition>
   //    )
   // }

   render() {
      return (
         <ContentLayout>
            <div class="projects-title">
               We love ideas.
               <br />
               Here are some of ours...
            </div>
            {this.renderContent()}
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