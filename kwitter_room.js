
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyA_ratyqbGvSrzfXROqO_FkkoUpB3TJdck",
      authDomain: "project-42-444cb.firebaseapp.com",
      databaseURL: "https://project-42-444cb.firebaseio.com",
      projectId: "project-42-444cb",
      storageBucket: "project-42-444cb.appspot.com",
      messagingSenderId: "423675848777",
      appId: "1:423675848777:web:9ec69e9694c6302635f798",
      measurementId: "G-453WMDPLWX"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name" +Room_names );
      row = "<div class = 'roomname' id= "+Room_names+"onclick = 'redirectToRoomName(this.id)'+#>"+Room_names+ "</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("roomname",name);
  window.location = "kwitter_page.html";
}