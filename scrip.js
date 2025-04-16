$(document).ready(function () {
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 550) {
            $('.navbar').addClass('solid');
            $('.back-to-top').addClass('visible');
        } else {
            $('.navbar').removeClass('solid');
            $('.back-to-top').removeClass('visible');
        }

    });
});


$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
<!-- EmailJS SDK -->
<script src="https://cdn.emailjs.com/dist/email.min.js"></script>
<script>
  (function () {
    emailjs.init("YOUR_PUBLIC_KEY"); // <-- Replace with your EmailJS Public Key
  })();
</script>

<script>
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        alert("Failed to send message. Please try again!");
        console.error(error);
      });
  });
</script>
