let passwordStoredInDB = "";

let singnUpPass = document.getElementById("signUpPassword");
let rightSignUpPass = document.getElementById("rightSignUpPassword");
let wrongSignUpPass = document.getElementById("wrongSignUpPassword");
let SignUpSaved = document.getElementById("SignUpSaved");
let SignUpNotSaved = document.getElementById("SignUpNotSaved");

let logInPass = document.getElementById("logInPassword");
let logInMatch = document.getElementById("logInMatch");
let logInNotMatch = document.getElementById("logInNotMatch");

let passwordStrength = document.getElementById("passwordStrength");

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

let evaluatePassword = (password) => {
  let score = 0;
  score = password.length;
  // console.log(score);
  score = password.match(/[^A-Za-z0-9]/gmi)
    ? score + 3
    : score;
  score = password.match(/([A-Z])/gm) ? score + 1 : score;
  score = password.match(/[0-9]/gmi) ? score + 2 : score;
  return score;
};

let scoreToData = (score) => {
  if (score >= 15) {
    return {
      width: '100 %',
      color: '#26de81',
      label: 'Strong', 
    }
  } else if (score >= 11) {
    return {
      width: '66 %',
      color: '#fd9644',
      label: 'Modrate', 
    }
  } else {
    return {
      width: '33 %',
      color: '#fc5c65',
      label: 'Weak', 
    }
  }
}
