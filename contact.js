document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to handle it programmatically
  
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // You can perform additional validation here if needed
  
    // Store data in local storage (you can also use cookies or a server to store the data)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('message', message);
  
    // Open the next page
    window.location.href = 'Successfull.html';
  });
  