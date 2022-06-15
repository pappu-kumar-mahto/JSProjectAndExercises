const login = () => {
    let isValid = loginValidate(true)

    if (isValid) {
      let loginEmailField = loginForm.getElementsByClassName("form-fields")[0];
      let loginPasswordField =
        loginForm.getElementsByClassName("form-fields")[1];

      let email =
        loginEmailField.getElementsByClassName("form-control")[0].value;
      let password =
        loginPasswordField.getElementsByClassName("form-control")[0].value;
    }
}