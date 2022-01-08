var list = [];
var number= window.prompt("How many items would you like to add");
for(var i=0; i<number;i++){
    var item= window.prompt("Enter your grocery request: ");
add(item);
}
displayList(list)
function add(item){
    list.push(item)
}
function remove(item){
    list.remove(item);
}
function displayList(list){
    for(var i=0; i<list.length; i++){
        if(list==0){
            return
        }
        console.log(list[i]);
        console.log( );
    }
}