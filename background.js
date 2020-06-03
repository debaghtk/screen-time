chrome.tabs.query({active: true}, function(t) { console.log(t[0].url); })
