var displayArea = document.getElementById('display')

function isOperator(btnTxt){
    if(btnTxt == '+' || btnTxt == '-' || btnTxt == '*' || btnTxt == '/' || btnTxt == '%')
      return true
    else 
      return false
  }

function buttonClicked(btnTxt) {
    if (displayArea.innerText === '0') { //to stop displaying 0 in the first place
        if (btnTxt != '0' && btnTxt != '00') { //if display has already 0 don't add further 0
            if (btnTxt == '.' || isOperator(btnTxt)) { // if btn clicked is '.' or and operator then show . or operator along with zero
                displayArea.innerText = '0' + btnTxt
            } else {
                displayArea.innerText = btnTxt
            }
        }
    } else {
        if(isOperator(displayArea.innerText[displayArea.innerText.length - 1]) && isOperator((btnTxt))){
            //  replace the operator
          } else {
              displayArea.innerText = displayArea.innerText + btnTxt
              /*this line will display the new number along with the previous number 
              i.e.if we press 4 and then press 5 it will show in display part as 45.
              and the values are considered as String here so concatination is done here.
              */ 
          }
    }
    
}