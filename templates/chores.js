
//Edit type of chores
let cells = document.getElementsByTagName('li');

let btns = document.querySelectorAll('#edit-btn');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", (event) => {editCell(event)});
}

function editCell(event){
	let clickedBtn = event.target;
    let lbl = clickedBtn.nextElementSibling;
    let inputBox = lbl.nextElementSibling;
    
    if(clickedBtn.innerText === 'edit'){
        lbl.hidden = true;
        inputBox.hidden = false;
        clickedBtn.innerText = 'save';
    }
    else{
        inputBox.hidden = true;
        lbl.hidden = false;
        lbl.innerText = inputBox.value;
        clickedBtn.innerText = 'edit'; 
    }
}

//Adding new chores
let add = document.getElementById('newChore');
add.addEventListener("click", (event) => {addNew(event)});

function addNew(event){
    let addbtn = event.target;
    let li = document.createElement('li');
    li.innerHTML = `<button id='edit-btn'>edit</button>
    <label id='edit-lbl'>New: </label>
    <input id='edit-txt' type='text' hidden />`
    li.firstElementChild.addEventListener("click", (event) => {editCell(event)});
    document.querySelector('.list').appendChild(li);
}