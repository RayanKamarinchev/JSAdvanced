function validate() {
    let submit = document.getElementById('submit');
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let confirmPassword = document.getElementById('confirm-password');

    let userReg = new RegExp('[\\w\\d]{3,20}')
    let passReg = new RegExp('[\\w\\d_]{5,15}')
    let emailReg = new RegExp('.*@.*\\..*')
    document.getElementById('registerForm').addEventListener('submit', (event) =>{
        event.preventDefault();
    }, false)
    submit.addEventListener('click', (event) => {
        if(!username.value.match(userReg)){
            username.style.borderColor = 'red';
        }else{
            username.style.border = 'none';
        }

        if(!password.value.match(passReg)){
            password.style.borderColor = 'red';
        }else{
            password.style.border = 'none';
        }

        if(!confirmPassword.value.match(passReg)){
            confirmPassword.style.borderColor = 'red';
        }else{
            confirmPassword.style.border = 'none';
        }

        if(confirmPassword.value != password.value){
            password.style.borderColor = 'red';
            confirmPassword.style.borderColor = 'red';
        }else{
            confirmPassword.style.border = 'none';
            password.style.border = 'none';
        }

        if(!email.value.match(emailReg)){
            email.style.borderColor = 'red';
        }else{
            email.style.border = 'none';
        }
    })


}
