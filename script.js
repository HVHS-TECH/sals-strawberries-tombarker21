
console.log("Running Sal's Strawberries")
const HTML_OUTPUT = document.getElementById("statusMessage");

function writeForm() {
  // Get the form data
  const favoriteFruit = document.getElementById("favoriteFruit").value;
  const name = document.getElementById("name").value;
  const fruitQuantity = document.getElementById("fruitQuantity").value;
  firebase.database().ref('/').set(
    {
      name,
      favoriteFruit,
      fruitQuantity

    }
  )
  console.log("Reading message");
  firebase.database().ref('/').once('value', displayRead, fb_error);
  console.log("Leaving simpleRead")
}
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  favFruit = snapshot.val()
  HTML_OUTPUT.innerHTML = favFruit.favoriteFruit;
  console.log(favFruit.favoriteFruit)
  console.log(favFruit)
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

