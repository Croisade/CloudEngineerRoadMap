var API_URL = 'https://54t091w6ak.execute-api.us-east-1.amazonaws.com/prod/';
var $fortune = $('#fortune');

$("#get").click( function () {
	$.getJSON(API_URL).done(function(data) { 
		questionnaire = data;
		// location.reload();
		console.log(questionnaire);
		function pickRandomQuestion(){
			var obj_keys = Object.keys(questionnaire);
			var ran_key = obj_keys[Math.floor(Math.random() *obj_keys.length)];
			selectedquestion = questionnaire[ran_key];
			document.getElementById('text').innerHTML = selectedquestion.message;
		}
		pickRandomQuestion()
	} );
} );
$('#idea').on('click', function() {
	var apipost = {
		message: $fortune.val(),
	};
	$.ajax({
		type: 'POST',
		url: API_URL,
		data: JSON.stringify(apipost),
		dataType: 'json',
		success: function() {
			alert('Your fortune has been submitted');
			document.getElementById('fortune').value = '';
			location.reload();
			
		},
		error: function(){
			alert('Error posting information');
		}
	});
});

