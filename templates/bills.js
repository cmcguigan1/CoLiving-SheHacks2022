//onclick function 
document.getElementById("button").onclick = function(){
  var e = document.getElementById("dropdownlist");
  var person = e.options[e.selectedIndex].text;

  if (person ==="Tara"){
  var amount = document.getElementById("number").value; //getting the inputted value 
  //var total = amount + document.getElementById("name1").innerText;
  document.getElementById("name1").innerText = "$" + amount;
  }

  if (person ==="Claire"){
    var amount = document.getElementById("number").value; //getting the inputted value 
    //var total = amount + document.getElementById("name1").innerText;
    document.getElementById("name2").innerText = "$" + amount;
    }

  if (person ==="Kaitlyn"){
      var amount = document.getElementById("number").value; //getting the inputted value 
      //var total = amount + document.getElementById("name1").innerText;
      document.getElementById("name3").innerText = "$" + amount;
      }
  if (person ==="Lauren"){
      var amount = document.getElementById("number").value; //getting the inputted value 
        //var total = amount + document.getElementById("name1").innerText;
      document.getElementById("name4").innerText = "$" + amount;
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

