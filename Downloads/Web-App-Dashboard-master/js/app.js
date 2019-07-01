$("document").ready(function() {

	/* Close alert message when X is clicked. */

	$("#close-button").click(function() {
		$("#alert").fadeOut("slow");
	});


	/* Notifications Drop Down List */

	$('#notification-bell').click(function () {
		// Show notifications drop-down
		if ($('#notifications').css("visibility") == "hidden") {
			$('#notifications').css("visibility", "visible").fadeIn();
		}

		else {
			$('#notifications').fadeToggle('slow', 'linear');
		}

		$("#alert-dot").fadeOut("slow");
		return false;

	});

	// Hide notifications drop-down when anywhere on the page is clicked
	$(document).click(function () {
		$('#notifications').fadeOut("slow");
	});

	// Do nothing when notifications drop-down is clicked
	$('#notifications').click(function () {
		return false;
	});


	/* Send Message */
	/* Use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript. */
	/* Use JS to display error messages if user isn’t selected or message field is empty.*/

	//when user clicks send
	$('#send-button').click(function(e) {
		//prevent default button click behavior
		e.preventDefault();
		$('#message-form').hide();

		//if either field is empty, display error message
		if ($('input#search').val().length === 0 || $('#textarea').val().length === 0) {
			$('#message-user').append('<div id="error"><p>Please include both a user name and a message. Fields cannot be empty.</p><p><button id="new-message">Try Again</button><p></div>');

			//when user clicks new message button
			$('#new-message').click(function(){
				// remove confirmation message and button
				$('#confirmation').remove();
				// remove error message
				$('#error').remove();
				// revert back to original message form
				$('#message-form').show();
			});
		}

		else if ($('input#search').val().length > 0) {
			//replace html in that section with message and button
			$('#message-user').append('<div id="confirmation"><p>Thanks! Your message has been sent.</p><p><button id="new-message">New Message</button><p></div>');

			//when user clicks new message button
				$('#new-message').click(function(){
					// remove confirmation message and button
					$('#confirmation').remove();
					// remove error message
					$('#error').remove();
					// reset form fields
					$('#message-form')[0].reset();
					// revert back to original message form
					$('#message-form').show();
				});
			}
	});

	/* Auto-Complete Member Search */

	$('input[id="search"]').autoComplete({
		minChars: 1,
		source: function(term, suggest){
			term = term.toLowerCase();
			var choices = ['Bucky Bibbler', 'Abraham Lincoln', 'Sheri Berry', 'Joan Pennington', 'Hillary Clinton', 'Erik Estrada', 'Jacob Jacobson', 'Weird Al Yankovich', 'Mickey Mouse', 'John Boy', 'Babe Ruth', 'Dolly Parton', 'Scout Finch'];
			var matches = [];
			for (i=0; i<choices.length; i++)
				if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
			suggest(matches);
		}
	});


	/* Local Storage */

// Store settings when save button is clicked
$('#save-button').click(function(e){
	e.preventDefault();
	var timezone = $('#timezone').val();
	localStorage.setItem('mytimezone', timezone);

	var email = $('#email-switch').prop('checked');
	localStorage.setItem('myemail', email);

	var public = $('#public-switch').prop('checked');
	localStorage.setItem('myprofile', public);
});

	//Show saved timezone on reload
	$('#timezone').val(localStorage.getItem('mytimezone'));

	//Show saved checkboxes on reload
		if (localStorage.getItem('myemail') == "true") {
			$('#email-switch').prop('checked', true);
		} else {
			$('#email-switch').prop('checked', false);
		}

		if (localStorage.getItem('myprofile') == "true") {
			$('#public-switch').prop('checked', true);
		} else {
			$('#public-switch').prop('checked', false);
		}

	//When cancel button is clicked, clear local storage
	$('#cancel-button').click(function(e){
		e.preventDefault();
		localStorage.clear();
		// Revert back to defaults
		$('#timezone').val('a');
		$('#email-switch').prop('checked', false);
		$('#public-switch').prop('checked', false);
	});

});
