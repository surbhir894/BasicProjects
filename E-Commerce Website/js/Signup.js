const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#signuppassword');
const confirmPassword = document.querySelector('#confirmPassword');

togglePassword.addEventListener('click', function (e) {
    const type = signuppassword.getAttribute('type') === 'password' ? 'text' : 'password';
    signuppassword.setAttribute('type', type);
    confirmPassword.setAttribute('type', type);
    this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
});

// Example of form validation
(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')

    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity() || signuppassword.value !== confirmPassword.value) {
                    event.preventDefault()
                    event.stopPropagation()
                }
                form.classList.add('was-validated')
            }, false)
        })
})();

//local storage
document.getElementById('SignupForm').addEventListener('submit',function(e){
    e.preventDefault();

    //Get user input
    const name =document.getElementById('signupname').value;
    const email =document.getElementById('signupemail').value;
    const password =document.getElementById('signuppassword').value;

    //validate the form
    if (email && password.length>=8){
        //store user data in localstorage
        const user ={
            name:name,
            email:email,
            password:password
        };
        // save user data as astring in localstorage
        localStorage.setItem('user',JSON.stringify(user));

        //show success message or redirect
        alert('Sigup Successfully');

        //clear form
        document.getElementById('SignupForm').reset();
    }
    else{
        alert('Plz enter a valid email and password')
    }

});