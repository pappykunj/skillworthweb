function initializeApp(){
var firebaseConfig = {
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
var formcDB = firebase.database().ref("formc");

document.getElementById("formc").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  

  

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