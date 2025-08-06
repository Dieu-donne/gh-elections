$(document).ready(function () {

    $('#messend').click( function(){

        $('#turn').replaceWith('<span id="turn">Sending...</span>');


        grecaptcha.ready(function() {
            grecaptcha.execute('6Lcos5MqAAAAAFAubqFWOrLdDosf1wyHZS_jrd_t', {action: 'submit'}).then(function(token) {
                // Add your logic to submit to your backend server here.

                $.ajax({
                    url: "mail.php",
                    method: "POST",
                    data: {
                        "mailing": true,
                        "toks": token,
                        "contactname": $('#contactname').val(),
                        "companyname": $('#companyname').val(),
                        "contactphone": $('#contactphone').val(),
                        "contactemail": $('#contactemail').val(),
                        "contactmessage": $('#contactmessage').val(),
                        "subject":  $('.ver-2:checked').val()
                    },
                    success: function(data){
                        $('#modal-1').modal('show');
                        $('#contactname').val('');
                        $('#companyname').val('');
                        $('#contactphone').val('');
                        $('#contactemail').val('');
                        $('#contactmessage').val('');
                        $('#mailing_message').empty();
                        $('#mailing_message').append(data);
                    },
                    async: true
                });

            });
        });
       
        setTimeout(function() {
            // Code to be executed after the delay
            $('#turn').replaceWith('<span id="turn">Send Message</span>');
        }, 7000); 
    })

});