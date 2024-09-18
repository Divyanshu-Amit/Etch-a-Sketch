let color = 'black';
let click = false;
document.addEventListener("DOMContentLoaded",function (){
createBoard(16);

document.querySelector("body").addEventListener("click",function(e){
    if(e.target.tagName != "BUTTON"){
        click = !click;
        let draw = document.querySelector("#draw");
        if(click){
            draw.innerHTML = "You can draw";
        }
        else{
            draw.innerHTML = "You can't draw";
        }
    }
})

let btn_popup = document.querySelector("#popup");
btn_popup.addEventListener("click",function (){
    let size = getSize();
    createBoard(size);
})

    console.log("hi")
})


function createBoard(size){
    let board = document.querySelector(".board");

board.style.gridTemplateColumns = `repeat(${size},1fr)`;
board.style.gridTemplateRows = `repeat(${size},1fr)`;

let numDivs = size * size;

for(let i = 0 ; i<numDivs; i++){
    let div = document.createElement("div");
    div.addEventListener("mouseover", colorDiv);
    board.insertAdjacentElement("beforeend",div);
}
}

function getSize(){
    let choice = prompt("Enter the size of the board")
    let message = document.querySelector("#message");
    if(choice == ""){
        message.innerHTML = "Please enter the size";
    }
    else if(choice < 0 || choice > 100){
        message.innerHTML = "Size must be greater than 0 and less than 100";
    }
    else{
        message.innerHTML = "Size Accepted"
        return choice;
    }
}

function colorDiv(){

    if(click){
    if(color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`
    }
    else{
        this.style.backgroundColor = 'black';
    }
}
}
function setColor(colorChoice){
    color = colorChoice;
}
function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div)=>div.style.backgroundColor = "white");
}