
//Edit type of chores or participants
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
        removeBtn = clickedBtn.nextElementSibling;
        personlbl = clickedBtn.previousElementSibling;
        inputBox = personlbl.previousElementSibling;
        lbl = inputBox.previousElementSibling;
    }

    else{
        inputBox = clickedBtn.previousElementSibling;
        removeBtn = clickedBtn.nextElementSibling;
        lbl = inputBox.previousElementSibling;
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
        assign(); 
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
        li.innerHTML = `<label id='edit-lbl'>New: </label>
        <input id='edit-txt' type='text' hidden />
        <label id='assignment-lbl'>Person</label>
        <button id='edit-btn'>edit</button>
        <button id='remove-btn' hidden>remove</button>`
        li.lastElementChild.previousElementSibling.addEventListener("click", (event) => {editCell(event)});
        li.lastElementChild.addEventListener("click", (event) => {removeCell(event)});
        document.querySelector('.list').appendChild(li);
    }
    else{
        li.className = 'personLi';
        li.innerHTML = `<label id='fixed-lbl'>Person: </label>
        <label id='edit-lbl' class='name'>New </label>
        <input id='edit-txt' type='text' hidden />
        <button id='edit-btn'>edit</button>
        <button id='remove-btn' hidden>remove</button>`
        li.lastElementChild.previousElementSibling.addEventListener("click", (event) => {editCell(event)});
        li.lastElementChild.addEventListener("click", (event) => {removeCell(event)});
        document.querySelector('.people').appendChild(li);
    }
    assign();
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
    assign();
}

//Assigning people to chores
function assign(){
    let names = document.querySelectorAll('.personLi');
    let chores = document.querySelectorAll('.choreLi')
    let assignmentlbls = document.querySelectorAll('#assignment-lbl');
    let inputNames = document.querySelectorAll('.name')
    /*for(let i=0;i<names.length;i++){
        assignmentlbls[i].innerText = inputNames[i].innerText;
    }*/
    if(assignmentlbls.length > inputNames.length){
        for(let i=0;i<assignmentlbls.length;i++){
            assignmentlbls[i].innerText = inputNames[i%inputNames.length].innerText;
        }
    }
    else if(assignmentlbls.length < inputNames.length){
        for(let i=0;i<assignmentlbls.length;i++){
            assignmentlbls[i].innerText = inputNames[i%inputNames.length].innerText;
        }
    }
    else{
        for(let i=0;i<inputNames.length;i++){
            assignmentlbls[i].innerText = inputNames[i%assignmentlbls.length].innerText;
        }
    }
}   

//assign();

//Randomly assign chores
let rotateBtn = document.getElementById('rotate');
rotateBtn.addEventListener("click", (event) => {rotateChores(event)});
//var counter=0;

function rotateChores(event){
    
    let assignmentlbls = document.querySelectorAll('#assignment-lbl');
    let inputNames = document.querySelectorAll('.name');
    let randomNums = [];
    for(let i=0; i<assignmentlbls.length ; i++){
        let rand = Math.floor(Math.random() * (inputNames.length))
        randomNums.push(rand);
    }
    for(let j=0; j<assignmentlbls.length ; j++){
        assignmentlbls[j].innerText = inputNames[randomNums[j]].innerText;
    }
}
/*function rotateChores(event){
    //counter++;
    let assignmentlbls = document.querySelectorAll('#assignment-lbl');
    let inputNames = document.querySelectorAll('.name');
    if(assignmentlbls.length > inputNames.length){
        for(let i=0;i<assignmentlbls.length;i++){
            assignmentlbls[i].innerText = inputNames[(i+1)%inputNames.length].innerText;
        }
    }
    else if(assignmentlbls.length < inputNames.length){
        for(let i=0;i<assignmentlbls.length;i++){
            assignmentlbls[i].innerText = inputNames[(i+1)%inputNames.length].innerText;
        }
    }
    else{
        for(let i=0;i<inputNames.length;i++){
            assignmentlbls[i].innerText = inputNames[(i+1)%inputNames.length].innerText;
        }
    }
}*/

/*function rotateChores(event){
    counter++;
    let assignmentlbls = document.querySelectorAll('#assignment-lbl');
    let inputNames = document.querySelectorAll('.name')
    if(assignmentlbls.length != inputNames.length){
        alert("Please ensure you have the same amount of people as chores!");
    }
    else{
        for(let i=0;i<inputNames.length;i++,counter++){
            assignmentlbls[i].innerText = inputNames[counter%assignmentlbls.length].innerText;
        }
    }
}*/

