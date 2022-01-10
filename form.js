const form=document.getElementById("form");
 const username=document.getElementById("username");
  const email=document.getElementById("email");
  const password=document.getElementById("password");
  const password2=document.getElementById("password2");


//ShowError
  function showError(input, message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector("small");
    small.innerText=message;
  }


//ShowSuccess
  function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
  }

//Valid Email Check
  function isEmailValid(email){
    const mail=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return mail.test(String(email).toLowerCase());
  }

//Username length

  form.addEventListener("submit", function(e){
    e.preventDefault();

    if(username.value==''){
      showError(username, 'Username is required');
    }
     else if(username.value.length<3){
      showError(username, 'Username is must be aleat 3 characters');
    }
     else if(username.value.length>15){
      showError(username, 'Username is must be of max 15 characters');
    }
    else{
      showSuccess(username);
    }


    if(email.value===''){
      showError(email, 'Email is required');
    }
    else if(!isEmailValid(email.value)){
      showError(email, 'Email is not valid');
    }
    else{
      showSuccess(email);
    }


     if(password.value===''){
      showError(password, 'Password is required');
    }
    else if(password.value.length<5){
      showError(password, 'Password is must be aleat 5 characters');
    }
     else if(password.value.length>9){
      showError(password, 'Password is must be of max 9 characters');
    }
    else{
      showSuccess(password);
    }


     if(password2.value===''){
      showError(password2, 'Confirm Password is required');
    }
     else if(password.value !=password2.value){
      showError(password2, 'Passwords do not match');
    }
    
    else{
      showSuccess(password2);
    }

  });