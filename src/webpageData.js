import BattleShip from './images/battleship.png';
import LibraryApp from './images/library-app.png';
import MobileMenu from './images/mobile-menu.png';
import TicTacToe from './images/tic-tac-toe.png';
import WeatherApp from './images/weather-app.png';

export class ListNode {
    constructor(name, pic, src, index, selected) {
        this.name = name,
        this.src = src,
        this.index = index,
        this.pic = pic,
        this.next = null,
        this.previous = null,
        this.selected = selected
    }
}

class linkedList {
    constructor(head = null) {
        this.head = head;
    }
    size = function(){
        let count = 0; 
        let node = this.head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }
    clear = function(){
        this.head = null;   
    }
    getLast = function() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode  
    }
    getFirst = function() {
        return this.head;
    }
    getNode = function(random) {
        let node = this.head;
        while (node) {
            if (node.index == random)
                return node;
            node = node.next;
        }
    }
}

export function makeLinkedList () {
    let node1 = new ListNode('Battleship', BattleShip, 'https://hackezar.github.io/battleship/', 0, false);
    let node2 = new ListNode('Mobile Menu', MobileMenu, 'https://hackezar.github.io/mobileMenu/' ,1, false);
    node1.next = node2;
    node2.previous = node1;
    let node3 = new ListNode('Weather App', WeatherApp, 'https://hackezar.github.io/weatherApp/' , 2, true);
    node3.previous = node2;
    node2.next = node3;
    let node4 = new ListNode("Library App", LibraryApp, 'https://hackezar.github.io/libraryApp/', 3, false);
    node3.next = node4;
    node4.previous = node3;
    let node5 = new ListNode("Tic Tac Toe", TicTacToe, 'https://hackezar.github.io/ticTacToe/', 4, false);
    node4.next = node5;
    node5.previous = node4;
    let list = new linkedList(node1);
    return list;
}