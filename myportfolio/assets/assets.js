import user_image from './user-image.jpg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-image.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import achievement_icon from './work-1.png';
import achievement_icon_dark from './public/work-1.png';
import abc_image from './abc.png';
import abc_image_dark from './abc-dark.png';
import java from './java-icon.png';
import linkedin_icon from './linkedin.png';
import github_icon from './github.png';
import twitter_icon from './twitter.png';
import gishan_icon from './gishan.png';
import work_1 from './work-1.png';
import work_2 from './work-2.png';
import drone_swarm from './drone-swarm.jpeg';
import unity_game from './unity-game.png';
import rag_image from './rag-chatbot.png';
import video from './video-chat.jpg';
import flower_exchange from './flower-exchange.jpeg';
import microservices_image from './microservices.png';
import denslypacked_image from './densly_image.png';
export const assets = {
   
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    abc_image,
    abc_image_dark,
    java,
    linkedin_icon,
    github_icon,
    twitter_icon,
    gishan_icon,
    work_1,
    work_2,
    drone_swarm,
    unity_game,
    rag_image,
    video,
    flower_exchange,
    microservices_image,
    denslypacked_image,

    
  
};

export const workData = [
    {
        category: 'Research Project',
        title: 'Detection and Identification of UAV Swarms',
        description: `Developing a robust system for the detection, identification,
        and ranging of UAV swarms by leveraging advanced signal processing algorithms and self-supervised learning techniques.`,
        bgImage: assets.drone_swarm,
        githublink:'https://github.com/GishanDaminduDK/FYP-SignalProcessing',
        techStacks:'Python, Pytorch,Matlab, Radar'
    },
    ,
    {
        category: 'WebGL Game Development',
        title: 'Skyline Unity WebGL Game',
        description: `Developed a gamified energy conservation web platform using ReactJS, Spring Boot, and Unity, 
        featuring interactive mechanics, leaderboards, and educational tools to promote energy-saving behaviors.`,
        bgImage: assets.unity_game,
        githublink:'https://github.com/GishanDaminduDK/Unity-Game-Development',
        techStacks:'React.js,Spring Boot,Unity,MySQL',
    },
    {
        category: 'Web Development',
        title: 'Video Chat Application',
        description: `A secure, bidirectional video chat application built with WebRTC, React, and Go.
        This application is designed for real-world insurance use cases with a focus on secure client communications.`,
        bgImage: assets.video,
        githublink:'https://github.com/GishanDaminduDK/VideoChatApp',
        techStacks:'WebRTC, React.js, Go, MySQL',
    },
    {
        category: 'Software Development',
        title: 'LLM RAG Chatbot',
        description:` An NLP project aimed at crafting a chatbot capable of answering questions sourced from provided documents. 
        It leverages open-source large language models (LLM) and retrieval augmented generation (RAG) techniques for this purpose.`,
        bgImage: assets.rag_image,
        githublink:'https://github.com/GishanDaminduDK/LLM_Projects',
        techStacks:'NLP,Ollama,Langchain',
    },

    {
        category: 'Software Development',
        title: 'Flower Exchange Platform',
        description: `The trading application was implemented using C++ programming language.
        Employed Object-Oriented Programming (OOP) principles to design and implement the application.`,
        bgImage: assets.flower_exchange,
        githublink:'https://github.com/KavinduKariyawasam/Flower_Exchange',
        techStacks:'C++, OOP',
    },
    {
        category: 'Web Development',
        title:'Product Management System',
        description:'Developed a CRUD application for managing product lifecycles using a microservices architecture.',
        bgImage: assets.microservices_image,
        githublink:'https://github.com/GishanDaminduDK/Java-Projects',
        techStacks:'Spring Boot,MySQL',
    },
    {
        category: 'Software Development',
        title:'Densely Packed Product Detection',
        description:`Applied computer vision models to detect retail items in densely packed scenes.
        Improved detection accuracy through model fine-tuning and post-processing techniques.`,
        bgImage: assets.denslypacked_image,
        githublink:'https://github.com/GishanDaminduDK/Product-Detection-in-Densely-Packed-Scenes--Computer-vision--Machine-learning--',
        techStacks:'Python, OpenCV, Deep Learning',
    },
    
    {
        title: ' Smart Bicycle Speedo Meter',
        description: 'Electronic Project',
        bgImage: '/work-4.png',
        githublink:'https://github.com/GishanDaminduDK/FlowerExchange_Project',
        techStacks:'ReactJs,MySQL',
    },
    {
        title: 'Photography site',
        description: `• Developed a gamified platform using ReactJS, Spring Boot, and Unity to promote energy conservation
        through interactive features.
        • Designed real-time game mechanics and a leaderboard to reflect and reward energy-saving actions, enhancing
        user engagement.
        • e.`,
        bgImage: '/work-3.png',
        githublink:'https://github.com/GishanDaminduDK/FlowerExchange_Project',
        techStacks:'ReactJs,MySQL',
    },
    {
        title: ' Smart Bicycle Speedo Meter',
        description: 'Electronic Project',
        bgImage: '/work-4.png',
        githublink:'https://github.com/GishanDaminduDK/FlowerExchange_Project',
        techStacks:'ReactJs,MySQL',
    },
    {
        title: ' Smart Bicycle Speedo Meter',
        description: 'Electronic Project',
        bgImage: '/work-4.png',
        githublink:'https://github.com/GishanDaminduDK/FlowerExchange_Project',
        techStacks:'ReactJs,MySQL',
    },
   
    
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    {
        icon: assets.edu_icon,
        iconDark: assets.edu_icon_dark,
        title: 'Education',
        description: `•BSc in Electronic and Telecommunication Engineering, University of Moratuwa,
        •Rahula College, Matara
        `
      }
      
   ,{ icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Tech Stack', description: 'Python, Java, JavaScript React Js, Go' },
   {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Certifications',
    description: `• Object-Oriented Programming Specialization (University of London)
    • Databases and SQL for Data Science with Python (IBM)
    • Foundations of Data Structures and Algorithms Specialization (University of Colorado Boulder)
    • Deep Learning Specialization (DeepLearning.AI)
    • Machine Learning Specialization (Stanford University)
    `
  },
  {
    icon: assets.ui_icon,
    iconDark: assets.abc_image_dark,
    title: 'Achievements',
    description: `• Champions | SPARK Challenge 22/23 - Electronic Engineering Undergraduate Competition
  • 5th Place | Technobots 2023 - Robotics Competition hosted By SLTC University
  • 4th Place | Sparklink1.0 2023 - Digital Design Competition hosted by University of Ruhuna
  • Mahapola Higher Education (Merit) Scholarship`
  }
  
  
];

export const toolsData = [
    assets.firebase, assets.vscode, assets.java, assets.mongodb, assets.git, assets.figma
];