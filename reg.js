document.addEventListener('DOMContentLoaded', () => {

   

    const loginForm = document.getElementById('login-form');

    const employeeRegisterForm = document.getElementById('employee-register-form');

    const employerRegisterForm = document.getElementById('employer-register-form');

   

    const loginBtn = document.getElementById('login-btn');

    const registerBtn = document.getElementById('register-btn');

   

    const toEmployeeRegister = document.getElementById('to-employer-register');

    const toEmployerRegister = document.getElementById('to-employee-register');

   

 

   loginBtn.addEventListener('click', () => {

       loginForm.classList.add('active');

       employeeRegisterForm.classList.remove('active');

       employerRegisterForm.classList.remove('active');

       loginBtn.classList.add('active');

       registerBtn.classList.remove('active');

       resetForms();

   });

 

   registerBtn.addEventListener('click', () => {

       employeeRegisterForm.classList.add('active');

       loginForm.classList.remove('active');

       employerRegisterForm.classList.remove('active');

       registerBtn.classList.add('active');

       loginBtn.classList.remove('active');

       resetForms();

   });

 

   toEmployeeRegister.addEventListener('click', () => {

       employerRegisterForm.classList.add('active');

       employeeRegisterForm.classList.remove('active');

       registerBtn.classList.remove('active');

       resetForms();

   });

 

   toEmployerRegister.addEventListener('click', () => {

       employeeRegisterForm.classList.add('active');

       employerRegisterForm.classList.remove('active');

       resetForms();

   });

 

   function resetForms() {

       [...document.querySelectorAll('.form input, .form textarea')].forEach(input => input.value = '');

   }

});