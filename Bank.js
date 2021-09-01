document.getElementById('Login-Submit').addEventListener('click', function(){
    const emailFlied = document.getElementById('user-email');
    const userEmail = emailFlied.value;
    // get user password
    const passFlied = document.getElementById('user-password');
    const userPassword  = passFlied.value;
   

    if(userEmail == 'walkershahed@gmail.com' && userPassword == 'shahed890'){
         window.location.href = 'banking.html';
    }
    else{
        alert('password wrong')
    }
})



