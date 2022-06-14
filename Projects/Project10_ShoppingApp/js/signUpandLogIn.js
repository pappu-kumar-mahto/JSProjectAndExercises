/*************************************************************************************************************************************************************/
/* password Encode/Decode and Password Strength Check */ 
let passwordStoredInDB = "";
let emailStoredInDB = ""

let singnUpPass = document.getElementById("signUpPassword");

let signUpForm = document.getElementById('signupForm')

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

/*************************************************************************************************************************************************************/
/* Form Validation part*/
let firstNameValid = document.getElementById("firstNameValid")
let firstNameInvalid = document.getElementById("firstNameInvalid")

let lastNameValid = document.getElementById("lastNameValid")
let lastNameInvalid = document.getElementById("lastNameInvalid")

let emailValid = document.getElementById("emailValid")
let emailInvalid = document.getElementById("emailInvalid")

let rightSignUpPass = document.getElementById("rightSignUpPass");
let wrongSignUpPass = document.getElementById("wrongSignUpPass");

let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let email = document.getElementById("email")

let validate = (response) => {
  switch (response) {
    case "firstName": {
      if (firstName.value === "") {
        firstNameInvalid.style.display = "block";
        firstNameValid.style.display = "none";
      } else {
        firstNameValid.style.display = "block";
        firstNameInvalid.style.display = "none";
      }
      break;
    }
    case "lastName": {
      if (lastName.value === "") {
        lastNameInvalid.style.display = "block";
        lastNameValid.style.display = "none";
      } else {
        lastNameValid.style.display = "block";
        lastNameInvalid.style.display = "none";
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
    case "singnUpPass": {
      if (singnUpPass.value === "" || singnUpPass.value.length < 8) {
        rightSignUpPass.style.display = "none";
        wrongSignUpPass.style.display = "block";
      } else {
        rightSignUpPass.style.display = "block";
        wrongSignUpPass.style.display = "none";
      }
      break;
    }
  }
};

let validateAll = () => {
  validate("firstName")
  validate("lastName")
  validate("email")
  validate("singnUpPass")
  if (
    firstNameInvalid.style.display === "none" &&
    lastNameInvalid.style.display === "none" &&
    emailInvalid.style.display === "none" &&
    wrongSignUpPass.style.display === "none"
  ) {
    
  }
};

let refresh = () => {
  firstNameValid.style.display = "none"
  firstNameInvalid.style.display = "none"
  lastNameValid.style.display = "none"
  lastNameInvalid.style.display = "none"
  emailValid.style.display = "none"
  emailInvalid.style.display = "none"
  
  logInMatch.style.display = "none"
  logInNotMatch.style.display = "none"

  firstName.value = ""
  lastName.value = ""
  email.value = ""
  singnUpPass.value = ""
 
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
