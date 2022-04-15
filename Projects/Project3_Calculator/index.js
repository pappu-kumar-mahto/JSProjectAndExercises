var displayArea = document.getElementById('display')

function buttonClicked(btnTxt) {
    if (displayArea.innerText === '0') {
        displayArea.innerText = btnTxt
    } else {
        displayArea.innerText = displayArea.innerText + btnTxt
        /*this line will display the new number along with the previous number 
        i.e.if we press 4 and then press 5 it will show in display part as 45.
        and the values are considered as String here so concatination is done here.
        */ 
    }
    
}