export const useSettings = defineStore("project", {
  state: () => ({
    name: "Visor",
    tagline: "A Nostrocket Client",

    textlogo: "VISØR",
    logo: true,
    logoimage: "DarkVisor.png",
    logodark: true,    
    logodarkimage: "LightVisor.png",

    language: "en",
    dafaultroute: "/error",   // Default error route (can be set to / to just push dead links to the homepage)

    layout: 'landing',            // (default, web, app )
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

    footertype: 'Tiny',       // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,
    footernewsletter: false,
    footersocials: true,
    footertheme:true,         // Toggle Dark/Light mode switch
    
    nostr:true,

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
          name: 'Identity Tree',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/',
          icon: '🌳',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'New SubRocket',
          description: 'Create a product list and start selling products and digital goods today.',
          href: '/subrocket',
          icon: '🚀',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Account',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/account',
          icon: '🪪',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },



      ],

      MenuPopupBig: true,
      MenuPopupBigName: 'Mission Control',
      MenuPopupSplit: false,
      MenuPopupSplitName: 'Split Menu',
      MenuPopupSplitBlog: true,


      // MENU SLIDE OPEN
      MenuPopupBigItems : [
        {
          name: 'Identity Tree',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/',
          icon: '🌳',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },


        {
          name: 'New SubRocket',
          description: 'Create a product list and start selling products and digital goods today.',
          href: '/subrocket',
          icon: '🚀',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Account',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/account',
          icon: '🪪',
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
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
