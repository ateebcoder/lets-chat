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
room_name = localStorage.getItem("room_name");
function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message : msg,
    like : 0 
  });
  document.getElementById("msg").value = "";
}