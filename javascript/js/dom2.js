const box = document.getElementsByClassName("box");
box[0].style.backgroundColor = "black";

addEvent();

function addEvent() {
    const redButton = document.getElementsByClassName("red-button");
    const blueButton = document.getElementsByClassName("blue-button");

    for(let i = 0; i < box.length; i++) {
        redButton[i].onclick = () => {
            box[i].style.backgroundColor = "red";
        }
        blueButton[i].onclick = () => {
            box[i].style.backgroundColor = "blue";
        }
    }
}

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const container = document.getElementsByClassName("container");
    container[0].innerHTML += `
        <div class="box"></div>
        <button class="red-button">빨간색</button>
        <button class="blue-button">파란색</button>
    `;
    box[box.length - 1].style.backgroundColor = "black";

    addEvent();
}


