$(document).ready(function() {
    $('#register').click(function(e) {
        e.preventDefault()
        if ($('#firstName').val() == '') $('#noFirstName').html('Please enter first name')
        else if ($('#lastName').val() == '') $('#noLastName').html('Please enter last name')
        else if (!$('input[name="gender"]:checked')) $('#noGender').html('Please enter gender')
        else if ($('select#country').val() == 'select') $('#noCountry').html('Please enter country')
        else if ($('textarea#address').val() == '') $('#noAddress').html('Please enter address')
        else if ($('#email').val() == '') $('#noEmail').html('Please enter email')
        else if ($('#psw').val() == '') $('#noPsw').html('Please enter password')
        else if ($('#psw2').val() == '') $('#noPsw2').html('Please enter password again')
        else if ($('#check1').prop('checked') == false) $('#noCheck1').html('Please accept to register')
        else if ($('#check2').prop('checked') == false) $('#noCheck2').html('Please accept to register')
        else $('#registration-form').submit()
    });
});
