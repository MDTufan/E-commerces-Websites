// body durk mode
function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
// body durk mode

// accoiding
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
// accoiding

function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  
  // Initial call to avoid the delay of one second before the clock updates
  updateClock();

  // 1111111111
  document.getElementById('btn-login').addEventListener('click', function(){
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');
    const emailValue = email.value;
    const passwordValue = password.value;

    // condition

    if(emailValue == 'admin@gmail.com' && passwordValue == '12345'){
            
            window.location.href = ('Successfull.html');
            // alert("you are successfully runing");
    }
    else{
            
            alert('YOU ARE HAKER');
    }

})

// about us
document.getElementById('btn-login1').addEventListener('click', function(){
        const email = document.querySelector('#password');
       
        const emailValue = email.value;
        
    
        // condition
    
        if(emailValue == 'admin'){
                
                // window.location.href = ('Successfull.html');
                alert("you are successfully runing");
        }
        else{
                
                alert('YOU ARE HAKER');
        }
    
    })