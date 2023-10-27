const firebaseConfig = {
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


function addUser()
{
    userName = document.getElementById("userName").value;
    firebase.database().ref("/").child(userName).update({
        purpose : "adicionar usuário"
    });
}
// firebase adiciona os dados do banco de dados //
// database adiciona dados ao banco de dados //
// ref adicionar o nome do Usuário ao banco de dados //
// child utilizada para fornecer o nome da pasta principal //
// userName é a nossa subPasta //
// update é responsável por atualizar o banco de dados com valores //
// purpose é uma chave //