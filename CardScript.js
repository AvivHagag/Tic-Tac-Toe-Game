// -- Website Author: 
// --                Aviv Hagag 
// geting canvas by Boujjou Achraf
var c = document.getElementById("c");
        var ctx = c.getContext("2d");

        //making the canvas full screen
        c.height = window.innerHeight;
        c.width = window.innerWidth;

        //chinese characters - taken from the unicode charset
        var matrix = "XOxo";
        //converting the string into an array of single characters
        matrix = matrix.split("");

        var font_size = 10;
        var columns = c.width/font_size; //number of columns for the rain
        //an array of drops - one per column
        var drops = [];
        //x below is the x coordinate
        //1 = y co-ordinate of the drop(same for every drop initially)
        for(var x = 0; x < columns; x++)
            drops[x] = 1; 

        //drawing the characters
        function draw()
        {
            if( modeSwitch.checked)  {
             // White BG for the canvas
            // Translucent BG to show trail
            ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#000000"; // Black font color
            ctx.font = font_size + "px arial";
            // Looping over drops
            for(var i = 0; i < drops.length; i++) {
                // A random chinese character to print
                var text = matrix[Math.floor(Math.random() * matrix.length)];
                // x = i * font_size, y = value of drops[i] * font_size
                ctx.fillText(text, i * font_size, drops[i] * font_size);

                // Sending the drop back to the top randomly after it has crossed the screen
                // Adding a randomness to the reset to make the drops scattered on the Y axis
                if (drops[i] * font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                // Incrementing Y coordinate
                drops[i]++;
            }

            }
            else {
            //Black BG for the canvas
            //translucent BG to show trail
            ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
            ctx.fillRect(0, 0, c.width, c.height);

            ctx.fillStyle = "#ffffff";
            ctx.font = font_size + "px arial";
            //looping over drops
            for(var i = 0; i < drops.length; i++)
            {
                //a random chinese character to print
                var text = matrix[Math.floor(Math.random()*matrix.length)];
                //x = i*font_size, y = value of drops[i]*font_size
                ctx.fillText(text, i*font_size, drops[i]*font_size);

                //sending the drop back to the top randomly after it has crossed the screen
                //adding a randomness to the reset to make the drops scattered on the Y axis
                if(drops[i]*font_size > c.height && Math.random() > 0.975)
                    drops[i] = 0;

                //incrementing Y coordinate
                drops[i]++;
            }
          }
        }
        setInterval(draw, 35);

    const modeSwitch = document.getElementById("mode-switch");
    const circleColor = document.querySelector('.circle');

    // Check for previously saved dark mode preference in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'enabled') {
      modeSwitch.checked = true;
      toggleDarkMode();
    } else {
      modeSwitch.checked = false;
      toggleDarkMode();
    }
    
    modeSwitch.addEventListener("change", toggleDarkMode);
    if (!modeSwitch.checked) { 
      circleColor.style.backgroundColor= 'white';
    }
    

    function toggleDarkMode() {
      const navbarTitle = document.getElementById("navbar-title");
      const BackBtn = document.getElementById("back-button");
      const Header = document.querySelector('header');
      const circleColor = document.querySelector('.circle');
      if (modeSwitch.checked) {
        circleColor.style.backgroundColor='black';
        navbarTitle.style.color = "#000";
        BackBtn.classList.add("whiteBtn");
        Header.style.borderBottom = '3px dotted black';
        // draw();
      } else {
        circleColor.style.backgroundColor= 'white';
        navbarTitle.style.color = "#eee";
        BackBtn.classList.remove("whiteBtn");
        Header.style.borderBottom = '3px dotted white';
      }
      if (modeSwitch.checked) {
      localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    }
