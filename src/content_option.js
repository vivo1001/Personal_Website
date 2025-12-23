import profilePic from "./assets/images/profile_pic.jpg";
import graphene from "./assets/images/graphene.jpg"
import co2 from "./assets/images/CO2_laser.jpg"
import opv from "./assets/images/opv.jpg"
import poster from "./assets/images/poster.jpg"
import usp from "./assets/images/usp.jpg"

const logotext = "Vivek";
const meta = {
    title: "Vivek Harikumar",
    description: "I’m Vivek Harikumar __ A Masters Student doing Lasers & Photonics at Ruhr University Bochum",
};

const introdata = {
    title: "I’m Vivek Harikumar",
    animated: {
        first: "Optics Nerd",
        second: "Minecraft is the best Game!",
        third: "Max verstappen Fan !",
    },
    description: "Hi all! I am a Masters Student doing Lasers & Photonics at Ruhr University Bochum",
    your_img_url: profilePic,
};

const dataabout = {
    title: "A bit on myself",
    aboutme: "I am an Electrical Engineering graduate currently pusruing my Masters in Lasers & Photonics at Ruhr University Bochum. Along with my studies I am working as a Research Assistant at the Chair of Applied Laser Technologies (LAT) at my university. I have worked on hands on research projects involving photovoltaics, photodetectors, graphene based materials, optical simulations, and data analysis.  ",
};
const worktimeline = [{
        jobtitle: "Research Assistant",
        where: "LAT",
        link: "https://www.lat.ruhr-uni-bochum.de/",
        date: "2025",
    },
    {
        jobtitle: "Scientific Assistant",
        where: "IIT (ISM) Dhanbad",
        link: "https://www.iitism.ac.in/",
        date: "2024",
    },
    {
        jobtitle: "Software Development Intern",
        where: "Splendre Eyemag",
        link: "https://www.kredflo.com/",
        date: "2023",
    },
];

const education = [{
        degree: "MSc.",
        subject: "Lasers & Photonics",
        institute: "Ruhr Unioversity Bochum",
        location: "Bochum, Germany",
        link: "https://www.ruhr-uni-bochum.de/en",
        year: "2025 - Present",
    },
    {
        degree: "B.Tech",
        subject: "Electrical Engineering",
        institute: "IIT (ISM) Dhanbad",
        location: "Dhanbad, India",
        link: "https://www.iitism.ac.in/",
        year: "2020 - 2025",
    },
    {
        degree: "High School",
        subject: "Science",
        institute: "Sarvodaya Vidyalaya",
        location: "Trivandrum, India",
        link: "https://sarvodayavidyalaya.edu.in/",
        year: "2018 - 2020",
    },
];

const skills = [
  {
    name: "Programming Languages",
    elements: ["C++", "Python", "Matlab", "Javascript"]
  },
  {
    name: "Laboratory Apparatus Used",
    elements: ["Spincoater", "Laser Scanning Microscope", " UV-VIS-NIR Spectrometer", "SEM", ]
  },
  {
    name: "Tools",
    elements: ["Git", "VS Code", "Figma", "Jupyter", "Lightburn", "Origin", "Inventor", "SQL"]
  },
    {
    name: "Materials used",
    elements: ["Graphene", "Reduced Graphene Oxide", "ZnO", "PEDOT", "PSS"]
  },
   {
    name: "Languages",
    elements: ["English (C1)", "German (B1)", "Malayalam (Mother tongue)", "Hindi"]
  },
];


const services = [{
        title: "Team ARKA ",
        description: "Held the position of Team lead at the official Astronomy Club of IIT (ISM) Dhanbad. Conducted various events and several talk series with various dignitries in the field of astronomy and space science emancing participation of almost 800 students",
},
    {
        title: "Helium Labs",
        description: "Recieved special mention on submitting a research article on Martian Energy in the mock research paper competiton held by Helium labs",
    },
    {
        title: "JEE Advanced 2020",
        description: "Secured All India Rank 5384 in JEE Advanced 2020 among 1,50,000 candidates",
    },
    {
        title: "JEE Main 2020",
        description: "Secured a percentile of 96.8 %in JEE Main 2020 among 1.1 million students",
    },
    {
        title: "KEAM",
        description: "Ranked 160 in the Kerala Engineering Agriculture and Medical Exam 2020 out of 70,000 candidates",
    },
    {
        title: "Inspire Scholarship",
        description: "Eligible for INSPIRE scholarship 2020 due to top 1% performance in class XII board exams.",
    },
];
const extras = [
    "Member of SPIE",
    "Member of Breakthrough India",
    "Member of AASTRO Kerala",
    "Formula 1 Enthusiast",
    "Guitar Player"

];

const dataportfolio = [{
        img: opv,
        description: "Organic Photovoltaics",
        link: "#",
    },
    {
        img: usp,
        description: "Ultashort pulse laser action on surface modification of Nickel samples",
        link: "#",
    },
    {
        img: poster,
        description: "Academic Poster Presentation",
        link: "#",
    },
    {
        img: co2,
        description: "CO2 Laser Cutting",
        link: "#",
    },
    {
        img: graphene,
        description: "Graphene Photodetectors",
        link: "#",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "vivekh1243@gmail.com",
    YOUR_FONE: "+49 15510169816",
    description: "I’m always open to connecting with like-minded individuals, researchers, or professionals in the field. So if you want to get in touch with me please feel free to do so ;)",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/vivek-h/",
    instagram: "https://instagram.com/_the_i.c.a.r.u.s_?igsh=MXZmd3BoenA3eGFmNg==",
    github: "https://github.com/vivo1001",
    // twitter: "https://twitter.com",
};
export {
    meta,
    dataabout,
    education,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
    extras
};