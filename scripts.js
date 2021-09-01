//select elements
const form          = document.querySelector('.signup-form'),
      userNameField = document.querySelector('input[type=text]'),
      emailField    = document.querySelector('input[type=email]'),
      passwordField = document.querySelector('input[type=password]'),
      ageField      = document.querySelector('input[type=number]'),
      submitBtn     = document.querySelector('input[type=submit]'),
      errorMsg      = document.querySelector('.error-msg'),
      successMsg    = document.querySelector('.signup-msg');

//check all fields when submitting form
  //regEx for every field
        // username must contain only [6 to 10] numbers and/or letters
  const usernameRegEx = /^[\w]{6,10}$/,
        // email must be valid
        emailRegEx    = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        // password must contain 8 characters, at least one letter, one number and one special character
        passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        // age must be only positive numbers and in range [12 - 70]
        ageRegEx      = /^(7[0-0]|1[2-9]|[2-6][0-9])$/;

  //variables to check if all fields are ready to submit
  let userIsValid = false,
        emailIsValid = false,
        passIsValid = false,
        ageIsValid = false;
  
  //function to check on fields
  function checkFields(){
    //check username field
    userNameField.addEventListener('input', function(e){
      if(this.value === '' || usernameRegEx.test(e.target.value)){
        errorMsg.style.display = 'none'
        userIsValid = true
      }else{
        errorMsg.textContent = "Username must contain 6-10 letters/numbers!"
        errorMsg.style.top = '60px'
        errorMsg.style.display = 'block'
        userIsValid = false
      }
      if(userIsValid && emailIsValid && passIsValid && ageIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
      }else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
      }
    })
    //check email field
    emailField.addEventListener('input', function(e){
      if(this.value === '' || emailRegEx.test(String(e.target.value).toLowerCase())){
        errorMsg.style.display = 'none'
        emailIsValid = true
      }else{
        errorMsg.textContent = "Please enter a valid email!"
        errorMsg.style.top = '125px'
        errorMsg.style.display = 'block'
        emailIsValid = false
      }
      if(userIsValid && emailIsValid && passIsValid && ageIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
      }else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
      }
    })
    //check password field
    passwordField.addEventListener('input', function(e){
      if(this.value === '' || passwordRegEx.test(e.target.value)){
        errorMsg.style.display = 'none'
        passIsValid = true
      }else{
        errorMsg.textContent = "Require at least 8 characters. letters, numbers and special characters are needed!"
        errorMsg.style.top = '190px'
        errorMsg.style.display = 'block'
        passIsValid = false
      }
      if(userIsValid && emailIsValid && passIsValid && ageIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
      }else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
      }
    })
    //check age field
    ageField.addEventListener('input', function(e){
      if(this.value === '' || ageRegEx.test(e.target.value)){
        errorMsg.style.display = 'none'
        ageIsValid = true
      }else{
        errorMsg.textContent = "Age must be from 12 to 70!"
        errorMsg.style.top = '255px'
        errorMsg.style.display = 'block'
        ageIsValid = false
      }
      if(userIsValid && emailIsValid && passIsValid && ageIsValid){
        submitBtn.classList.remove('disabled')
        submitBtn.disabled = false
      }else{
        submitBtn.classList.add('disabled')
        submitBtn.disabled = true
      }
    })
  }

  // call function check fields
  checkFields()


  //sending form
  submitBtn.addEventListener('click', function(e){
    e.preventDefault()
    // check if input fields are empty 
    if(userNameField.value !== '' && emailField.value !== '' && passwordField.value !== '' && ageField.value !== ''){
      errorMsg.style.display = 'none'
      // check if all fields are valid or not
      if(userIsValid && emailIsValid && passIsValid && ageIsValid){
        errorMsg.style.display = 'none'
        //create submit success message and hide it after 5seconds
        successMsg.style.display = 'block'
        setTimeout(() => {successMsg.style.display = 'none'}, 5000);
        //empty all fields
        userNameField.value = ''
        emailField.value = ''
        passwordField.value = ''
        ageField.value = ''
      }else{
        //show error msg
        errorMsg.textContent = "Something went wrong, Please check your inputs and try again!"
        errorMsg.style.top = '5px'
        errorMsg.style.display = 'block'
      }
    }else{
      //show error msg
      errorMsg.textContent = "All field are required!"
      errorMsg.style.top = '5px'
      errorMsg.style.display = 'block'
    }
  })
  