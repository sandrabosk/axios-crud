const charactersAPI = new APIHandler("http://localhost:8000")

$(document).ready( () => {
  document.getElementById('fetch-all').onclick = function(){
    charactersAPI.getFullList();
  }
  
  document.getElementById('fetch-one').onclick = function(){
    const id = document.getElementsByName("character-id")[0].value;
    console.log("the id is:", id);
    charactersAPI.getOneRegister(id);
  };
  
  document.getElementById('delete-one').onclick = function(){
    const id = document.getElementsByName("character-id-delete")[0].value;
    console.log("deleted char has id: ", id);
    charactersAPI.deleteOneRegister(id);
  }
  
  document.getElementById('edit-character-form').onsubmit = function(){
    event.preventDefault(); 
    const id = document.getElementsByName("chr-id")[0].value;
    // console.log("id", id);
    
const name = document.getElementsByName("name")[1].value;
const occupation = document.getElementsByName("occupation")[1].value;
const debt = document.getElementsByName("debt")[1].checked;
const weapon = document.getElementsByName("weapon")[1].value;

    const updatedCharacter = {};

    if (name !== "") {
      updatedCharacter.name = name;
    } 
    if (occupation !== "") {
      updatedCharacter.occupation = occupation;
    } 
    if (debt === "true") {
      updatedCharacter.debt = debt;
    } 
    if (weapon !== "") {
      updatedCharacter.weapon = weapon;
    }

    charactersAPI.updateOneRegister(id, updatedCharacter);
   
  };
  
  document.getElementById('new-character-form').onsubmit = function(){
    event.preventDefault(); 

    const name = document.getElementsByName("name")[0].value;
    const occupation = document.getElementsByName("occupation")[0].value;
    const debt = document.getElementsByName("debt")[0].checked;
    const weapon = document.getElementsByName("weapon")[0].value;

    if (name === ""){
      console.log("Input the name please");
    } else if (occupation === ""){
      console.log("Input the occupation please");
    } else if (debt === "") {
      console.log("Input the debt please");
    } else if (weapon === "") {
      console.log("Input the weapon please");
    } else {
        const myCharacter = {
          name : document.getElementsByName("name")[0].value,
          occupation : document.getElementsByName("occupation")[0].value,
          debt : document.getElementsByName("debt")[0].checked,
          weapon:document.getElementsByName("weapon")[0].value
        };  
        console.log("MyChar: ", myCharacter)
        charactersAPI.createOneRegister(myCharacter);
    }

                
  }
})
