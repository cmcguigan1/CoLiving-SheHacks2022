
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
    let removeBtn = inputBox.nextElementSibling;
    
    if(clickedBtn.innerText === 'edit'){
        lbl.hidden = true;
        inputBox.hidden = false;
        clickedBtn.innerText = 'save';
        removeBtn.hidden = false;
    }
    else{
        inputBox.hidden = true;
        lbl.hidden = false;
        lbl.innerText = inputBox.value;
        clickedBtn.innerText = 'edit';
        removeBtn.hidden = true; 
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
    <input id='edit-txt' type='text' hidden />
    <button id='remove-btn' hidden>remove</button>`
    li.firstElementChild.addEventListener("click", (event) => {editCell(event)});
    li.lastElementChild.addEventListener("click", (event) => {removeCell(event)});
    document.querySelector('.list').appendChild(li);
}

//Removing a chore
let removeBtns = document.querySelectorAll('#remove-btn');
for(let i=0;i<removeBtns.length;i++){
    removeBtns[i].addEventListener("click", (event) => {removeCell(event)});
}
function removeCell(event){
    let tar = event.target;
    let li = tar.parentNode;
    document.querySelector('.list').removeChild(li);
}