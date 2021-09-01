document.getElementById('submit-id').addEventListener('click', function(){
    const emailFlied = document.getElementById('exampleInputEmail1');
    const emailType = emailFlied.value;
   const paswordFlied = document.getElementById('exampleInputPassword1');
   const passType = paswordFlied.value;
   if( emailType == 'shahedbd@gmail.com' && passType == 'jalal123'){
       window.location.href = 'try.html'
   }
   else{
    alert("Password Not match");  
   }
})