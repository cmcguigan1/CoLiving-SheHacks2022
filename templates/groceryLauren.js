var myGroceries = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myGroceries.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("     remove");
  span.className = "close";
  span.appendChild(txt);
  myGroceries[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.getElementById("myUL5");
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
function addbtn5() {
    var li = document.createElement("li");
  var inputValue = document.getElementById("myInput5").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please add a grocery item!");
  } else {
    document.getElementById("myUL5").appendChild(li);
  }
  document.getElementById("myInput5").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("      remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}