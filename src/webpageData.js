import BattleShip from './images/battleship.png';
import ResumeBuilder from './images/resumeBuilder.png';
import MemoryGame from './images/memoryGame.png';
import TicTacToe from './images/tic-tac-toe.png';
import WeatherApp from './images/weather-app.png';
import ToDoList from './images/to-do-list.png';
import AdminDashboard from './images/admin-dashboard.png';
import EtchASketch from './images/etch-a-sketch.png';
import RockPaperScissors from './images/rock-paper-scissors.png';
import Calculator from './images/calculator.png';
import BusinessWebsite from './images/business-website.png';

 class ListNode {
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
    let node2 = new ListNode('Memory Game', MemoryGame, 'https://memory-game-five-eta.vercel.app/' ,1, false);
    node1.next = node2;
    node2.previous = node1;
    let node3 = new ListNode('Weather App', WeatherApp, 'https://hackezar.github.io/weatherApp/' , 2, false);
    node3.previous = node2;
    node2.next = node3;
    let node4 = new ListNode("Resume Builder", ResumeBuilder, 'https://resume-app-three-lovat.vercel.app/', 3, false);
    node3.next = node4;
    node4.previous = node3;
    let node5 = new ListNode("Tic Tac Toe", TicTacToe, 'https://hackezar.github.io/ticTacToe/', 4, false);
    node4.next = node5;
    node5.previous = node4;
    let node6 = new ListNode("To Do List", ToDoList, 'https://hackezar.github.io/todo/', 5, false);
    node5.next = node6;
    node6.previous = node5;
    let node7 = new ListNode("Admin Dashboard", AdminDashboard, 'https://hackezar.github.io/admin-dashboard/', 6, true);
    node6.next = node7;
    node7.previous = node6;
    let node8 = new ListNode('Etch A Sketch', EtchASketch, 'https://hackezar.github.io/Etch_A_Sketch/', 7, false);
    node7.next = node8;
    node8.previous = node7;
    let node9 = new ListNode('Calculator', Calculator, 'https://hackezar.github.io/calculator/', 8, false);
    node8.next = node9;
    node9.previous = node8;
    let node10 = new ListNode('Rock Paper Scissors', RockPaperScissors, 'https://hackezar.github.io/RockPaperScissors/', 9, false);
    node9.next = node10;
    node10.previous = node9;
    let node11 = new ListNode("Business Website", BusinessWebsite, 'https://hackezar.github.io/Pool_Painting/', 10, false);
    node10.next = node11;
    node11.previous = node10;
    let list = new linkedList(node1);
    return list;
}