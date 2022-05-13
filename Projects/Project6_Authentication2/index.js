/*************************************************************************************************************************************************************/
/* password Encode/Decode and Password Strength Check */ 
let passwordStoredInDB = "";
let emailStoredInDB = ""

let singnUpPass = document.getElementById("signUpPassword");
let rightSignUpPass = document.getElementById("rightSignUpPassword");
let wrongSignUpPass = document.getElementById("wrongSignUpPassword");
let SignUpSaved = document.getElementById("SignUpSaved");
let SignUpNotSaved = document.getElementById("SignUpNotSaved");

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

function savePassword() {
  let inputPassword = singnUpPass.value;
  passwordStoredInDB = encodeVal(inputPassword);
  // console.log(passwordStoredInDB);
  // SignUpSaved.style.display = "block";
}

const logIn = () => {
  let inputPassword = logInPass.value;
    if (inputPassword === decode(passwordStoredInDB) && emailStoredInDB === logInEmail.value) {
    logInMatch.style.display = "block";
    logInNotMatch.style.display = "none";
  } else {
    logInMatch.style.display = "none";
    logInNotMatch.style.display = "block";
  }
};

function passwordStrengthCheck() {
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
  // console.log(setTouchedFields)
  validation()
}
/*************************************************************************************************************************************************************/
/* Home Page first Look*/
let homePage = () => {
  document.getElementById('signupForm').style.display = "none",
  document.getElementById('loginForm').style.display = "none"
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