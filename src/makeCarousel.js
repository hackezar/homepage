import _ from 'lodash';

import Back from './images/back-arrow.svg';
import Forward from './images/forward-arrow.svg';


export function makeCarousel(list) {
    updateImage(list);
    updateSelected(list);
    return;
}

export function getData(checked, list) {
    let i=0;
    let site = list.head; 
    while (i<checked) {
        site = site.next;
        i++;
    }
    return site;
}

export function updateSelected(list) {
    let checked = document.querySelectorAll("input:checked");
    checked = checked[0].className;
    checked--;
    let data = getData(checked, list);
    document.querySelector('.name').innerHTML = data.name;
    document.querySelector('.link').href = data.src;    
}

export function updateImage(list) {
   let elements = document.querySelectorAll('.web-img');
   let site = list.head;
   for (let i=0; i<elements.length; i++) {
        elements[i].src = site.pic;
        site = site.next;
   }
}

export function startInterval(site, list){
    let interval = setInterval(function() {
        if (!site)
            site = list.head;
        updateImage(site, list);
        site = site.next;
    }, 6000);
    return interval;
}

export function stopInterval(interval){
    clearInterval(interval);
}

export function addListeners() {
    // Radio Button event listeners
    let radios = document.getElementsByName('position');
    console.log(radios);
    radios.forEach((element) => {
        let index = element.className;
        index--;
        let data = getData(index, window.list)
        element.addEventListener('click', () => {
            document.querySelector('.name').innerHTML = data.name;
            document.querySelector('.link').href = data.src;
        })
    })
    // End
}



