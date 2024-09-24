const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#signinpassword');

togglePassword.addEventListener('click', function (e) {
    const type = signinpassword.getAttribute('type') === 'password' ? 'text' : 'password';
    signinpassword.setAttribute('type', type);
    this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
});

// Example of form validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();

// local storage 
document.getElementById('signinForm').addEventListener('submit',function(e){
    e.preventDefault();

    //get user input
    const email =document.getElementById('signinemail').value;
    const password=document.getElementById('signinpassword').value;

    //Retrive user data from localstorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    //validate the form
    if(storedUser && email ===storedUser.email && password ===storedUser.password){

    //success :Redirect or show success message
        alert('Sign In Successfull');
        document.getElementById('signinForm').reset();

    }else{
        alert('Invalid email or passWord')
    }
});