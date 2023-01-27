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

}
// var getElementVal = (id) => {
//   return document.getElementById(id).value;
// };

// const popup = document.querySelector('.full-screen');

// function showPopup(){
//   popup.classList.remove('hidden');
// }

// function closePopup(){
//   popup.classList.add('hidden');
// }


const header = document.querySelector("header");
const sectionOne = document.querySelector("intro");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -25px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
});




