

const firebaseConfig = {
  apiKey: "AIzaSyBfFFnAu6zoqE6U--YS2-o4h3I6xYPUESU",
  authDomain: "kwitter-b6585.firebaseapp.com",
  databaseURL: "https://kwitter-b6585-default-rtdb.firebaseio.com",
  projectId: "kwitter-b6585",
  storageBucket: "kwitter-b6585.appspot.com",
  messagingSenderId: "625967097268",
  appId: "1:625967097268:web:fb31464a9882e79c6cfee1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}







function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomNme(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomNme(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
