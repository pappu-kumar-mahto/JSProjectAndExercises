let firstNameValid = document.getElementById("firstNameValid");
let firstNameInvalid = document.getElementById("firstNameInvalid");

let lastNameValid = document.getElementById("lastNameValid");
let lastNameInvalid = document.getElementById("lastNameInvalid");

let emailValid = document.getElementById("emailValid");
let emailInvalid = document.getElementById("emailInvalid");

let phoneNumberValid = document.getElementById("phoneNumberValid");
let phoneNumberInvalid = document.getElementById("phoneNumberInvalid");

let stateValid = document.getElementById("stateValid");
let stateInvalid = document.getElementById("stateInvalid");

let zipCodeValid = document.getElementById("zipCodeValid");
let zipCodInvalid = document.getElementById("zipCodeInvalid");

let tncInvalid = document.getElementById("tncInvalid");

let setTouchedFields = {
  firstName: false,
  lastName: false,
  email: false,
  phoneNumber: false,
  state: false,
  zipCode: false,
  tncCheckBox: false
};

function validation() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let state = document.getElementById("state").value;
  let zipCode = document.getElementById("zipCode").value;
  let tncCheckBox = document.getElementById("tncCheckBox").checked;

  if (setTouchedFields['firstName']) {
    if (firstName === "") {
      firstNameInvalid.style.display = "block";
      firstNameValid.style.display = "none";
    } else {
      firstNameValid.style.display = "block";
      firstNameInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['lastName']) {
    if (lastName === "") {
      lastNameInvalid.style.display = "block";
      lastNameValid.style.display = "none";
    } else {
      lastNameValid.style.display = "block";
      lastNameInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['email']) {
    if (
      email === "" ||
      !email.includes("@") ||
      !email.includes(".") ||
      email.startsWith("@") ||
      email.slice(email.lastIndexOf(".") + 1).length < 2
    ) {
      emailInvalid.style.display = "block";
      emailValid.style.display = "none";
    } else {
      emailValid.style.display = "block";
      emailInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['phoneNumber']) {
    if (
      phoneNumber === "" ||
      phoneNumber.length != 10 ||
      Number(phoneNumber[0]) < 6
    ) {
      // !phoneNumber.match(/^[6-9]\d{9}$/g)
      phoneNumberInvalid.style.display = "block";
      phoneNumberValid.style.display = "none";
    } else {
      phoneNumberValid.style.display = "block";
      phoneNumberInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['zipCode']) {
    if (zipCode === "" || zipCode.length != 6) {
      zipCodInvalid.style.display = "block";
      zipCodeValid.style.display = "none";
    } else {
      zipCodeValid.style.display = "block";
      zipCodInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['state']) {
    if (state === "") {
      stateInvalid.style.display = "block";
      stateValid.style.display = "none";
    } else {
      stateValid.style.display = "block";
      stateInvalid.style.display = "none";
    }
  }

  if (setTouchedFields['tncCheckBox']) {
    if (!tncCheckBox) {
      tncInvalid.style.display = "block";
    } else {
      tncInvalid.style.display = "none";
    }
  }
}



function setTouched(fieldName) {
  setTouchedFields[fieldName] = true
  console.log(setTouchedFields)
  validation()
}
