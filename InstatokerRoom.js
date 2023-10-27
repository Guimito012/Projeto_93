var firebaseConfig = {
  apiKey: "AIzaSyBvOt5iGvobp1tB1KYMLu5Elt10dqfeyzY",
  authDomain: "instatoker-dc754.firebaseapp.com",
  databaseURL: "https://instatoker-dc754-default-rtdb.firebaseio.com",
  projectId: "instatoker-dc754",
  storageBucket: "instatoker-dc754.appspot.com",
  messagingSenderId: "828426222498",
  appId: "1:828426222498:web:6e1bd52fd19216ff6090fb",
  measurementId: "G-PZM24DF3LC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADICIONE SEUS LINKS FIREBASE

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });

    localStorage.setItem("roomName", roomName);
    
    window.location = "instatoker_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Room Name - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "instatoker_page.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}