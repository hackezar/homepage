import Logo from './images/logo.png';
import Portrait from './images/portrait.jpg';
import Email from './icons/email.svg';


export default function addImages() {
    let logo = document.querySelector('.logo');
    logo.src = Logo;
    let portrait = document.querySelector('.portrait');
    portrait.src = Portrait;
}