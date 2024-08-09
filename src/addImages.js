import Logo from './images/logo.jpg';
import Portrait from './images/portrait.jpg';
import Email from './icons/email.svg';


export default function addImages() {
    const logo = document.querySelector('.logo');
    logo.src = Logo;
    const portrait = document.querySelector('.portrait');
    portrait.src = Logo;
}