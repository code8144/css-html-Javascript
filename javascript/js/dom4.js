/**
 *  1. 추가버튼 클릭시 input에 들어있는 value의 값을 list에 추가
 *  2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 *  3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
 */

const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    const li = document.createElement("li");
   li.innerHTML += `
        <input type="checkbox" class="ok-check"> <span class="todo-content">${todoText[0].value}</span>
    `;
    todoList[0].appendChild(li);

    addEvent();
}

function addEvent() {
    const okCheck = document.getElementsByClassName("ok-check");
    const todoContent = document.getElementsByClassName("todo-content");
    for(let i = 0; i < okCheck.length; i++) {
        okCheck[i].onclick = () => {
            if(okCheck[i].checked) {
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecoration = 'line-through';
            }else {
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecoration = 'none';
            }
        }
    }
}