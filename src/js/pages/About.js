import React from "react"

import ContentLayout from "../components/ContentLayout"

export default class About extends React.Component {

   render() {
      return (
         <ContentLayout>
            <div class="content-about">
               <h1 class="content-about-title">OUR MISSION</h1>
               <p>To imagine and create revolutionary technology, advance human knowledge, and 
               positively impact the world for generations to come.</p>
               
               <h1 class="content-about-title">OUR STORY</h1>
               <p>Arc Reactor is a technology incubator based in Seattle, Washington. Originally 
               founded as Taggle Inc., a Delaware C Corporation specializing in social reviews 
               for small e-commerce businesses, our creative ambitions quickly outgrew our first 
               product. We aspired not just to create a successful review platform, but instead 
               to construct an “idea reactor” of sorts. With a dynamite team of developers, 
               engineers, marketing gurus, and visionary investors, our reactor would be capable 
               of transforming brilliant ideas from around the world into fully realized products 
               suitable for mass market adoption. We called it the Arc Reactor, and will use it to 
               create and power the next generation of incredible technology. Its only fuel is 
               imagination.</p>
               
               <h1 class="content-about-title">OUR PHILOSOPHY</h1>
               <p>We believe in the power of ideas. Brilliant ideas spring constantly into our 
               collective minds, but the stars must align for anything to come of them. We seek 
               to provide the resources to bring these ideas to life, to force the stars into 
               alignment. We treat ideas like products, and products like experiments. We are 
               not driven by money; we are driven by wealth – wealth of knowledge, health, 
               happiness, and progress. We value truth and justice, kindness and mindfulness. 
               We value creativity and passion, inspiration and imagination. We value greatness.</p>
            </div>
         </ContentLayout>
      )
   }
}