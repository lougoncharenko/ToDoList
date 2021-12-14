/*algorithm
Grab the button element from HTML
Create an AddEventListener for the button or an onclick function
create a function that will add the task the user types into the list

pseudoCode for addItem function
Function name(){
    create varible for Ul
    create varable for user input
    create an element for list item(li)
    define list item as the value of the user input
    create a node and append it
    display the task

*/


const button=document.querySelector('button');
let addedItem= addItem();
button.addEventListener('click', addedItem) ;

function addItem(){
    var ul = document.getElementById("items");
    var task = document.getElementById("task");
    var li = document.createElement("li");
    li.setAttribute('id',task.value);
    li.appendChild(document.createTextNode(task.value));
    ul.appendChild(li);
}
    

/*function addItem(input){
    let ul = document.getElementById("items");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode("Four"));
    ul.appendChild(li); }*/


