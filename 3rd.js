function func(event) {

    event.preventDefault();
    // Get the values from the form inputs
    const name = document.getElementById('Input_name').value;
    const phone = document.getElementById('Input_phone').value;

    if (name && phone) {
        
        // If valid, redirect to "3rd.html"
        window.location.href = "4th.html"; // Opens 3rd.html
    } else {
        // Show an alert if fields are empty
        return;
    }








// console.log("hello");
    // Validate that both fields are filled
//     if (!name || !phone) {
//         alert("Please fill out both name and phone number.");
//         return;
//     }

//     // Validate phone number (should be 10 digits)
//     if (phone.length !== 10 || isNaN(phone)) {
//         alert("Please enter a valid 10-digit phone number.");
//         return;
//     }
//    else{
//       console.log("hello")
//        window.location.href = "4th.html";
//    }
    // If validation passes, redirect to 4rd.html
}