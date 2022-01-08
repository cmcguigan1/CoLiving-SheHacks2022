const groceries=[];
const groceryElement= document.querySelector("#myUL");
document.querySelector("adder").addEventListener("click",add());

class Grocieries{
    constructor(item){
        this.ulElement=item;
    }
    add(){
        var li= document.createElement('li');
        li.setAttribute("myList",)
        const inputs= document.querySelector("#myInput").value;
        const addBTn= document.querySelector('#adder');
        addBTn.addEventListener('click',()=>{
            const ul= groceryElement.querySelector('ul');
            const li= document.createElement('li');
            li.innerHTML=inputs;
            ul.appendChild(li);
            inputs=' ';

        })
    }
    found(x){
        const itemIndex=groceries.findIndex((item)=>item.id==x);
        console.log(groceries[itemIndex].isDone);
        groceries[itemIndex].isDone==false
        ? (groceries[itemIndex].isDone=true)
        : (groceries[itemIndex].isDone=false);
        this.display();
    }
    deleteFood(y){
        const itemIndex=groceries.findIndex((item)=>item.id==y);
        groceries.splice(itemIndex,1);
        this.display();
    }
    display(){
        this.ulElement.innerHTML="";
        document.querySelector("#myInput").value="";
        groceries.forEach((item)=>{
            const liElement=document.createElement("li");
            const delBTn=document.createElement("del");
            liElement.innerHTML=item.itemNAme;
            liElement.setAttribute("data-id",item.id);

            delBTn.setAttribute("data-id", item.id);
            delBTn.classList.add("far");
            delBTn.classList.add("fa-trash-alt");
            delBTn.setAttribute("data-id", item.id);
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