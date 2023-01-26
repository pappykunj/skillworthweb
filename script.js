function initializeApp(){
var firebaseConfig = {
  apiKey: "AIzaSyAMld6inH1PiOElFydp3jIk0s54sHbFkGY",
  authDomain: "myskillworth.firebaseapp.com",
  databaseURL: "https://myskillworth-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myskillworth",
  storageBucket: "myskillworth.appspot.com",
  messagingSenderId: "640087476097",
  appId: "1:640087476097:web:ee8de0deb23815102e8a80",
  measurementId: "G-LSNXH4CVKS"
};

// initialize firebase
 firebase.initializeApp(firebaseConfig);

// reference your database
var formcDB = firebase.database().ref("formc");

document.getElementById("formc").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  

  
  document.getElementById("formc").reset();
    // reset the form
  saveMessages(emailid, msgContent);
 
  console.log(emailid,msgContent);
}

const saveMessages = ( emailid, msgContent) => {
 var newformc = formcDB.push();

 newformc.set({

  emailid: emailid,
  msgContent: msgContent,
});
}

var getElementVal = (id) => {
  return document.getElementById(id).value;
};
}
const popup = document.querySelector('.full-screen');

function showPopup(){
  popup.classList.remove('hidden');
}

function closePopup(){
  popup.classList.add('hidden');
}




