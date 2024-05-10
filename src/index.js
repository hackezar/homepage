import _, { add } from "lodash";
import "./style.css";
import "./desktop.css";

import addImages from './addImages.js';
import { makeLinkedList } from "./webpageData.js";
import { makeCarousel, addListeners, startInterval } from "./makeCarousel.js";
// images
import './images/battleship.png';
import './images/library-app.png';


let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

startApp()
function startApp(){
    addImages();
    window.list = makeLinkedList();
    let site = makeCarousel(list);
    addListeners();
    //startInterval(site, list);
}