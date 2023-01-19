

const firebaseConfig = {
  apiKey: "AIzaSyAbpzx3c2POreVRuwKaOwcJyy4yVu6ucIo",
  authDomain: "projectx-f740a.firebaseapp.com",
  databaseURL: "https://projectx-f740a-default-rtdb.firebaseio.com",
  projectId: "projectx-f740a",
  storageBucket: "projectx-f740a.appspot.com",
  messagingSenderId: "221161079706",
  appId: "1:221161079706:web:5ac5282829fe5d6a39f023",
  measurementId: "G-0CJ582Q82B"
};

// initialize firebase
 firebase.initializeApp(firebaseConfig);

// reference your database
var formDB = firebase.database().ref("formCDB");

document.getElementById("formCDB").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  

  // //   enable alert
  // document.querySelector(".alert").style.display = "block";

  // //   remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  //   reset the form
 
  console.log(emailid,msgContent);
}

var getElementVal = (id) => {
  return document.getElementById(id).value;
};