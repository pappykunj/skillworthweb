const firebaseConfig = {
  apiKey: "AIzaSyAMld6inH1PiOElFydp3jIk0s54sHbFkGY",
  authDomain: "myskillworth.firebaseapp.com",
  databaseURL: "https://myskillworth-database-id.rtdb..firebasedatabase.app",
  projectId: "myskillworth",
  storageBucket: "myskillworth.appspot.com",
  messagingSenderId: "640087476097",
  appId: "1:640087476097:web:ee8de0deb23815102e8a80",
  measurementId: "G-LSNXH4CVKS"
  //   copy your firebase config informations
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

  saveMessages(emailid, msgContent);

  // //   enable alert
  // document.querySelector(".alert").style.display = "block";

  // //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  //   reset the form
  document.getElementById("formc").reset();
}

const saveMessages = (emailid, msgContent) => {
  var newformc = formcDB.push();

  newformc.set({
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};