document.getElementById("hamburger").addEventListener("click", function () {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#nav-links a").forEach((link) => {
  link.addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.remove("active");
  });
});

function hideNavOnScroll() {
  const navLinks = document.getElementById("nav-links");
  if (navLinks.classList.contains("active")) {
    navLinks.classList.remove("active");
  }
}

window.addEventListener("scroll", hideNavOnScroll);

//FOR EMAILJS
function sendMail(event) {
  event.preventDefault();

  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_kbfq0cp";
  const templateID = "template_96t9s1k";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message. Please try again.");
    });
}
