var data = []

function loadLocalStorage() {
  if (localStorage.getItem("data") != null) {
    data = JSON.parse(localStorage.getItem("data"));
  }
}

function login() {
  var userForm = document.querySelector('form');
  if (validateForm(userForm)) {
    if (data.length) {
      var email = userForm[0].value.trim();
      var password = userForm[1].value.trim();

      var registeredUser = data.find(user => user.email === email);
      if (registeredUser) {
        if (password === registeredUser.password) {
          alert('Login Sucessful');
          window.location.href = 'welcome/welcome.html';
        } else {
          showError();
        }
      } else {
        showError();
      }

    } else {
      showError();
    }

  }
}

function validateForm(form) {
  return validateField(form[0].value) && // Mail field
    validateField(form[1].value); // Password field
}

function validateField(field) {
  return field != null && field.trim() != '';
}

function showError() {
  alert('Invalid Mail or Password')
}


loadLocalStorage();
