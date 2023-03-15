/**
 *  1. 추가버튼 클릭시 input에 들어있는 value의 값을 list에 추가
 *  2. 확인버튼 클릭시 todo-content의 색상을 red로 변경, 취소선 적용
 *  3. 확인버튼 다시 클릭시 todo-content의 색상을 black으로 변경, 취소선 미적용
 */

const statusList = new Array();
const addButton = document.getElementsByClassName("add-button");
addButton[0].onclick = () => {
    const todoText = document.getElementsByClassName("todo-text");
    const todoList = document.getElementsByClassName("todo-list");
    todoList[0].innerHTML += `
        <li><span class="todo-content">${todoText[0].value}</span> <button class="ok-button">확인</button></li>
    `;
    statusList.push(false);
    todoText.value = "";

    addEvent();
}

function addEvent() {
    const okButton = document.getElementsByClassName("ok-button");
    const todoContent = document.getElementsByClassName("todo-content");
    for(let i = 0; i < okButton.length; i++) {
        okButton[i].onclick = () => {
            if(statusList[i]) {
                todoContent[i].style.color = 'black';
                todoContent[i].style.textDecoration = 'none';
                statusList[i] = false;
            }else {
                todoContent[i].style.color = 'red';
                todoContent[i].style.textDecoration = 'line-through';
                statusList[i] = true;
            }
        }
    }
}

// // DOM 요소를 가져옵니다.
// const todoText = document.querySelector('.todo-text');
// const addButton = document.querySelector('.add-button');
// const todoList = document.querySelector('.todo-list');

// // 추가 버튼에 클릭 이벤트 리스너를 추가합니다.
// addButton.addEventListener('click', () => {
//   const newTodo = document.createElement('li');
//   newTodo.innerHTML = `
//     <span class="todo-content">${todoText.value}</span>
//     <button class="ok-button">확인</button>
//   `;
//   todoList.appendChild(newTodo);
//   todoText.value = '';
// });

// // ul 요소에 이벤트 위임을 사용하여 확인 버튼 클릭 이벤트를 처리합니다.
// todoList.addEventListener('click', (event) => {
//   if (event.target.classList.contains('ok-button')) {
//     const todoContent = event.target.previousElementSibling;
//     if (todoContent.style.color === 'red') {
//       todoContent.style.color = 'black';
//       todoContent.style.textDecoration = 'none';
//     } else {
//       todoContent.style.color = 'red';
//       todoContent.style.textDecoration = 'line-through';
//     }
//   }
// });
