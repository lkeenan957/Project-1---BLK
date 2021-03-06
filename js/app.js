
$(document).ready(function() {

	$('#searchContent').hide();

	$.ajax({url: 'http://localhost:3000/igdb'})
		.done(function(data) {
		$('#submitUserData').on('click', function(event) {
			$('#searchContent').empty(); //clear div of old content.
			event.preventDefault(); //stops page from refreshing
			var search = $('#userInput').val().trim(); //capture value
			$('#searchContent').slideDown(1000);
			var searchResult = $('<div>');
			for (var i = 0; i < data.length; i++) {
				var searchReturn = $('<p>');
				searchReturn.text(data[i].name);
				searchResult.append(searchReturn);
				console.log(data[i].name)
			}
			$('#searchContent').append(searchResult);//append html to #searchContent div.
		});
	})

}); //End of document ready

