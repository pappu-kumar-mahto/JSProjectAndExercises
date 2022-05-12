let passwordStoredInDB = "";

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

function passwordStrengthCheck() {
  passMeterLebel.style.display = "block"
  if (singnUpPass.value.length > 8) {
    passLebel.style.display = "block"
    passLebel.innerText = "Strong"
    passLebel.style.color = "#26de81"

    passMeterBarInner.style.display = "block"
    passMeterBarInner.style.width = "80%"
    passMeterBarInner.style.background = "#26de81"

  } else if (singnUpPass.value.length >= 5) {
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

function savePassword() {
  let inputPassword = singnUpPass.value;
  passwordStoredInDB = encodeVal(inputPassword);
  SignUpSaved.style.display = "block";
}

const logIn = () => {
  let inputPassword = logInPass.value;
    if (inputPassword === decode(passwordStoredInDB)) {
    logInMatch.style.display = "block";
    logInNotMatch.style.display = "none";
  } else {
    logInMatch.style.display = "none";
    logInNotMatch.style.display = "block";
  }
};