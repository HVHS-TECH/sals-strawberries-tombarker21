
console.log("Running Sal's Strawberries")

function writeForm(){
    // Get the form data
    const favoriteFruit = document.getElementById("favoriteFruit").value;
     firebase.database().ref('/').set(
    {
      message: "favouriteFruit"
    }
  )
  console.log("Reading message");
  firebase.database().ref('/').child('message').once('value', displayRead, fb_error);
  console.log("Leaving simpleRead")
}
function displayRead(snapshot) {
  console.log("Running displayRead(), the message is: " + snapshot.val())
  HTML_OUTPUT.innerHTML = snapshot.val();
  console.log(snapshot.val())
}

