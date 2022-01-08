
function addbtn(){
    var listthing= document.getElementById("myUL");
    var input_value= document.getElementsById("myInput").value;
    if(input_value==" "){
        alert("You did not enter any grocery item!!");
    }
    else{
        var li=document.createElement("li");
        li.setAttribute('id',input_value);
        li.appendChild(document.createTextNode(input_value));
        listthingg.appendChild(li);
        input_value=' ';
    }
}