
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("statusMessage");

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
    const name = document.getElementById("name").value;
     firebase.database().ref('/').set(
    {
      favFruit: {favoriteFruit},
      name: {name}
    }
  )
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead, fb_error);
  console.log("Leaving simpleRead")
}
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  favFruit = snapshot.val()
  HTML_OUTPUT.innerHTML = favFruit.favoriteFruit;
  console.log(favFruit.favoriteFruit)
}


function display(snapshot) {
  var dbData = snapshot.val();
  if (dbData == null) { // if there is no data, dbData will be null.
    console.log('There was no record when trying to read the message');
  }
  else {
    console.log("The message is: " + dbData)
  }
}

