//onclick function 
document.getElementById("button").onclick = function(){

  var amount = document.getElementById("number").value; //getting the inputted value 
  //var total = amount + document.getElementById("name1").innerText;
  document.getElementById("name1").innerText = amount;
}
