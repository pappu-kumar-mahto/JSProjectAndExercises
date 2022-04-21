/*let bankBalance1 = Number(prompt("Enter first balances: "))
let bankBalance2 = Number(prompt("Enter second balances: "))
let bankBalance3 = Number(prompt("Enter third balances: "))
let bankBalance4 = Number(prompt("Enter fourth balances: "))
let bankBalance5 = Number(prompt("Enter fifth balances: "))
*/

/*let bankBalances = prompt("Enter your balances seperated by ','").split(',')

for (let i = 0; i < bankBalances.length; i++){
    bankBalances[i] = Number(bankBalances[i])

    if (bankBalances[i] > 200000) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002
    }else if (bankBalances[i] > 100000) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005
    } else {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03
    }
}

console.log(bankBalances)
*/

function calculateIntrest() {
    let bankBalance1 = Number(document.getElementById("bankBalance-1").value);
    let bankBalance2 = Number(document.getElementById("bankBalance-2").value);
    let bankBalance3 = Number(document.getElementById("bankBalance-3").value);
    let bankBalance4 = Number(document.getElementById("bankBalance-4").value);
    let bankBalance5 = Number(document.getElementById("bankBalance-5").value);
  
    updateBankBalance1 = document.getElementById("updatedBankBalance-1");
    updateBankBalance2 = document.getElementById("updatedBankBalance-2");
    updateBankBalance3 = document.getElementById("updatedBankBalance-3");
    updateBankBalance4 = document.getElementById("updatedBankBalance-4");
    updateBankBalance5 = document.getElementById("updatedBankBalance-5");
  
    let bankBalances = [
      bankBalance1,
      bankBalance2,
      bankBalance3,
      bankBalance4,
      bankBalance5,
    ];
  
    //   console.log(bankBalances)
  
    //   console.log(
    //     bankBalance1,
    //     bankBalance2,
    //     bankBalance3,
    //     bankBalance4,
    //     bankBalance5
    //   );
  
    for (let i = 0; i < bankBalances.length; i++) {
      bankBalances[i] = Number(bankBalances[i]);
  
      if (bankBalances[i] > 200000) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.1;
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.002;
      } else if (bankBalances[i] > 100000) {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.05;
        bankBalances[i] = bankBalances[i] - bankBalances[i] * 0.0005;
      } else {
        bankBalances[i] = bankBalances[i] + bankBalances[i] * 0.03;
      }
      }
      
      updateBankBalance1.value = bankBalances[0]
      updateBankBalance2.value = bankBalances[1]
      updateBankBalance3.value = bankBalances[2]
      updateBankBalance4.value = bankBalances[3]
      updateBankBalance5.value = bankBalances[4]
  }
  