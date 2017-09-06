import React from "react"

import ContentLayout from "../components/ContentLayout"

export default class Team extends React.Component {

   render() {
      return (
         <ContentLayout>
            <div class="content-about">
               <h1 class="content-about-title">OUR TEAM</h1>
               <p>Our team is a mix of software engineers, designers, growth hackers 
               and industry leaders.
               <br /><br />
               We prefer discretion.
               <br /><br />
               If you'd like to know more about us, or pitch us on your idea, send us
               and email at <a href="mailto:hello@arcreactor.com">hello@arcreactor.com</a></p>
            </div>
         </ContentLayout>
      )
   }
}