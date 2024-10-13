$(document).ready(function() {
    $('#bookingForm').on('submit', function(event) {
        event.preventDefault(); 


        $('#successModal').modal('show');
    });

    $('#registrationForm').on('submit', function(event) {
        event.preventDefault(); 

        $('#successModal').modal('show');
    });
});