//Edit type of chores

let cells = document.getElementsByTagName('li');

let btns = document.querySelectorAll('button');

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