import React from "react"

import Layout from "../components/Layout"

export default class ContentLayout extends React.Component {

   render() {
      return (
         <Layout>
            <div class="content-container">
               <div class="content-stage">
                  <div class="content-inner">
                     {this.props.children}
                  </div>
               </div>
            </div>
         </Layout>
      )
   }
}