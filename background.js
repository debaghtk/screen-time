chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.create({ 'url':"hello.html" });
	console.log(chrome.tabs)
	chrome.tabs.getAllInWindow(function(tabs) {
		for (let step = 0; step < tabs.length; step++) {
			console.log(new URL(tabs[step].url).host)
		}
	})
});
