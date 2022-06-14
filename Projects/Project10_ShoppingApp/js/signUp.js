let DB_USER = []

let signUpNav = document.getElementById('sign-up-nav')
let loginpNav = document.getElementById('login-nav')

const signUp = () => {
    let isValid = validate(true)

    if (isValid) {
      let firstNameField = signUpForm.getElementsByClassName("form-fields")[0];
      let lastNameField = signUpForm.getElementsByClassName("form-fields")[1];
      let emailField = signUpForm.getElementsByClassName("form-fields")[2];
        let passwordField = signUpForm.getElementsByClassName("form-fields")[3];
        
        let firstName = firstNameField.getElementsByClassName('form-control')[0].value
        let lastName = lastNameField.getElementsByClassName('form-control')[0].value
        let email = emailField.getElementsByClassName('form-control')[0].value
        let password = passwordField.getElementsByClassName('form-control')[0].value

        let newUser = {
            firstName,
            lastName,
            email,
            password,
        }

        DB_USER.push(newUser);
        
        reset()
        $('#signUpModal').modal('hide')

        signUpNav.innerHTML = `<a class="nav-link">Hi ${newUser.firstName}</a>`
        loginpNav.innerHTML = `<a class="nav-link">LogOut</a>`
    }
}