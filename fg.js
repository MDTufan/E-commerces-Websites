document.getElementById('btn-login1').addEventListener('click', function(){
    const password = document.querySelector('#password');
   
    const passwordValue = password.value;
    

    // condition

    if(passwordValue == 'admin'){
            
            window.location.href = ('Successfull.html');
            // alert("you are successfully runing");
    }
    else{
            
            alert('YOU ARE HAKER');
    }

})