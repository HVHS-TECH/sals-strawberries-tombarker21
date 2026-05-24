
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("statusMessage");
let userName;
let userEmail;
let userFruit;
let userQuantity;  
function writeForm() {
  // Get the form data
  let UID = GLOBAL_user.uid
  let email = GLOBAL_user.email 
  let userPFP = GLOBAL_user.photoURL
  const favoriteFruit = document.getElementById("favoriteFruit").value;
  const name = document.getElementById("name").value;
  const fruitQuantity = document.getElementById("fruitQuantity").value;
  console.log(UID)

  firebase.database().ref('/' + UID).set(
    {
      name,
      favoriteFruit,
      fruitQuantity,
      email

    }
  )
  console.log("Reading message");
  firebase.database().ref('/'+ UID).once('value', displayRead, fb_error);
  console.log("Leaving simpleRead")
}
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  data = snapshot.val()
  userName = data["name"];
  userEmail = data["email"];
  userFruit = data["favoriteFruit"];
  userQuantity = data["fruitQuantity"];

}


function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }
  else {
   // console.log("The message is: " + dbData)
  }
}
 
function generateEmail(){
//console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML ="<img src = "+ GLOBAL_user.photoURL +"> <br><br>To "+userEmail+ "<br> From Sals Strawberry Saloon <br><br>Hi, " + userName +"<br>This is Sal's Strawberry Saloon<br> We are contacting you to let you know that we are offering you a great deal for "+userQuantity+" " +userFruit+ "s"
  

}
