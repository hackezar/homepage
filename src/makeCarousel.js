import _ from 'lodash';

import BackArrow from './icons/arrow_back_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import ForwardArrow from './icons/arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24.svg';


export function addArrowIcons() {
    let backArrow = document.getElementById('back-arrow');
    let forwardArrow = document.getElementById('forward-arrow');
    forwardArrow.src = ForwardArrow
    backArrow.src = BackArrow;
    // Event listener for forward arrow
    forwardArrow.addEventListener('click', () => {
        let checked = document.querySelectorAll("input:checked");
        checked = checked[0].className;
        // Iterates through which radio button is checked and selects the next one
        if (checked == '1'){
            let newChecked = document.getElementsByClassName('2')
            newChecked[0].checked = true;
        } else if (checked == '2'){
            let newChecked = document.getElementsByClassName('3')
            newChecked[0].checked = true;
        } else if (checked == '3'){
            let newChecked = document.getElementsByClassName('4')
            newChecked[0].checked = true;
        } else if (checked == '4'){
            let newChecked = document.getElementsByClassName('5')
            newChecked[0].checked = true;
        } else if (checked == '5'){
            let newChecked = document.getElementsByClassName('6')
            newChecked[0].checked = true;
        }
        else if (checked == '6'){
            let newChecked = document.getElementsByClassName('7')
            newChecked[0].checked = true;
        }
        else if (checked == '7'){
            let newChecked = document.getElementsByClassName('8')
            newChecked[0].checked = true;
        }
        else if (checked == '8'){
            let newChecked = document.getElementsByClassName('9')
            newChecked[0].checked = true;
        }
        else if (checked == '9'){
            let newChecked = document.getElementsByClassName('10')
            newChecked[0].checked = true;
        }
        else if (checked == '10'){
            let newChecked = document.getElementsByClassName('11')
            newChecked[0].checked = true;
        }
        else if (checked == '11'){
            let newChecked = document.getElementsByClassName('1')
            newChecked[0].checked = true;
        }
        // Updates the middle info after a slide is changed
        updateSelected(list);
    })
    // Event listener for back arrow
    backArrow.addEventListener('click', () => {
        let checked = document.querySelectorAll("input:checked");
        checked = checked[0].className;
        // Iterates through which radio button is checked and selects the next one
        if (checked == '1'){
            let newChecked = document.getElementsByClassName('11')
            newChecked[0].checked = true;
        } else if (checked == '2'){
            let newChecked = document.getElementsByClassName('1')
            newChecked[0].checked = true;
        } else if (checked == '3'){
            let newChecked = document.getElementsByClassName('2')
            newChecked[0].checked = true;
        } else if (checked == '4'){
            let newChecked = document.getElementsByClassName('3')
            newChecked[0].checked = true;
        } else if (checked == '5'){
            let newChecked = document.getElementsByClassName('4')
            newChecked[0].checked = true;
        }
        else if (checked == '6'){
            let newChecked = document.getElementsByClassName('5')
            newChecked[0].checked = true;
        }
        else if (checked == '7'){
            let newChecked = document.getElementsByClassName('6')
            newChecked[0].checked = true;
        }
        else if (checked == '8'){
            let newChecked = document.getElementsByClassName('7')
            newChecked[0].checked = true;
        }
        else if (checked == '9'){
            let newChecked = document.getElementsByClassName('8')
            newChecked[0].checked = true;
        }
        else if (checked == '10'){
            let newChecked = document.getElementsByClassName('9')
            newChecked[0].checked = true;
        }
        else if (checked == '11'){
            let newChecked = document.getElementsByClassName('10')
            newChecked[0].checked = true;
        }
        // Updates the middle info after a slide is changed
        updateSelected(list);
    })

}

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
    document.querySelector('.gallery-name').innerHTML = data.name;
    document.querySelector('.gallery-link').href = data.src;    
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

export function addCarouselListeners() {
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

    // Left and Right Arrow Key event listeners to scroll through gallery
        // Event listener for any key press
        document.addEventListener('keydown', event => {
            let checked = document.querySelectorAll("input:checked");
            checked = checked[0].className;
            // check if keydown is left arrow key
            if (event.key == 'ArrowRight') {
                // Iterates through which radio button is checked and selects the next one
                if (checked == '1'){
                    let newChecked = document.getElementsByClassName('2')
                    newChecked[0].checked = true;
                } else if (checked == '2'){
                    let newChecked = document.getElementsByClassName('3')
                    newChecked[0].checked = true;
                } else if (checked == '3'){
                    let newChecked = document.getElementsByClassName('4')
                    newChecked[0].checked = true;
                } else if (checked == '4'){
                    let newChecked = document.getElementsByClassName('5')
                    newChecked[0].checked = true;
                } else if (checked == '5'){
                    let newChecked = document.getElementsByClassName('6')
                    newChecked[0].checked = true;
                }
                else if (checked == '6'){
                    let newChecked = document.getElementsByClassName('7')
                    newChecked[0].checked = true;
                }
                else if (checked == '7'){
                    let newChecked = document.getElementsByClassName('8')
                    newChecked[0].checked = true;
                }
                else if (checked == '8'){
                    let newChecked = document.getElementsByClassName('9')
                    newChecked[0].checked = true;
                }
                else if (checked == '9'){
                    let newChecked = document.getElementsByClassName('10')
                    newChecked[0].checked = true;
                }
                else if (checked == '10'){
                    let newChecked = document.getElementsByClassName('11')
                    newChecked[0].checked = true;
                }
                else if (checked == '11'){
                    let newChecked = document.getElementsByClassName('1')
                    newChecked[0].checked = true;
                }
                // Updates the middle info after a slide is changed
                updateSelected(list);
            // Event Listener for Left Arrow Key
            } else if (event.key == "ArrowLeft") {
                    let checked = document.querySelectorAll("input:checked");
                    checked = checked[0].className;
                    // Iterates through which radio button is checked and selects the previous one
                    if (checked == '1'){
                        let newChecked = document.getElementsByClassName('11')
                        newChecked[0].checked = true;
                    } else if (checked == '2'){
                        let newChecked = document.getElementsByClassName('1')
                        newChecked[0].checked = true;
                    } else if (checked == '3'){
                        let newChecked = document.getElementsByClassName('2')
                        newChecked[0].checked = true;
                    } else if (checked == '4'){
                        let newChecked = document.getElementsByClassName('3')
                        newChecked[0].checked = true;
                    } else if (checked == '5'){
                        let newChecked = document.getElementsByClassName('4')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '6'){
                        let newChecked = document.getElementsByClassName('5')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '7'){
                        let newChecked = document.getElementsByClassName('6')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '8'){
                        let newChecked = document.getElementsByClassName('7')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '9'){
                        let newChecked = document.getElementsByClassName('8')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '10'){
                        let newChecked = document.getElementsByClassName('9')
                        newChecked[0].checked = true;
                    }
                    else if (checked == '11'){
                        let newChecked = document.getElementsByClassName('10')
                        newChecked[0].checked = true;
                    }
                    // Updates the middle info after a slide is changed
                    updateSelected(list);
            }
        })
}



