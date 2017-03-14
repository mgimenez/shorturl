(function(doc){

	function makeShort() {
		var longUrl = doc.getElementById('longurl').value,
				request = gapi.client.urlshortener.url.insert({
					'resource': {
						'longUrl': longUrl
					}
				}),
				str = '';

		request.execute(function(response){
			if(response.id != null) {
				str +="<b>Short URL:</b> <a href='"+response.id+"'>"+response.id+"</a><br>";
				doc.getElementById("result").innerHTML = str;
			} else
			{
				alert("error: creating short url");
			}
		})
	}

	function load() {
		gapi.client.setApiKey('AIzaSyA4rNUZhEIseVxZ1BHlr21-4Lu7Ox5KrQ0'); //get your ownn Browser API KEY
		gapi.client.load('urlshortener', 'v1',function(){});

		doc.querySelector('.js-btn-create').addEventListener('click', function() {
			makeShort();
		});
	}

	window.onload = load;

}(window.document));
