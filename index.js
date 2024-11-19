function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault()
        emailjs.sendForm('service_nkarnsa', 'template_128p5cn', '#contact-form')
            .then(() => {
                // console.log('SUCCESS!');
                alert("message sent successfully");
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}

