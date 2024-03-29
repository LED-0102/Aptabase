document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('my-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get form data
        const formData = {
            email: document.getElementById('email').value,
            aptamer: document.getElementById('aptamer').value,
            target: document.getElementById('target').value,
            apt_type: document.getElementById('apt_type').value,
            length: document.getElementById('length').value,
            sequence: document.getElementById('sequence').value,
            effect: document.getElementById('effect').value,
            reference: document.getElementById('reference').value
        };

        // Make the API call
        fetch('https://aptabase.shuttleapp.rs/v1/insert', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                console.log(response);
                if (response.ok) {
                    prompt("Data submitted successfully");
                } else if (response.status === 400) {
                    prompt("Bad Request. Please try again");
                }
            });
    });
});
