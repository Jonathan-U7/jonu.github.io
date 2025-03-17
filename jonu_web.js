document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact_form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const message = document.getElementById('message').value;
            
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Gender:', gender);
            console.log('Message:', message);
        });
    } else {
        console.error('Form not found');
    }
});