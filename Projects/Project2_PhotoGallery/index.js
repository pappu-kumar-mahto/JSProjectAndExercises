let panel1 = document.getElementById("panel-1");
let panel2 = document.getElementById("panel-2");
let panel3 = document.getElementById("panel-3");
let panel4 = document.getElementById("panel-4");
let panel5 = document.getElementById("panel-5");

//var panels = document.getElementsByClassName('panel') ==> this will select all the classes having name 'panel'.
/* .classList ==> return all classes a section contains.
    in .classList there are two methods: 1. .add('className') ==> name we provide in add() will be added as new class to the section.
                                         2. .remove('className') ==> name we provide in remove()) will be removed from the section.
*/
function resetActivePanel() {
    panel1.classList.remove('active')
    panel2.classList.remove('active')
    panel3.classList.remove('active')
    panel4.classList.remove('active')
    panel5.classList.remove('active')
}

function selectPanel(panelId) {
    resetActivePanel()
    document.getElementById(panelId).classList.add('active')

    /*
    Need to pass the same panelNo value to corresponding panels in html in order to use switch case function
    switch (panelNo) {
      case 1: {
        panel1.classList.add("active");
      }
      case 2: {
        panel2.classList.add("active");
      }
      case 3: {
        panel3.classList.add("active");
      }
      case 4: {
        panel4.classList.add("active");
      }
      case 5: {
        panel5.classList.add("active");
      }
    }
    */
}