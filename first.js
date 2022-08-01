const firebaseConfig = {
    apiKey: "AIzaSyCtT_XCvwiyxVcUDfUE6A0J0WsNamr8RpE",
    authDomain: "wadhwanig-portfolio-550d3.firebaseapp.com",
    databaseURL: "https://wadhwanig-portfolio-550d3-default-rtdb.firebaseio.com",
    projectId: "wadhwanig-portfolio-550d3",
    storageBucket: "wadhwanig-portfolio-550d3.appspot.com",
    messagingSenderId: "407299870486",
    appId: "1:407299870486:web:792846cd1df47c292a8a37"
  };

//   Initialize
  firebase.initializeApp(firebaseConfig);

//   Database Reference
var contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e)
{
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessages(name, email, message);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    // remove alert
    setTimeout (() => {
        document.querySelector('.alert').style.display = 'none';

    }, 3000);

    // reset the form
    document.getElementById('contactForm').reset();
}

const saveMessages = (name, email, message) =>
{
    var newcontactForm = contactFormDB.push();

    newcontactForm.set({
        name : name,
        email : email,
        message : message,
    });
}

function getInputVal(id){
    return document.getElementById(id).value;
}
