const save = document.getElementById("input");
const list = document.getElementById("todolist");
k=[]
function dolists(){
    list.innerHTML=""
    k.forEach((e,index) => {
         const listItem = document.createElement('li');

         listItem.textContent = e;
         listItem.style.marginBottom = '20px';
         listItem.style.padding = '20px'; 
         listItem.style.boxShadow = '-1px -1px 5px 0px gray';
         listItem.style.borderBottom = '5px solid #7055d3';
         
         const changeButton = document.createElement('span');
         changeButton.textContent = 'Edit';
         changeButton.style.marginRight = '5px';
         changeButton.style.marginLeft = '270px';
         changeButton.style.cursor = 'Pointer';
         changeButton.addEventListener('click',function(){
            const changeValue = prompt('Please insert your new value:',e);
            if (changeValue){
                k[index]=changeValue;
                dolists();
            }
         });

            listItem.appendChild(changeButton);
const deleteButton = document.createElement('span');
deleteButton.textContent = '|x';
deleteButton.style.cursor = 'Pointer';
deleteButton.addEventListener('click',function(){
    k.splice(index, 1);
    dolists();
});
listItem.appendChild(deleteButton);
list.appendChild(listItem);});}
function sell(){
    k.push(save.value)
    save.value=""
    dolists()
}
const should = document.getElementById("button");
should.addEventListener("click",sell);
