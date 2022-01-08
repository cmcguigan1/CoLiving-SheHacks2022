//onclick function 

document.getElementById("button").onclick = function(){


  var e = document.getElementById("dropdownlist");
  var person = e.options[e.selectedIndex].text;


  if (person ==="Tara"){
    var amount = document.getElementById("number").value;
    if(document.getElementById("name1").innerText>0){
      previous = document.getElementById("name1").innerText
      document.getElementById("name1").innerText = Number(amount) + Number(previous);
    }
    else{
     //getting the inputted value 
      document.getElementById("name1").innerText = amount;
    }
  }

  if (person ==="Claire"){
    var amount = document.getElementById("number").value;
    if(document.getElementById("name2").innerText>0){
      previous = document.getElementById("name2").innerText
      document.getElementById("name2").innerText = Number(amount) + Number(previous);
    }
    else{
     //getting the inputted value 
      document.getElementById("name2").innerText = amount;
    }
    }

  if (person ==="Kaitlyn"){
    var amount = document.getElementById("number").value;
    if(document.getElementById("name3").innerText>0){
      previous = document.getElementById("name3").innerText
      document.getElementById("name3").innerText = Number(amount) + Number(previous);
    }
    else{
     //getting the inputted value 
      document.getElementById("name3").innerText = amount;
    }
      }

  if (person ==="Lauren"){
    var amount = document.getElementById("number").value;
    if(document.getElementById("name4").innerText>0){
      previous = document.getElementById("name1").innerText
      document.getElementById("name4").innerText = Number(amount) + Number(previous);
    }
    else{
     //getting the inputted value 
      document.getElementById("name4").innerText = amount;
    }
      }

      publishhistory();

      let inputs = document.querySelectorAll("input");
      inputs.forEach((input) => (input.value = ""));
};


function publishhistory(){
  
  var e = document.getElementById("dropdownlist");
  var person = e.options[e.selectedIndex].text;
  var amount = document.getElementById("number").value;
  var description = document.getElementById("text").value;
  var date = document.getElementById("date").value;

  var table = document.getElementById('table'); //get table

  var newRow = table.insertRow();   

  newRow.insertCell().innerText = description;
  newRow.insertCell().innerText = amount;
  newRow.insertCell().innerText = date;
  newRow.insertCell().innerText = person;
}

