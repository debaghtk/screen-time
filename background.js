chrome.browserAction.onClicked.addListener(function(){
	chrome.tabs.create({ 'url':"hello.html" });
	chrome.tabs.getAllInWindow(function(tabs) {
		var tabArray = new Array();
		for (let step = 0; step < tabs.length; step++) {
			try{
				hostname = new URL(tabs[step].url).host
			}
			catch(err){continue;}
			tabArray.push(hostname)	
		}
		chrome.storage.local.set({urls: tabArray}, function(){});
		console.log(tabArray)
	})
});
