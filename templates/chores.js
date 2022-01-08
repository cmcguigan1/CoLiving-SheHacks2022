
//Edit type of chores
let cells = document.getElementsByTagName('li');

let btns = document.querySelectorAll('#edit-btn');

for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click", (event) => {editCell(event)});
}

function editCell(event){
	let clickedBtn = event.target;
    let parent = clickedBtn.parentElement;
    let lbl = "";
    let personlbl= "";
    let inputBox= "";
    let removeBtn= "";

    if(parent.className === 'choreLi'){
        lbl = clickedBtn.nextElementSibling;
        inputBox = lbl.nextElementSibling;
        personlbl = inputBox.nextElementSibling;
        removeBtn = personlbl.nextElementSibling;
    }

    else{
        lbl = clickedBtn.nextElementSibling;
        inputBox = lbl.nextElementSibling;
        removeBtn = inputBox.nextElementSibling;
    }
    
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

//Adding new chores or people
let addChore = document.getElementById('newChore');
addChore.addEventListener("click", (event) => {addNew(event)});

let addPerson = document.getElementById('newPerson');
addPerson.addEventListener("click", (event) => {addNew(event)});

function addNew(event){
    let addbtn = event.target;
    let li = document.createElement('li');
    if(addbtn.id === 'newChore'){
        li.className = 'choreLi';
        li.innerHTML = `<button id='edit-btn'>edit</button>
        <label id='edit-lbl'>New: </label>
        <input id='edit-txt' type='text' hidden />
        <label id='assignment-lbl'>Person</label>
        <button id='remove-btn' hidden>remove</button>`
        li.firstElementChild.addEventListener("click", (event) => {editCell(event)});
        li.lastElementChild.addEventListener("click", (event) => {removeCell(event)});
        document.querySelector('.list').appendChild(li);
    }
    else{
        li.innerHTML = `<label id='fixed-lbl'>Person: </label>
        <button id='edit-btn'>edit</button>
        <label id='edit-lbl'>New: </label>
        <input id='edit-txt' type='text' hidden />
        <button id='remove-btn' hidden>remove</button>`
        li.firstElementChild.nextElementSibling.addEventListener("click", (event) => {editCell(event)});
        li.lastElementChild.addEventListener("click", (event) => {removeCell(event)});
        document.querySelector('.people').appendChild(li);
    }
}

//Removing a chore or a person
let removeBtns = document.querySelectorAll('#remove-btn');
for(let i=0;i<removeBtns.length;i++){
    removeBtns[i].addEventListener("click", (event) => {removeCell(event)});
}
function removeCell(event){
    let tar = event.target;
    let li = tar.parentNode;
    if(li.className === 'choreLi'){
        document.querySelector('.list').removeChild(li);
    }
    else{
        document.querySelector('.people').removeChild(li);
    }
}


