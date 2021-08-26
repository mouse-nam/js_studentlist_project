
const name = document.querySelector("#name");
const University = document.querySelector("#university-name");
const type = document.querySelector("#type");

const btn = document.querySelector(".btn");
const studentlist = document.querySelector("#student-list");

btn.addEventListener('click',function(event){
    event.preventDefault()

  
    //basic validation

    if(  name.value =='' || University.value =='' ||type.value=='' ){
        alert("all the values are required");
    }
    else{
        const newRow = document.createElement('tr');
    
    //creating new name
    const newName= document.createElement('th')
    newName.innerHTML = name.value
    newRow.appendChild(newName)

    //creating new university name
    const newUniversity= document.createElement('th')
    newUniversity.innerHTML = University.value
    newRow.appendChild(newUniversity)

    //creating new name
    const newType= document.createElement('th')
    newType.innerHTML = type.value
    newRow.appendChild(newType)

    //displaying in the table
    studentlist.appendChild(newRow)

    }


});