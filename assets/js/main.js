// SHOW MENU

const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if(toggle && nav){
            toggle.addEventListener('click', () =>{
                  nav.classList.toggle('show')
            });
      }
}

showMenu('nav_toggle','nav_menu')

// ACTIVE & REMOVE ACTIVE
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// Contact Information
document.getElementById("sendbtn").addEventListener("click", () => {
      const fullname = document.getElementById("fullname");
      const email = document.getElementById("email");
      const phonenumber = document.getElementById("phonenumber");
      const message = document.getElementById("message");
  
      // Validation rules
      const nameRegex = /^[A-Za-z\s]+$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;  // Allows 10-digit phone numbers
  
      if (!nameRegex.test(fullname.value)) {
          alert("Please enter a valid name with letters only.");
          return;
      }
  
      if (!emailRegex.test(email.value)) {
          alert("Please enter a valid email address.");
          return;
      }
  
      if (!phoneRegex.test(phonenumber.value)) {
          alert("Please enter a valid 10-digit phone number.");
          return;
      }
  
      if (message.value.trim() === "") {
          alert("Please enter your message.");
          return;
      }
  
      // Send Email if all fields are valid
      emailjs.send("service_9qpmiun", "template_gkdo6tl", {
          from_name: fullname.value,
          email: email.value,
          phonenumber: phonenumber.value,
          message: message.value,
      }).then(() => {
          alert("Your message is sent");
      }).catch((error) => {
          alert("Failed to send message. Please try again.");
      });
});