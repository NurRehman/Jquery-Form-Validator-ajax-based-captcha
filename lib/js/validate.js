/* 
 *	19 - Nov, 2013
 *  Project: Alpha Numeric Captcha 
 *	Author: Nadeem Ur-Rehman
 *	Framework: Jquery Validate
 *  Purpose: Client-side form validation of Captcha
 */

$(document).ready( function() {
	
	 // refresh captcha
	 $('img#refresh').click(function() {  
			
           $('#captcha')[0].src="lib/get_captcha.php?rnd=" + Math.random();
	 });
	 
//Our own function to check captcha	
$.validator.addMethod('validCaptcha',function(value){
    var getURL = "lib/post.php";
    var captcha = $("#captchacode").val();
    var result;
    if(captcha.length == 5)
    {
        $.ajax({
            cache:      false,
            async:      false,
            type:       'POST',
            data:       {'captcha': captcha},
            url:        getURL,
            success:    function(msg){
                   result = msg;
                   // alert ('captcha is: ' + captcha + ', Response from PHP script: ' + msg);
            }

         /*error: function(xhr) {
        var msg = xhr.responseText;
        console.log(msg);
        var statusMessage = xhr.status + ' ' + xhr.statusText;
        var message  = 'Query failed, php script returned this status: ';
        var message = message + statusMessage + ' response: ' + msg;
        alert(message); */
    //}

        });
    }
    return result;
}, '');


	$('#FrontPage_Form1').validate({
		//debug: true,
		//onkeyup: false,
		//submitHandler: ajaxSubmit
                rules: {
                	Province_Location: {
                        required: true,
                    },
                    When_starting_code: {
                    	required: true,
                    },
                    
                    FirstName: {
                    	required:true,
                    },
                    LastName: {
                    	required:true,
                    },
                    Email: {
                    	required:true,
                    	email: true
                    },
                     captchacode: {
                     	required:       true,
               			validCaptcha:   true
					    },
        
                },
                messages: {
                    Province_Location: "Location of your business, is required",
                    When_starting_code: "Planning to start your business, is required",
                    FirstName:          "First Name is required",
                    LastName:           "Last Name is required",
                    Email: {
                        required:       "Email address required",
                        Email:          "Email address must be in the format name@domain.com."                        
                    },
					 captchacode: {
                	      required:      "Please enter the security code.",
                		  validCaptcha:  "Invalid Security Code,  please try again."
					    },


				},

				 submitHandler: function(form) {
                   $(form).ajaxSubmit(
                   // {
                   //          url:"echo/html",
                   //         type:"GET",
                   //      success: function(){
                   //          alert('inside');
                   //          $('#contact-form').hide();
                   //          $('#sent').show();
                   //    }
                   //  }
                    );
            }
                    
               
                
	});
	
	
});


