export const useResume = defineStore("cv", {
  state: () => ({
    //HEADER INFO
    person: {
      name: "John Doe",
      title: "Software Developer",
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },

      text :{ 
        "summary": "Serial Entrepreneur en full-stack autodiadact met een zwak voor opensource-software en decentralisatie, aangetoonde capaciteit om verschillende complexe zakelijke behoeften te beoordelen en te beheren."
      },

      //LINKS INFO
      links: {
      portfolio: "https://johndoe.com",
      portfoliolink: "https://johndoe.com",
      github: "johndoe",
      githublink: "https://github.com/johndoe",
      email: "johndoe@gmail.com",
      emaillink: "mailto:johndoe@gmail.com",
      phonenumber: "+1 (555) 555-5555",
      },
      //EXPERIENCE INFO
      experiences: [
      {
      experience: "Acme Corporation",
      experienceyears: "2020 – present",
      experienceroll: "Software Developer",
      experiencelist: [
        { listitem: "Collaborated with clients to create user-friendly interfaces and seamless UX" },
      { listitem: "Implement software solutions that improve efficiency and productivity" },
      ],
      },
      {
        experience: "Freelance Web Developer",
        experienceyears: "2018 – 2020",
        experienceroll: "Web Developer",
        experiencelist: [
          { listitem: "Built custom websites using HTML, CSS, JavaScript, and React" },
          { listitem: "Managed multiple projects simultaneously and delivered projects on-time and budget" },
        ],
      },
    
      {
        experience: "XYZ Company",
        experienceyears: "2016 – 2018",
        experienceroll: "Junior Software Developer",
        experiencelist: [
          { listitem: "Developed and maintained company's internal CRM using Ruby on Rails" },
          { listitem: "Troubleshot and resolved software issues and bugs" },
        ],
      },
    
    ],
    //PROJECTS INFO
    projects: [
      {
        projectname: "ToDoList App",
        projectlink: "https://github.com/johndoe/todolist",
        projectyears: "2022",
        projectroll: "Developer",
        projectdesciption:
          "A simple ToDo List web application built with React and Node.js. Users can add, edit, and delete tasks and mark them as complete.",
      },
      {
        projectname: "E-Commerce Website",
        projectlink: "https://github.com/johndoe/ecommerce",
        projectyears: "2021",
        projectroll: "Developer",
        projectdesciption:
          "An e-commerce website built with HTML, CSS, and JavaScript. Users can browse products, add them to cart, and checkout using Stripe payment processing.",
      },
      {
        projectname: "Weather App",
        projectlink: "https://github.com/johndoe/weather",
        projectyears: "2020",
        projectroll: "Developer",
        projectdesciption:
          "A weather web application that shows current weather data for a given location. Built with HTML, CSS, and JavaScript using the OpenWeatherMap API.",
      },
    ],
//ARCHIVED PROJECTS INFO
archive: [

  {
  projectname: "Social Media App",
  projectlink: "N/A",
  projectyears: "2019 - 2020",
  projectroll: "Front-End Developer",
  projectdesciption:
  "Designed and developed a social media app using React, Redux and Firebase with real-time messaging and notifications.",
  },
  {
  projectname: "Stock Market Prediction",
  projectlink: "N/A",
  projectyears: "2018 - 2019",
  projectroll: "Machine Learning Developer",
  projectdesciption:
  "Developed a stock market prediction model using LSTM and sentiment analysis of financial news articles.",
  },
  {
  projectname: "Data Analysis Dashboard",
  projectlink: "N/A",
  projectyears: "2017 - 2018",
  projectroll: "Data Analyst",
  projectdesciption:
  "Created a dashboard using Tableau to analyze sales data and provide insights for business decisions.",
  },
  ],
  //EDUCATION INFO
  education: [
  {
    title: "Computer Science",
  years: "2015 - 2019",
  school: "Harvard University",
  },
  { 
    title: "Data Science", 
  years: "2020 - 2021", 
  school: "Coursera" 
  },
  {
    title: "Full Stack Web Development",
  years: "2022",
  school: "Udemy",
  },
  {
    title: "Machine Learning",
  years: "2019 - 2020",
  school: "Stanford University",
  },
  {
    title: "Front-End Web Development",
  years: "2014 - 2015",
  school: "Codecademy",
  },
  ],
  //SKILLS INFO
  list: [
  { title: " Data Science ", listitems: [" Python ", " Pandas ", " NumPy ", " Matplotlib "," Docker ", " AWS ", " Jenkins "," TensorFlow ", " Keras "] },
  { title: " Hobbies ", listitems: ["📚 Reading ", " 🎮 Video Games"] },
    ],
  }),
});
