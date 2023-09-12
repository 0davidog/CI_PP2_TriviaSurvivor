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
		// generate a five digit number for the contact_number variable
		this.contact_number.value = (Math.random() * 100000) | 0;
            // these IDs from the previous steps
		emailjs.sendForm("service_pmzmnla", "contact-form", this).then(
			function () {
				document.getElementById("contact-form").reset();
				alert("Thank you for the feedback.");
			},
			function (error) {
				alert("Sorry, message failed to send");
			}
		);
	});
};
    