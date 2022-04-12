var btnStatus = false;
        function BulbOn() {
            document.getElementById("bulb").src = 'https://www.w3schools.com/js/pic_bulbon.gif'
            document.getElementById("bulb").alt = 'BulbON'
        }

        function BulbOff() {
            document.getElementById("bulb").src = 'https://www.w3schools.com/js/pic_bulboff.gif'
            document.getElementById("bulb").alt = 'BulbOff'
        }

        function btnOnOff() {
            if (btnStatus) {
                document.getElementById("bulb2").src = 'https://www.w3schools.com/js/pic_bulboff.gif'
                document.getElementById("bulb").alt = 'BulbOff'
                btnStatus = false
            } else {
                document.getElementById("bulb2").src = 'https://www.w3schools.com/js/pic_bulbon.gif'
                document.getElementById("bulb").alt = 'BulbOn'
                btnStatus = true
            }
        }