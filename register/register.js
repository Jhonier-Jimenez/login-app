var data = []

function person(name, email, id, idNumber, password) {
  return {
    name,
    email,
    id,
    idNumber,
    password
  }
}

function loadLocalStorage() {

  if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"));
  }

}


function signUpUser() {

  var userForm = document.querySelector('form');
  if (validateForm(userForm)) {

    var newEntry = person(userForm[0].value, userForm[1].value, userForm[2].value, userForm[3].value, userForm[4].value);
    data.push(newEntry);
    localStorage.setItem("data", JSON.stringify(data));
    alert('Register Sucessful');

    userForm[0].value = null;
    userForm[1].value = null;
    userForm[3].value = null;
    userForm[4].value = null;
  }


}

function validateForm(form) {
  return validateField(form[0].value) && // Name field
         validateField(form[1].value) && // email field
         validateField(form[2].value) && // id field
         validateField(form[3].value) && // idNumber field
         validateField(form[4].value);   // password field
}

function validateField(field) {
  return field != null && field.trim() != '';
}

loadLocalStorage();
