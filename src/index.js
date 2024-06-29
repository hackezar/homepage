import _, { add } from "lodash";
// CSS Files
import "./style.css";
import './hexagon.css';
// CSS for desktop screen width
import "./desktop.css";
import './landingButton.css';
import './firefliesAnimation.css';
//CSS for Tablet screen width
import './tablet.css';
// CSS For Mobile
import './mobile.css';
import "./stickyNavbar.css";


// JS Functions
import addImages from './addImages.js';
import { makeLinkedList } from "./webpageData.js";
import { makeCarousel, addCarouselListeners } from "./makeCarousel.js";
import addEventListeners from "./eventListeners.js";
import { addArrowIcons } from "./makeCarousel.js";
// images
import './images/battleship.png';
import './images/library-app.png';
import JavaScript from './images/javascript-logo.png';
import CSS from './images/css-logo.png';
import Git from './images/git-logo.png';
import Github from './images/github-logo.png';
import Html from './images/html-logo.png';
import MongoDB from './images/mongodb-seeklogo.svg';
import Node from './images/node-logo.png';
import Webpack from './images/webpack-logo.png';




let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

startApp();

function startApp(){
    addImages();
    window.list = makeLinkedList();
    makeCarousel(list);
    addCarouselListeners();
    addEventListeners();
    addArrowIcons();
    addSkillIcons();
    //startInterval(site, list);
}

// Below is just functions

// Adds Icons in About section
function addSkillIcons() {
    document.getElementById('jsIcon').src = JavaScript;
    document.getElementById('html-icon').src = Html;
    document.getElementById('css-icon').src = CSS;
    document.getElementById('github-icon').src = Github;
    document.getElementById('mongo-db-icon').src = MongoDB;
    document.getElementById('node-icon').src = Node;
    document.getElementById('webpack-icon').src = Webpack;
}