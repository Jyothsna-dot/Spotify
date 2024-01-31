{/* <script>
  function validateForm() {
    var email = document.getElementById('emailVal').value;
    var password = document.getElementById("passwordVal").value;
    var errorMessage = document.getElementById('errorMessage');

   
    if (email.trim() === '' || password.trim() === '') {
      errorMessage.textContent = 'Fill in both email and password fields';
      return;
    }

    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errorMessage.textContent = 'Invalid email address';
      return;
    }

    
    if (password.length < 8) {
      errorMessage.textContent = 'Password must be at least 8 characters long';
      return;
    }

   
    errorMessage.textContent = ''; // Clear any previous error messages
    alert('Login successful!');
    // Uncomment the line below to submit the form
    // document.getElementById('loginForm').submit();
  }
</script> */}