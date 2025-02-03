document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
   
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('successMessage');

    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    successMessage.textContent = '';

    let valid = true;

    if (username === '') {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        valid = false;
    }

    if (password === '') {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        valid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.style.display = 'block';
        valid = false;
    }

    if (valid) {
        successMessage.textContent = 'Login successful!';
        successMessage.style.color = 'green';
        successMessage.style.display = 'block';
        
        setTimeout(() => {
            alert('Welcome, ' + username + '!');
            
        }, 500);
    }
});
