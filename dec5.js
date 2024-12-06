function combineNames() {
    // Get values from input fields
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    // Combine the names
    const fullName = firstName + " " + lastName;

    // Display the full name in the <p> element
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('fullName').textContent = `GOOD NIGHT! ${fullName}`;
  }
