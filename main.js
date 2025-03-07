// When the user scrolls the page, execute the function
window.onscroll = function () {
    makeSearchBarSticky();
  };

  // Get the search bar
  var searchBar = document.querySelector(".search-container");

  // Get the offset position of the search bar
  var stickyOffset = searchBar.offsetTop;

  // Add the sticky class to the search bar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function makeSearchBarSticky() {
    if (window.pageYOffset >= stickyOffset - 15) {
      searchBar.classList.add("sticky");
    } else {
      searchBar.classList.remove("sticky");
    }
  }

  //whatsapp slider
  document.addEventListener("DOMContentLoaded", function () {
    var whatsappMessage = document.querySelector(".whatsapp-message");
    setInterval(function () {
      // Check the current width of the message to determine whether to show or hide it
      if (
        whatsappMessage.style.width === "150px" ||
        whatsappMessage.style.width === ""
      ) {
        whatsappMessage.style.width = "0";
        whatsappMessage.style.padding = "0"; // Collapse padding when hiding
      } else {
        whatsappMessage.style.width = "150px";
        whatsappMessage.style.padding = "10px"; // Expand padding when showing
      }
    }, 4000); // Toggle every 4 seconds
  });

  // Popup function
  document.addEventListener("DOMContentLoaded", function () {
    // Get all service cards
    var serviceCards = document.querySelectorAll(".service-card");
    // Get the popup container and content elements
    var popup = document.getElementById("service-popup");
    var popupImage = document.getElementById("popup-image"); // Image element
    var popupTitle = document.getElementById("popup-title");
    var popupDescription = document.getElementById("popup-description");
    // Get the close button
    var closeButton = document.querySelector(".popup-container .close-btn");

    // Function to open the popup
    function openPopup(imageSrc, title, description) {
      popupImage.src = imageSrc; // Set the image source
      popupTitle.textContent = title;
      popupDescription.textContent = description;
      popup.style.display = "block";
      document.body.classList.add("body-no-scroll"); // Prevent body scrolling
    }

    // Attach click event to each service card
    serviceCards.forEach(function (card) {
      card.addEventListener("click", function () {
        // Extract information from the card
        var imageSrc = this.querySelector("img").src; // Get the image source
        var title = this.querySelector(".service-header").textContent;
        var description = this.querySelector("h3").textContent;
        openPopup(imageSrc, title, description);
      });
    });

    // Function to close the popup
    closeButton.addEventListener("click", function () {
      popup.style.display = "none";
      document.body.classList.remove("body-no-scroll"); // Restore body scrolling
    });

    // Close the popup when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
        document.body.classList.remove("body-no-scroll"); // Restore body scrolling
      }
    });
  });

  //Signup-login Form
  // Get the modal
var loginModal = document.getElementById('login-modal');

// Get the button that opens the modal
var loginBtn = document.getElementById('login-button'); // You need to have an element with this ID

// Get the <span> element that closes the modal
var closeLogin = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal 
loginBtn.onclick = function() {
    document.body.classList.add("body-no-scroll"); // Prevent body scrolling
  loginModal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
closeLogin.onclick = function() {
    document.body.classList.remove("body-no-scroll"); // Restore body scrolling
    loginModal.style.display = 'none';
}

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == loginModal) {
//     loginModal.style.display = 'none';
//   }
// }

// Get the login form
var loginForm = document.getElementById('login-form');

// Handle form submission for login
loginForm.onsubmit = function(event) {
  event.preventDefault();
  // Implement your logic to handle login here
  // For example, you could send a request to your server
  console.log('Login form submitted');
  // Close the modal after login
  loginModal.style.display = 'none';
}

// Handle "Create account" link click
var createAccountLink = document.querySelector('.account-prompt a');
createAccountLink.onclick = function() {
  // Implement your logic to handle account creation here
  // For example, you could redirect to a signup page or open a signup modal
  console.log('Create account link clicked');
}

// Get the signup modal
var signupModal = document.getElementById('signup-modal');

// Get the link that opens the signup modal
var createAccountLink = document.querySelector('.account-prompt a');

// Get the <span> element that closes the signup modal
var closeSignup = document.getElementsByClassName('close')[1];

// When the user clicks the link, open the signup modal 
createAccountLink.onclick = function() {
    document.body.classList.add("body-no-scroll"); // Prevent body scrolling
    loginModal.style.display = 'none';
    signupModal.style.display = 'block';
  
}

// When the user clicks on <span> (x), close the signup modal
closeSignup.onclick = function() {
  signupModal.style.display = 'none';
  loginModal.style.display = 'none';
  document.body.classList.remove("body-no-scroll"); // Restore body scrolling

}

// // When the user clicks anywhere outside of the signup modal, close it
// window.onclick = function(event) {
//   if (event.target == signupModal) {
//     signupModal.style.display = 'none';
//   }
// }

// Get the signup form
var signupForm = document.getElementById('signup-form');

// Handle form submission for signup
signupForm.onsubmit = function(event) {
  event.preventDefault();
  // Implement your logic to handle signup here
  console.log('Signup form submitted');
  // Close the modal after signup
  signupModal.style.display = 'none';
}

// Switch to login form when the "Login" link is clicked
var loginLink = document.getElementById('login-link');
loginLink.onclick = function() {
  // Close the signup modal and open the login modal
  signupModal.style.display = 'none';
  loginModal.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == loginModal) {
      loginModal.style.display = 'none';
      document.body.classList.remove("body-no-scroll"); // Restore body scrolling

    }
    if (event.target == signupModal) {
        loginModal.style.display = 'none';
      signupModal.style.display = 'none';
      document.body.classList.remove("body-no-scroll"); // Restore body scrolling

    }
  }