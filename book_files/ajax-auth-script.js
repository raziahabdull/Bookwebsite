jQuery(document).ready(function ($) {
	// Close popup
    $(document).on('click', '.close', function () {
		$('form#login, form#register').removeClass('showform');
		
        return false;
    });

    // Show the login/signup popup on click
    $('#pop_login').on('click', function (e) {
        $('.slogin').addClass('showhide');
		$('form#login').addClass('showform');
		$('.sregister').removeClass('showhide');
		$('form#register').removeClass('showform');
		$("#robot, #robot2").removeAttr("checked");
		$('.robot_oke, .robot2_oke').html('');
		$('body').removeClass('menu__active');
		$('body').removeClass('contact__active');
        e.preventDefault();
    });
	
	$('#pop_signup').on('click', function (e) {
        $('.sregister').addClass('showhide');
		$('form#register').addClass('showform');
		$('.slogin').removeClass('showhide');
		$('form#login').removeClass('showform');
		$("#robot, #robot2").removeAttr("checked");
		$('.robot_oke, .robot2_oke').html('');
		$('body').removeClass('menu__active');
		$('body').removeClass('contact__active');
        e.preventDefault();
    });

	// Perform AJAX login/register on form submit
	$('form#login, form#register').on('submit', function (e) {
        if (!$(this).valid()) return false;
        $('p.status', this).show().text(ajax_auth_object.loadingmessage);
		action = 'ajaxlogin';
		username = 	$('form#login #username').val();
		password = $('form#login #password').val();
		robot = $('form#login #robot').val();
		email = '';
		security = $('form#login #security').val();
		if ($(this).attr('id') == 'register') {
			action = 'ajaxregister';
			username = $('#signonname').val();
			password = $('#signonpassword').val();
			robot = $('form#login #robot').val();
        	email = $('#email').val();
        	security = $('#signonsecurity').val();	
		}  
		ctrl = $(this);
		$.ajax({
            type: 'POST',
            dataType: 'json',
            url: ajax_auth_object.ajaxurl,
            data: {
                'action': action,
                'username': username,
                'password': password,
				'robot': robot,
				'email': email,
                'security': security
            },
            success: function (data) {
				$('p.status', ctrl).text(data.message);
				if (data.loggedin == true) {
                    document.location.href = ajax_auth_object.redirecturl;
                }
            }
        });
        e.preventDefault();
    });
	
	$(document).ready(function(){
		$('#robot').is(":not(:checked)");
        $('#robot').click(function(){
            if($(this).is(":checked")){
                $('.robot_oke').html('<input class="submit_button" type="submit" value="Login">');
            }
            else if($(this).is(":not(:checked)")){
                $('.robot_oke').html('');
            }
        });
		$('#robot2').click(function(){
            if($(this).is(":checked")){
                $('.robot2_oke').html('<input class="submit_button" type="submit" value="Register">');
            }
            else if($(this).is(":not(:checked)")){
                $('.robot2_oke').html('');
            }
        });
    });
	
	// Client side form validation
    if (jQuery("#register").length) 
		jQuery("#register").validate(
		{ 
			rules:{
			password2:{ equalTo:'#signonpassword' 
			}	
		}}
		);
    else if (jQuery("#login").length) 
		jQuery("#login").validate();
	
	
});