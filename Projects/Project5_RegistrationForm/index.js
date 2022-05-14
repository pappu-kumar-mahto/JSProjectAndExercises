let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")

let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")

let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")

let phoneNumberValid = document.getElementById("phoneNumberValid")
let phoneNumberInvalid = document.getElementById("phoneNumberInvalid")

let stateValid = document.getElementById("stateValid")
let stateInvalid = document.getElementById("stateInvalid")

let zipCodeValid = document.getElementById("zipCodeValid")
let zipCodInvalid = document.getElementById("zipCodeInvalid")

let tncInvalid = document.getElementById("tncInvalid")

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")
let phoneNumber = document.getElementById("phoneNumber")
let state = document.getElementById("state")
let zipCode = document.getElementById("zipCode")
let tncCheckBox = document.getElementById("tncCheckBox")

let submissionMsg = document.getElementById("submissionMsg")

let validate = (response) => {
  switch (response) {
    case "firstName": {
      if (firstName.value === "") {
        firstNameInvalid.style.display = "block"
        firstNameValid.style.display = "none"
      } else {
        firstNameValid.style.display = "block"
        firstNameInvalid.style.display = "none"
      }
      break
    }
    case "lastName": {
      if (lastName.value === "") {
        lastNameInvalid.style.display = "block"
        lastNameValid.style.display = "none"
      } else {
        lastNameValid.style.display = "block"
        lastNameInvalid.style.display = "none"
      }
      break
    }
    case "email": {
      if (
        email.value === "" ||
        !email.value.includes("@") ||
        !email.value.includes(".") ||
        email.value.startsWith("@") ||
        email.value.slice(email.value.lastIndexOf(".") + 1).length < 2
      ) {
        emailInvalid.style.display = "block"
        emailValid.style.display = "none"
      } else {
        emailValid.style.display = "block"
        emailInvalid.style.display = "none"
      }
      break
    }
    case "phoneNumber": {
      if (
        phoneNumber.value === "" ||
        phoneNumber.value.length != 10 ||
        Number(phoneNumber.value[0]) < 6
      ) {
        // !phoneNumber.match(/^[6-9]\d{9}$/g)
        phoneNumberInvalid.style.display = "block"
        phoneNumberValid.style.display = "none"
      } else {
        phoneNumberValid.style.display = "block"
        phoneNumberInvalid.style.display = "none"
      }
      break;
    }
    case "state": {
      if (state.value === "" || state.value === "...") {
        stateInvalid.style.display = "block"
        stateValid.style.display = "none"
      } else {
        stateValid.style.display = "block"
        stateInvalid.style.display = "none"
      }
      break;
    }
    case "zipCode": {
      if (zipCode.value === "" || zipCode.value.length != 6) {
        zipCodInvalid.style.display = "block"
        zipCodeValid.style.display = "none"
      } else {
        zipCodeValid.style.display = "block"
        zipCodInvalid.style.display = "none"
      }
      break;
    }
    case "tncCheckBox": {
      if (!tncCheckBox.checked) {
        tncInvalid.style.display = "block"
      } else {
        tncInvalid.style.display = "none"
      }
      break;
    }
  }
}

let validateAll = () => {
  validate("firstName")
  validate("lastName")
  validate("email")
  validate("phoneNumber")
  validate("state")
  validate("zipCode")
  validate("tncCheckBox")

  if (
    firstNameInvalid.style.display === "none" &&
    lastNameInvalid.style.display === "none" &&
    emailInvalid.style.display === "none" &&
    phoneNumberInvalid.style.display === "none" &&
    stateInvalid.style.display === "none" &&
    zipCodeInvalid.style.display === "none" &&
    tncInvalid.style.display === "none"
  ) {
    submissionMsg.innerHTML = "Registration Successfull."
  }
}

let refresh = () => {
  firstNameValid.style.display = "none"
  firstNameInvalid.style.display = "none"
  lastNameValid.style.display = "none"
  lastNameInvalid.style.display = "none"
  emailValid.style.display = "none"
  emailInvalid.style.display = "none"
  phoneNumberValid.style.display = "none"
  phoneNumberInvalid.style.display = "none"
  stateValid.style.display = "none"
  stateInvalid.style.display = "none"
  zipCodeValid.style.display = "none"
  zipCodeInvalid.style.display = "none"
  tncInvalid.style.display = "none"

  firstName.value = ""
  lastName.value = ""
  email.value = ""
  phoneNumber.value = ""
  state.value = ""
  zipCode.value = ""
  tncCheckBox.checked = false
  submissionMsg.innerHTML = ""
}
