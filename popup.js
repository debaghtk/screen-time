let ul = document.getElementById('dynamic-list');

chrome.storage.local.get(['urls'], function(data) {
	console.log(data)
	for (let step = 0; step < data.urls.length; step++) {
		var li = document.createElement("li");
		li.appendChild(document.createTextNode(data.urls[step].toString()));
		ul.appendChild(li);
	}
});
