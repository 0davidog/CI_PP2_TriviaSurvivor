// JavaScript Document

/** @functiom
* These functions turn the contact form data into an email and send it to my personal address.
// Service provided by https://www.emailjs.com/
// Original code from https://www.emailjs.com/docs/tutorial/creating-contact-form/
*/

(function () {
        // https://dashboard.emailjs.com/admin/account
        emailjs.init("3Q0SMJLBwZIF-Uvwg");
})();

window.onload = function () {
	document
		.getElementById("contact-form")
		.addEventListener("submit", function (event) {
		event.preventDefault();
		document.getElementById('contact-form').disabled = true;
		// generate a five digit number for the contact_number variable
		this.contact_number.value = (Math.random() * 100000) | 0;
            // these IDs from the previous steps
		emailjs.sendForm("service_pmzmnla", "contact-form", this).then(
			function () {
				document.getElementById("contact-form").reset();
				modal_message.innerHTML = 'Thank you for your feedback.';
				modal.style.display = "flex";
				document.getElementById('feedback-text').innerHTML="Thank you, your feedback has been recieved and will be taken into consideration.";
				document.getElementById('contact-form').display="none";
			},
			function (error) {
				modal_message.innerHTML = 'Sorry, message failed to send.';
				modal.style.display = "flex";
				document.getElementById('feedback-text').innerHTML="Sorry, as your feedback failed to send please consider trying again.";
				document.getElementById('contact-form').disabled = false;
			}
		);
	});
};
    