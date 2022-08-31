var form=document.getElementById('form');

form.addEventListener('submit',function(event){
    event.preventDefault();
    let email= document.getElementById('email').value;
    let password= document.getElementById('password').value;
    console.log(email);
    console.log(password);
    
}) 