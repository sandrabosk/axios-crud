class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }
// Verb: GET, Route: "/characters"
// It receives NO parameters
// It returns the full characters list
// It returns JSON
  getFullList () {
    axios.get(`${this.BASE_URL}/characters`)
    .then((response)=>{
      // console.log("response is: ", response.data);
      // document.getElementsByClassName("characters-container")[0].innerHTML = "";
      $(".characters-container").empty();
      response.data.forEach(oneRes => {
        const myHtml = 
        $(
          `<div class="character-info">
            <div class="id">Id: ${oneRes.id}</div>
            <div class="name">Name: ${oneRes.name}</div>
            <div class="occupation">Occupation: ${oneRes.occupation}</div>
            <div class="debt">Debt: ${oneRes.debt}</div>
            <div class="weapon">Weapon: ${oneRes.weapon}</div>
          </div>`
        );
        $(".characters-container").append(myHtml);
        
      // no-Jquery approach:
      //   const myHtml = 
      //   `<div class="character-info">
      //       <div class="id">Id: ${oneRes.id}</div>
      //       <div class="name">Name: ${oneRes.name}</div>
      //       <div class="occupation">Occupation: ${oneRes.occupation}</div>
      //       <div class="debt">Debt: ${oneRes.debt}</div>
      //       <div class="weapon">Weapon: ${oneRes.weapon}</div>
      //   </div>`;
      // document.getElementsByClassName("characters-container")[0].innerHTML += myHtml;
      });
    })
    .catch((error) =>{
      console.log(error);
    })

  }
// Verb: GET, Route: "/characters/:id"
// It receives the character ID as a parameter (route)
// It returns the character with the indicated id
// It returns JSON
  getOneRegister (id) {
    axios
      .get(this.BASE_URL + "/characters/" + id)
      .then(response => {
        // console.log("oneRegister response is:", response);
        $(".characters-container").empty();
        const singleCharacter = $(`<div class="character-info">
            <div class="id">Id: ${response.data.id}</div>
            <div class="name">Name: ${response.data.name}</div>
            <div class="occupation">Occupation: ${response.data.occupation}</div>
            <div class="debt">Debt: ${response.data.debt}</div>
            <div class="weapon">Weapon: ${response.data.weapon}</div>
          </div>`);
        $(".characters-container").append(singleCharacter);
      })
      .catch(error => {
        console.log(error);
      });
  }

// Verb: POST, Route: "/characters"
// It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
// It returns the created character if there are no errors
// It returns the wrong fields if there is some error
// It returns JSON
  createOneRegister (data) {
    axios
      .post(this.BASE_URL + "/characters/", data)
      .then((response) => {
        // console.log("created: ", response)
      })
      .catch(error => {
        console.log(error);
      });
  }

// It receives the character id as a parameter (route)
// It receives an object as a parameter, with the following format: { name: string, occupation: string, debt: boolean, weapon: string }
// All the fields are optionals
// It returns the updated character if there are no errors
// It returns "Character not found" if there is no character with the indicated id
// It returns JSON / text
  updateOneRegister (id, data) {
    axios.patch(this.BASE_URL + "/characters/" + id, data)
      .then(response => {
        console.log("updated: ", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

// It receives the character id as a parameter (route)
// It returns "Character has been successfully deleted" if there are no errors
// It returns "Character not found" if there is no character with the indicated id
// It returns text
  deleteOneRegister (id) {
    axios.delete(this.BASE_URL + "/characters/" + id)
      .then((response) => {
        console.log("deleted: ", response);
      })
      .catch();
  }
}
