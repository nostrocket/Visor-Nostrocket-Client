import {GlobeEuropeAfricaIcon,UserCircleIcon, HomeModernIcon, BugAntIcon, RocketLaunchIcon,PlayCircleIcon, IdentificationIcon, BuildingStorefrontIcon, CursorArrowRippleIcon, CommandLineIcon} from '@heroicons/vue/24/outline'
// IMPORT ALL HEROICONS HERE YOU WOULD LIKE TO USE IN YOUR MENU
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
    dafaultroute: "/error",      // Default error route (can be set to / to just push dead links to the homepage)

    layout: 'client',               // (default, web, app, client )      

    shop: false,                  // still need to hook up
    shopcurrency: 'eur',         // Default Currenty ( Should be an object)
    snipcartid: '',               // Snipcart API

    headertype: 'Maximum',       // Options: Tiny, Maximum, Application
    headermenu: true,            // Enable to set a classic menu
    headerlanguage: true,
    headerlogin: false,
    headersocials: true,
    headerlogintext: 'Sign up!',
    headerclientprofile: false,

    nostr:true,                   // Login Prompt Request Nip-07 on page load
    nostrlogin: true,             // Add’s a menu icon to retrigger Nip-07 Login Prompt
    nostrregister: true,          // Add’s a key menu icon to popup a Generating Keypairs 
    nostrprofile: true,          // Still need to be implemented Reads out your profile Information.
    nostrrelay: "wss://relay.damus.io",               // Set your relay to connect to wss://relay.example.io

    footertype: 'Ecommerce',      // Options: Tiny, Minimal, Maximum, Ecommerce
    footerlanguage: true,
    footernewsletter: false,
    footersocials: true,          // Toggle Dark/Light mode switch
    footertheme:true,             // Toggle Dark/Light mode switch
    
    socialnavigation : {          // Enter a Url/Key to your Social Account
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
          name: 'Home',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/',
          icon: '',
          heroicon: HomeModernIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },
        
        {
          name: 'Launch New Rocket',
          description: 'Design and create Blogs, landingpages and traditional websites.',
          href: '/launch-rocket',
          icon: '',
          heroicon: RocketLaunchIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Account Details',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/account',
          icon: '',
          heroicon: UserCircleIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Identity Tree',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/identity-tree',
          icon: '',
          heroicon: IdentificationIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },

        {
          name: 'Problem Tracker',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/problem-tracker',
          icon: '',
          heroicon: BugAntIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },
        {
          name: 'Playground',
          description: 'Start building the core app design with ready made auth designs.',
          href: '/keys',
          icon: '',
          heroicon: PlayCircleIcon,
          bgcolor:'bg-blue-500',
          position: 1,
          mobile: true,
          mobileposition: 1,
        },


      ],

      MenuPopupBig: false,
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
          name: 'Client',
          description: 'Build multi-panel clients for building applications and workapps.',
          href: '/client',
          icon: '🥂',
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
