/*************************************************************************************************************************************************************/
/* password Encode/Decode and Password Strength Check */ 
let passwordStoredInDB = "";
let emailStoredInDB = ""

let singnUpPass = document.getElementById("signUpPassword");
let rightSignUpPass = document.getElementById("rightSignUpPassword");
let wrongSignUpPass = document.getElementById("wrongSignUpPassword");
// let SignUpSaved = document.getElementById("SignUpSaved");
// let SignUpNotSaved = document.getElementById("SignUpNotSaved");

let passMeterBar = document.getElementById("passMeterBar")
let passMeterLebel = document.getElementById("passMeterLebel")
let passLebel = document.getElementById("passLebel")
let passMeterBarInner = document.getElementById("passMeterBarInner")

let logInPass = document.getElementById("logInPassword");
let logInMatch = document.getElementById("logInMatch");
let logInNotMatch = document.getElementById("logInNotMatch");

let signUpEmail = document.getElementById("email")
let logInEmail = document.getElementById("floatingInput")

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  a: "n",
  b: "o",
  c: "p",
  d: "q",
  e: "r",
  f: "s",
  g: "t",
  h: "u",
  i: "v",
  j: "w",
  k: "x",
  l: "y",
  m: "z",
  n: "a",
  o: "b",
  p: "c",
  q: "d",
  r: "e",
  s: "f",
  t: "g",
  u: "h",
  v: "i",
  w: "j",
  x: "k",
  y: "l",
  z: "m",
  0: "5",
  1: "6",
  2: "7",
  3: "8",
  4: "9",
  5: "0",
  6: "1",
  7: "2",
  8: "3",
  9: "4",
  "!": "#",
  $: "%",
  "&": "+",
  "-": "@",
  _: "~",
  "#": "!",
  "%": "$",
  "+": "&",
  "@": "-",
  "~": "_",
};

let encodeVal = (inputVal) => {
  const lookupKey = Object.keys(lookup);
  const lookupValue = Object.values(lookup);
  const codeArr = inputVal.split("");
  let encodeArr = codeArr.map((codeArrChar) => {
    let index = lookupValue.findIndex((element) => element === codeArrChar);
    return lookupKey[index];
  });
  return encodeArr.join("");
};

const decode = (encodedStr) => {
  const codeArr = encodedStr.split("");
  let decodedArr = codeArr.map((codeArrChar) => lookup[codeArrChar]);
  return decodedArr.join("");
};

let savePassword = ()=> {
  let inputPassword = singnUpPass.value;
  passwordStoredInDB = encodeVal(inputPassword);
  // console.log(passwordStoredInDB);
  // SignUpSaved.style.display = "block";
}

const logIn = () => {
  let inputPassword = logInPass.value;
    if (inputPassword === decode(passwordStoredInDB) && emailStoredInDB === logInEmail.value && (logInPassword.value !== "" || logInEmail.value !== "")) {
    logInMatch.style.display = "block";
    logInNotMatch.style.display = "none";
  } else {
    logInMatch.style.display = "none";
    logInNotMatch.style.display = "block";
  }
};

let passwordStrengthCheck = () => {
  passMeterBarInner.style.marginBottom = "0px";
  let strongPassword = new RegExp(
    "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-za-z0-9](?=.{8,}))"
  );
  let mediumPassword = new RegExp(
    "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-za-z0-9])(?=.{5,})|(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-za-z0-9])(?=.{8,}))"
  );

  if (singnUpPass.value === "") {
    passLebel.style.display = "none"
    passMeterLebel.style.display = "none"
    passMeterBarInner.style.display = "none"
  } else {
    
    passMeterLebel.style.display = "block"
    if (strongPassword.test(singnUpPass.value)) {
      
      passLebel.style.display = "block"
      passLebel.innerText = "Strong"
      passLebel.style.color = "#26de81"
      
      passMeterBarInner.style.display = "block"
      passMeterBarInner.style.width = "80%"
      passMeterBarInner.style.background = "#26de81"
      
    } else if (mediumPassword.test(singnUpPass.value)) {
      
      passLebel.style.display = "block"
      passLebel.innerText = "Modrate"
      passLebel.style.color = "#fd9644"
      
      passMeterBarInner.style.display = "block"
      passMeterBarInner.style.width = "66%"
      passMeterBarInner.style.background = "#fd9644"
      
    } else {
      
      passLebel.style.display = "block"
      passLebel.innerText = "Weak"
      passLebel.style.color = "#fc5c65"
      
      passMeterBarInner.style.display = "block"
      passMeterBarInner.style.width = "33%"
      passMeterBarInner.style.background = "#fc5c65"
    }
  }
}

/*************************************************************************************************************************************************************/
/* Form Validation part*/
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
      break;
    }
    case "lastName": {
      if (lastName.value === "") {
        lastNameInvalid.style.display = "block"
        lastNameValid.style.display = "none"
      } else {
        lastNameValid.style.display = "block"
        lastNameInvalid.style.display = "none"
      }
      break;
    }
    case "email": {
      if (
        email.value === "" ||
        !email.value.includes("@") ||
        !email.value.includes(".") ||
        email.value.startsWith("@") ||
        email.value.slice(email.value.lastIndexOf(".") + 1).length < 2
      ) {
        emailInvalid.style.display = "block";
        emailValid.style.display = "none";
      } else {
        emailValid.style.display = "block";
        emailInvalid.style.display = "none";
      }
      break;
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
};

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
};

let refresh = () => {
  firstNameValid.style.display = "none"
  firstNameInvalid.style.display = "none"
  lastNameValid.style.display = "none"
  lastNameInvalid.style.display = "none"
  emailValid.style.display = "none"
  emailInvalid.style.display = "none"
  passMeterBarInner.style.display = "none"
  passMeterLebel.style.display = "none"
  phoneNumberValid.style.display = "none"
  phoneNumberInvalid.style.display = "none"
  stateValid.style.display = "none"
  stateInvalid.style.display = "none"
  zipCodeValid.style.display = "none"
  zipCodeInvalid.style.display = "none"
  tncInvalid.style.display = "none"
  logInMatch.style.display = "none"
  logInNotMatch.style.display = "none"

  firstName.value = ""
  lastName.value = ""
  email.value = ""
  singnUpPass.value = ""
  phoneNumber.value = ""
  state.value = ""
  zipCode.value = ""
  tncCheckBox.checked = false
  submissionMsg.innerHTML = ""
  passwordStoredInDB = ""
  emailStoredInDB = ""
  logInPass.value = ""
  logInEmail.value = ""
};

/*************************************************************************************************************************************************************/
/* Home Page first Look*/
let homePage = () => {
  (document.getElementById("signupForm").style.display = "none"),
  (document.getElementById("loginForm").style.display = "none")
  logInMatch.style.display = "none"
  logInNotMatch.style.display = "none"
  logInPass.value = ""
  logInEmail.value = ""
}
let signupForm = () => {
  document.getElementById('signupForm').style.display = "block",
  document.getElementById('signupForm').style.backgroundColor = "azure",
  document.getElementById('signupForm').style.borderRadius = "5px"
  document.getElementById('loginForm').style.display = "none"
}
let loginForm = () => {
  document.getElementById('loginForm').style.display = "block",
  document.getElementById('loginForm').style.backgroundColor = " aliceblue",
  document.getElementById('loginForm').style.borderRadius = "5px",
  document.getElementById('signupForm').style.display = "none"
}

let emailInput = () => {
  emailStoredInDB = signUpEmail.value
}
/*************************************************************************************************/
