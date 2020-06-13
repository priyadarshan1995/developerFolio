
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Priyadarshan Mohanty",
  title: "Hi all, I'm Priyadarshan",
  subTitle: emoji("A passionate Data Engineer 🚀 having an experience of building robust Data Pipelines with Hadoop/SQL/Spark/Kafka/Go and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1UAKTA_UVIokARwgz8Vh1e4u-0IxJAVvt/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/priyadarshan1995",
  linkedin: "https://www.linkedin.com/in/darshanmohanty14/",
  gmail: "darshan.mohanty14@gmail.com",
  facebook: "https://www.facebook.com/darshan.mohanty14",
  instagram: "https://www.instagram.com/priyadarshan1",
  twitter: "https://www.twitter.com/pmdeinvincible",
  quora: "https://www.quora.com/profile/Priyadarshan-Mohanty-1",
  whatsapp: "https://api.whatsapp.com/send?phone=918333832730"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What I Do?",
  subTitle: "DATA ENGINEER WHO WANTS TO EXPLORE THE FIELDS OF ML & AI",
  skills: [
    emoji("⚡ Develop highly scalable and robust Data pipelines"),
    emoji("⚡ Data analysis and providing Insights"),
    emoji("⚡ Fast Learner and Quick Adapter")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "hadoop",
      //fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "hive",
      //fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "apache spark",
      //fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "apache kafka",
      //fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "scala",
      //fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "simple-icons:mongodb",
      //fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "elasticsearch",
     // fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "golang",
     // fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Big Data Technologies",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Analytics",
      progressPercentage: "70%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Engineer",  
      company: "LoginRadius",
      companylogo: require("./assets/images/lrLogo.png"),
      date: "Oct 2019 – Present",
      desc: "LoginRadius CIAM is an enterprise customer identity and access management solution that's simplified, customisable, and secure.",
      descBullets: [
        "Working on building the Backend Data Platform of the Product using MongoDB as a primary database.",
        "Enabling Near Real Time replication of data between MongoDB and Elastic Search (micro batching) using Kafka and Go.",
        "Performing filtering and aggregation of data in Elastic Search to provide Customer Analytics for visualization."
      ]
    },
    {
      role: "Project Engineer",   
      company: "Wipro Limited",
      companylogo: require("./assets/images/WipLog.png"),
      date: "Aug 2017 – Sept 2019",
      desc: "Wipro Limited is a leading global information technology, consulting and business process services company.",
      descBullets: [
        "Developing and optimising data analyses, data collection systems and stored procedures in Teradata SQL that optimize statistical efficiency and quality.",
        "Performing root cause analysis on internal and external datasets and processes using SQL to answer specific business questions.",
        "Collecting,Analyzing, Filtering & Aggregating large datasets in Hive & Oozie. Tuning and Optimising Spark commands for faster processing & analysis.",
        "Building a Data Pipeline in Hadoop by downloading files from S3 and using Spark for processing and loading to HDFS, Building aggregates on data and loading to Hive and exporting to Teradata.",
        "Identify, design, and implement internal process improvements: automating manual processes using Python,BTEQ & Autosys for optimizing data delivery."
      ]
    }
  ]
};

// Your top 3 work experiences

const educationColleges = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "B.Tech in Electronics and Communications Engineering and M.Tech in VLSI Design & Embedded System",  
      company: "NIT Rourkela",
      companylogo: require("./assets/images/nitrLogo.png"),
      date: "Jul 2016 – May 2017",
      desc: "CGPA: 8.39",
      // descBullets: [
      //   "Working on building the Backend Data Platform of the Product using MongoDB as a primary database.",
      //   "Enabling Near Real Time replication of data between MongoDB and Elastic Search (micro batching) using Kafka and Go.",
      //   "Performing filtering and aggregation of data in Elastic Search to provide Customer Analytics for visualization."
      // ]
    },
    {
      role: "Intermediate in Science",  
      company: "Sri Chaitanya Jr College, Visakhapatnam",
      companylogo: require("./assets/images/hsLogo.png"),
      date: "Jun 2010 – Mar 2012",
      desc: "94%",
      // descBullets: [
      //   "Working on building the Backend Data Platform of the Product using MongoDB as a primary database.",
      //   "Enabling Near Real Time replication of data between MongoDB and Elastic Search (micro batching) using Kafka and Go.",
      //   "Performing filtering and aggregation of data in Elastic Search to provide Customer Analytics for visualization."
      // ]
    },
    {
      role: "Matriculation, ICSE",  
      company: "Siva Sivani Public School,Visakhapatnam",
     companylogo: require("./assets/images/schoolLogo.png"),
      date: "Jun 2009 – Mar 2010",
      desc: "92.14%",
      // descBullets: [
      //   "Working on building the Backend Data Platform of the Product using MongoDB as a primary database.",
      //   "Enabling Near Real Time replication of data between MongoDB and Elastic Search (micro batching) using Kafka and Go.",
      //   "Performing filtering and aggregation of data in Elastic Search to provide Customer Analytics for visualization."
      // ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "priyadarshan1995", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "TO BE UPDATED SOON",
  projects: [
    // {
    //   image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
    //   link: "http://saayahealth.com/"
    // },
    // {
    //   image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
    //   link: "http://nextu.se/"
    // }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    // {
    //   title: "Spark and Python for Big Data with PySpark",
    //   subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image:
    //     "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
    //   footerLink: [
    //     { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
    //     { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
    //     { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
    //   ]
    // },
    // {
    //   title: "Google Assistant Action",
    //   subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
    //   image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
    //   footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    // },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
    //   footerLink: [
    //     { name: "Certification", url: "" },
    //     { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
    //   ]
    // }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    // {
    //   url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
    //   title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
    //   description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    // },
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

   talks: [
  //   {
  //     title: "Build Actions For Google Assistant",
  //     subtitle: "Codelab at GDG DevFest Karachi 2019",
  //     slides_url: "https://bit.ly/saadpasta-slides",
  //     event_url: "https://www.facebook.com/events/2339906106275053/",
  //     image:
  //       "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
  //   }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Spotify 🎙️"),
  subtitle: "I LOVE TO LISTEN TO MUSIC",

  // Please Provide with Your Podcast embeded Link
  podcast: ["http://open.spotify.com/user/Darshan.mohanty14"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8333832730",
  email_address: "darshan.mohanty14@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "pmdeinvincible"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, educationColleges, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
