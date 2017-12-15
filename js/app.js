
$(document).ready(function() {

	$('#searchContent').hide();

	$.ajax({url: 'http://localhost:3000/igdb'})
		.done(function(data) {
		$('#submitUserData').on('click', function(event) {
			$('#searchContent').empty(); //clear div of old content.
			event.preventDefault(); //stops page from refreshing
			var $earch = $('#userInput').val().trim(); //capture value
			$('#searchContent').slideDown(1000);
			var $earchResult = $('<div>');
			for (var i = 0; i < data.length; i++) {
				var $earchReturn = $('<p>');
				$earchReturn.text(data[i].name);
				$earchResult.append($earchReturn);
				console.log(data[i].name)
			}
			$('#searchContent').append($earchResult);//append html to #searchContent div.
			
		});
	})
}); //End of document ready
