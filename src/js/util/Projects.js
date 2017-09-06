const Projects = {
   projects: [
      {
         name: "prose",
         title: "Prose.",
         summary: `Prose is a mobile and web -based social network for writers, and Arc Reactor’s 
         flagship product. By making writing and publishing more accessible than ever, it seeks to 
         reinvigorate global interest in literature and inspire the next generation of writers. 
         With the global publishing industry in disarray, Prose has already enjoyed millions of 
         reading minutes and pageviews on the website alone. A budding partnership with one of t
         he world’s great publishers, Simon & Schuster, and a trove of new features and updates in 
         development pave the way for a bright future for social media and literature alike. In 
         the near future, Prose will launch an auxiliary site for its best writers, and updates to 
         its user profiles, which will allow authors to monetize their work via subscriptions from 
         their readers.`,
         website: "https://theprose.com",
         ios: "https://itunes.apple.com/us/app/prose/id911216930"
      },
      {
         name: "sqrl",
         title: "SQRL",
         summary: `SQRL is a simple iPad app that allows users to turn their iPads and iPad Pros 
         into wireless trackpads for their Macs. By providing robust Apple Pencil support, it seeks 
         to empower artists and graphic designers to use their iPads as drawing tablets with 
         creativity apps such as Photoshop and Illustrator. It was launched just a week ago fo $1.99 
         on the App Store. In the near future, we’ll be working on a more extensive feature set to 
         allow users more flexibility in remote controlling their Macs using their iOS devices.`,
         website: "http://thesqrlapp.com",
         ios: "https://itunes.apple.com/us/app/sqrl-controller/id1232478753"
      },
      {
         name: "love",
         title: "Love",
         summary: `Inspired by the YO! phenomenon, Love is an iPhone app with a very simple mission: 
         “To ensure everyone receives a little Love, every day.” We make sending notifications 
         (either signed or anonymous), as simple as tapping the name of a contact in your phone’s 
         address book. People receive simple messages like “You are Loved,” intended to, if only for 
         a moment, bring a little more love into their lives. Love also makes it possible to send 
         these feel-good notifications to strangers around the world, and provides simple exercises 
         to help us “think with our hearts.” Love will launch worldwide on the App Store in early 
         June of 2017.`,
         website: "https://livn.love",
         ios: "https://itunes.apple.com/us/app/love/id1129131596"
      },
      {
         name: "taggle",
         title: "Taggle",
         summary: `Taggle is a B2B social review platform for small ecommerce businesses. By 
         supplying a simple, accessible web-based plugin to a powerful review engine, it affords 
         small businesses the same power and engagement of massive review systems like those of 
         Amazon or eBay, additionally providing the flexibility of various review formats, features, 
         and social network integration. Taggle was Arc Reactor’s first project, but took a backseat 
         when the team recognized a disruption opportunity in the publishing industry and grew 
         increasingly excited about Prose.`
      },
      {
         name: "give",
         title: "give",
         summary: `In collaboration with a student at the University of Washington's School of Medicine,
         we recently started on an app to improve cancer treatment in low-income nations via a digital
         awareness campaign designed to encourage people to donate blood. The project was submitted for
         the Astellas Oncology C3 Prize.`
      },
      {
         name: "note",
         title: "Note",
         summary: `Note is a “Snapchat for Sound” that allows users to send disposable multimedia 
         messages to their friends and contacts. Note makes it easy to edit song clips, matching 
         them with videos or images, and distribute that “note” to individuals or groups of contacts. 
         We built Note and put it on the App Store, but marketing and development were put on hold as 
         we assigned priority to Prose.`
      },
      {
         name: "mercuri",
         title: "Mercuri",
         summary: `Inspired by Bill & Melinda Gates Foundation -endorsed Recovery Café, Mercury is a 
         mobile support group that aims to counteract the rising tides of isolation and loneliness. 
         Since Mercuri is still in development, we can't share much about the details of our approach.`

      },
      {
         name: "zense",
         title: "Zense",
         summary: `Zense is a project we're currently seeking to fund and develop. Should we find
         the funding, it'll be our first foray into robotics and real-world computing in quite
         some time. Please email us if you're interested.`
      },
      {
         name: "bernard",
         title: "Bernard",
         summary: `We can't tell you much about Bernard. It's a research project we've been fiddling 
         with for some time. All we can say is it's related to artificial intelligence, computer
         vision, and human consciousness.`
      }
   ],

   findByName: (name) => {
      for(const project of Projects.projects) {
         if(project.name === name) {
            return project
         }
      }
   }
}

export default Projects