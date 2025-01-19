"use strict";
jQuery(document).ready(function ($) {

//==========================================
// MOBAILE MENU
//=========================================

    $('#navbar-menu').find('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 0)
                }, 1000);
                if ($('.navbar-toggle').css('display') != 'none') {
                    $(this).parents('.container').find(".navbar-toggle").trigger("click");
                }
                return false;
            }
        }
    });


//==========================================
//ScrollUp
//=========================================

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('#scrollUp').fadeIn('slow');
        } else {
            $('#scrollUp]').fadeOut('slow');
        }
    });

    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });



//==========================================
// For fancybox active
//=========================================

    $('.fancybox').fancybox();
    
    

//==========================================
// Loading
//=========================================

    $(window).load(function () {
        $("#loading").fadeOut(500);
    });

//==========================================
// ContactPage Email Connecting
//=========================================

(function () {
  emailjs.init("service_73sxylpOUR_USER_ID"); // Replace with your EmailJS user ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Collect form data
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("msg").value,
    };

    // Send email using EmailJS
    emailjs.send("service_73sxylp", "template_0zf4iwk", formData).then(
      function (response) {
        alert("Message sent successfully!");
        console.log("Success:", response.status, response.text);
        document.getElementById("contact-form").reset(); // Reset form fields
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log("Error:", error);
      }
    );
  });

});
