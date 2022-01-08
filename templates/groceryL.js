const groceries=[];

class Grocieries{
    constructor(item){
        this.ulElement=item;
    }
    add(){
        const inputs= document.querySelector("#myInput").value;
        if(inputs==""){
        alert("You need to eneter an grocery!!")}
        else{
            const groceryObject={
                id: groceries.length,
                itemNAme: inputs,
                isDone:false,
            }
            groceries.unshift(groceryObject);
            this.display();
            document.querySelector("#myInput").value='';
        }
    }
    found(x){
        const itemIndex=groceries.findIndex((item)=>item.id==x);
        console.log(groceries[itemIndex].isDone);
        groceries[itemIndex].isDone==false? groceries[itemIndex].isDone=true:groceries[itemIndex].isDone=false;
        this.display();
    }
    deleteFood(y){
        const intemIndex=groceries.findIndex((item)=>item.id==y);
        groceries.splice(itemIndex,1);
        this.display();
    }
    display(){
        this.ulElement.innerHTML="";
        groceries.forEach((item)=>{
            const liElement=document.createElement("li");
            const delBTn=document.createElement("del");
            liElement.innerText=item.itemNAme;
            liElement.setAttribute("data-id",item.id);

            delBTn.setAttribute("data-id",item.id)
            delBTn.classList.add("far","fa-trash-alt");
            liElement.appendChild(delBTn);
            delBTn.addEventListener("click",function(e){
                const deleteId=e.target.getAttribute("data-id");
                myList.deleteElement(deleteId);
            })
            liElement.addEventListener("click",function(e){
                const selectedId=e.target.getAttribute("data-id");
                myList.found(selectedId);
            })
            if(item.isDone){
                liElement.classList.add("checked");
            }
            this.ulElement.appendChild(liElement);
        })

    }
}

const listSelection=document.querySelector("#myUL");
myList=new Grocieries(listSelection);
document.querySelector(".addBTn").addEventListener("click",function(){
    myList.add()
})