export const useSettings = defineStore("project", {
  state: () => ({
    name: "Nostrocket",
    tagline: "A hyper-efficient rocket booster for your project",

    textlogo: "🚀 Nostrocket",
    logo: false,
    logoimage: "light.webp",
    logodark: false,    
    logodarkimage: "dark.webp",

    language: "en",
    dafaultroute: "/error",   // Default error route (can be set to / to just push dead links to the homepage)

    layout: 'app',            // (default, web, app )
    layoutnews: 'docs',       // (default, web, app ) 
    layoutdocs: 'docs',       // (default, web, app )      

    shop: false,              // still need to hook up
    shopcurrency: 'eur',      // Default Currenty ( Should be an object)
    snipcartid: 'YjIxYzVkZTMtZTAwYi00ODAxLWFiZTgtN2RmNGM4Y2NkZDJlNjM3MjQ4MDgxODk2ODI3ODcy', // Snipcart API

    headertype: 'Maximum',    // Options: Tiny, Maximum, Application
    headermenu: false,
    headerlanguage: true,
    headerlogin: true,
    headersocials: true,
    headerlogintext: 'Sign up!',

    footertype: 'Ecommerce',       // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,
    footernewsletter: false,
    footersocials: true,
    footertheme:true,         // Toggle Dark/Light mode switch
    
    socialnavigation : {      // Options: facebook, instragram, twitter, github, discord, linkedin, dribble
      facebook: '',
      instagram: '',
      twitter: '',
      github:'',
      discord: '',
      dribble: '',
      linkedin: '',
      telegram: '',
      nostr: '',
    },

    // HEADERNAVIGATION
    Headernavigation : { 

      basicmenu : [
        {
          name: '🏛️ State',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/state',
          icon: '🏛️',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: '🪪 Identity',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/identity',
          icon: '🪪',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: '🤖 Add user',
          description: 'Create a product list and start selling products and digital goods today.',
          href: '/user',
          icon: '🤖',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },


      ],

      MenuPopupBig: true,
      MenuPopupBigName: 'Examples',
      MenuPopupSplit: false,
      MenuPopupSplitName: 'Split Menu',
      MenuPopupSplitBlog: true,


      // MENU SLIDE OPEN
      MenuPopupBigItems : [
        {
          name: 'Website',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/site',
          icon: '🖥️',
          bgcolor:'bg-blue-500',
          position: 1,
        },
        {
          name: 'Application',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/login',
          icon: '📱',
          bgcolor:'bg-yellow-500',
          position: 2,
        },
        { name: 'E-commerce', 
        description: 'Create a product list and start selling products and digital goods today.',
          href: '/shop', 
          icon: '🛍️',
          bgcolor:'bg-purple-500', 
          position: 3,
        }, 
        {
          name: 'Library',
          description: 'Provide documentation or just share notes to improve user guidance.',
          href: '/library',
          icon: '📚',
          bgcolor:'bg-pink-500',
          position: 4,
        },
      ],
      MenuPopupSplitColums: {
        company : [
          { name: 'About', href: '/new-page', icon: '📱' },
          { name: 'Customers', href: '/new-page', icon: '🛍️' },
          { name: 'Press', href: '/new-page', icon: '☠️' },
          { name: 'Careers', href: '/new-page', icon: '🦞' },
          { name: 'Privacy', href: '/new-page', icon: '🦎' },
        ],
        partners : [
          { name: 'Community', href: '/new-page', icon: '🐳' },
          { name: 'Partners', href: '/new-page', icon: '🪸' },
          { name: 'Guides', href: '/new-page', icon: '🌺' },
          { name: 'Webinars', href: '/new-page', icon: '🍿' },
        ],
      }
    },
    // FOOTER NAVIGATION
    Footernavigation : {
      // Minimal Footer
      main: [
        { name: 'About', href: '/page' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Accessibility', href: '#' },
        { name: 'Partners', href: '#' },
      ],
      // Maximum & Ecommerce Footer
      FooterColums: {
      solutions: [
        { name: 'Website', href: '/site' },
        { name: 'Application', href: '/login' },
      ],
      support: [
        { name: 'Ecommerce', href: '/shop' },
        { name: 'Library', href: '/library' },
      ],
      company: [
        { name: 'Dashboard', href: '/dashboard' },
        { name: 'Documentation', href: '/library' },
      ],
      about: [
        { name: 'About', href: '/about' },
        { name: 'Shipping', href: '/shipping' },

      ],


    }
    }


  }),
});
